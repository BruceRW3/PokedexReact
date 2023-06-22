import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./Pages/homepage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage></Homepage>,
  },
]);
