defmodule Httpserver.Router do
  import UUID
  import JSON
  use Plug.Router
  plug Api.CORS

  plug :match
  plug :dispatch
  def connect() do
    Postgrex.start_link(hostname: "db.ohjfvruvcrqreevurhdn.supabase.co", username: "postgres", password: "qF72WMU1bJ23hurp", database: "postgres")#{:ok, PID<0.69.0>}
  end

  get "/" do
    # Get request to localhost 8000
    send_resp(conn, 200, "Welcome to my API")
  end

  #Checks what badges the user could have earned and returns a json back with the badges completed
  get "/get_badges/:user_id" do
    {:ok, pid} = connect()
    {:ok, result_categories} = Postgrex.query(pid, "SELECT category_order, parent_library_id, category_name FROM categories", [])

    grouped = Enum.group_by(result_categories.rows, fn [category_order, parent_library_id, category_name] -> parent_library_id end)

    highest_category_orders = grouped
      |> Enum.map(fn {parent_library_id, rows} ->
        {parent_library_id, Enum.max_by(rows, fn [category_order, _, _] -> category_order end) |> List.first}
      end)
      |> Enum.map(fn {a, b} -> [a, b] end)
    # Print the results
    # IO.inspect(highest_category_orders)

    {:ok, %{rows: user_results_completed}} = Postgrex.query(pid,
      "SELECT language_id, sections_completed FROM has_completed WHERE user_id = '#{user_id}'",
    [])

    {:ok, %{rows: max_score_for_each_language}} = Postgrex.query(pid,
      "select parent_library_id, max(category_order) from categories group by parent_library_id",
    [])

    e1 = Enum.sort_by(user_results_completed, fn [a,b] -> a end)
    e2 = Enum.sort_by(max_score_for_each_language, fn [a,b] -> a end)

    IO.inspect(e1)
    IO.inspect(e2)

    badges = Enum.map(Enum.zip(e1, e2),
      fn {[a,b], [c,d]} -> b >= d end)
    IO.inspect(badges)

    all_possible_badges = [
      %{name: "Python", img: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg"},
      %{name: "JavaScript", img: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"},
      %{name: "TypeScript", img: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg"},
      %{name: "C#", img: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Csharp_Logo.png"},
    ]

    final_data = %{res: Enum.zip(badges, all_possible_badges) |> Enum.filter(fn {succeed, _} -> succeed end) |> Enum.map(fn {_, b} -> b end)}
    {:ok, res} = JSON.encode(final_data)
    IO.inspect(res)

    send_resp(conn, 200, res)
  end

  get "/:name" do
    send_resp(conn, 200, "Welcome #{name}")
  end

  match _ do # default case for requests that match nothing above
    send_resp(conn, 404, "There is no route for you call")
  end
end
