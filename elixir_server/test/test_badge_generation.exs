defmodule TestBadge do

  # UUID = <<101, 211, 128, 207, 153, 73, 76, 57, 130, 195, 147, 243, 164, 76, 98, 33>>

  def connect() do
    Postgrex.start_link(hostname: "db.ohjfvruvcrqreevurhdn.supabase.co", username: "postgres", password: "qF72WMU1bJ23hurp", database: "postgres")#{:ok, PID<0.69.0>}
  end


  # {:ok, result_categories} = Postgrex.query(pid, "SELECT category_order, parent_library_id, category_name FROM categories", [])

  # grouped = Enum.group_by(result_categories.rows, fn [category_order, parent_library_id, category_name] -> parent_library_id end)

  # highest_category_orders = grouped
  #   |> Enum.map(fn {parent_library_id, rows} ->
  #     {parent_library_id, Enum.max_by(rows, fn [category_order, _, _] -> category_order end) |> List.first}
  #   end)
  #   |> Enum.map(fn {a, b} -> [a, b] end)
  # # Print the results
  # IO.inspect(highest_category_orders)

  # {:ok, result_completed} = Postgrex.query(pid, "SELECT user_id, language_id, sections_completed FROM has_completed", [])
  # IO.inspect(result_completed)
  # #UUID.binary_to_string
  # rows = result_completed.rows#MapSet.new(list2) |> MapSet.subset?(MapSet.new(list1))
  # rows = Enum.filter(rows, fn {_, lang_id, sections_comp} -> Enum.member?(highest_category_orders, [lang_id, sections_comp]) end)
  # #rows = result_completed.rows
  # #new_list = Enum.map(rows, fn {uuid, y, z} -> {UUID.binary_to_string(uuid), y,z} end)

  # IO.inspect(rows)

end

{:ok, pid} = TestBadge.connect()
