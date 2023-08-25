import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./Pages/homepage";
import PokemonDetail from "./Pages/pokemonDetail";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage></Homepage>,
  },
  {
    path: "/Pokemon/:id",
    element: <PokemonDetail></PokemonDetail>,
  },
]);
