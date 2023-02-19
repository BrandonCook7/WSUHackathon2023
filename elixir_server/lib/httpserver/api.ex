defmodule Api.CORS do
  use Corsica.Router,
  origins: ["http://localhost:5173", "http://localhost:8001"],
  allow_credentials: true,
  max_age: 600

  resource "/public/*", origins: "*"
  resource "/*"
end
