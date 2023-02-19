defmodule Httpserver.Router do
  use Plug.Router

  plug :match
  plug :dispatch
  def connect() do
    Postgrex.start_link(hostname: "db.ohjfvruvcrqreevurhdn.supabase.co", username: "postgres", password: "qF72WMU1bJ23hurp", database: "postgres")#{:ok, PID<0.69.0>}
  end

  # {:ok, result} = Postgrex.query(pid, "SELECT * FROM programming_language", [])
  # case result do
  #   %Postgrex.Result{columns: columns, rows: rows} ->
  #     Enum.each(rows, fn row ->
  #       IO.inspect(row)
  #     end)
  #   _ ->
  #     IO.puts "Unexpected query result format: #{inspect result}"
  # end


  get "/" do
    # Get request to localhost 8000
    send_resp(conn, 200, "Welcome to my API")
  end

  #Checks what badges the user could have earned and returns a json back with the badges completed
  get "/get_badges/:user_id" do
    {:ok, pid} = connect()
    {:ok, result} = Postgrex.query(pid, "SELECT * FROM categories", [])
    #{:ok, result_completed} = Postgrex.query(pid, "SELECT * FROM has_completed", [])
    case result do
      %Postgrex.Result{columns: columns, rows: rows} ->
        Enum.each(rows, fn row ->
          IO.inspect(row)
        end)
      _ ->
        IO.puts "Unexpected query result format: #{inspect result}"
    end
    send_resp(conn, 200, "ID #{user_id}")
  end

  get "/:name" do
    send_resp(conn, 200, "Welcome #{name}")
  end

  match _ do # default case for requests that match nothing above
    send_resp(conn, 404, "There is no route for you call")
  end
end
