defmodule Httpserver.HelloWorldPlug do
    import Plug.Conn

    def init(options), do: options

    def call(conn, _opts) do
        conn
        send_resp(put_resp_content_type(conn, "text/plain"), 200, "Hello World!\n")
    end
end
