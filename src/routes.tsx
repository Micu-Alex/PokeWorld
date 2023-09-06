import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import PokemonDetailsPage from "./pages/PokemonDetailsPage";
import Layout from "./pages/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "pokemon/:name", element: <PokemonDetailsPage /> },
    ],
  },
]);

export default router;
