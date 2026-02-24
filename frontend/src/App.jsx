import Layout from "./components/Layout";
import Home from "./pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import axios from "axios";
import AddFood from "./components/AddFood";

const getAllRecipes = async () => {
  let allRecipes = [];
  await axios
    .get("http://localhost:3000/recipe")
    .then((res) => (allRecipes = res.data))
    .catch((err) => console.log("The following error occured", err));

  return allRecipes;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    hydrateFallbackElement: (
      <div className="h-screen flex items-center justify-center">
        Loading App...
      </div>
    ),
    children: [
      { path: "/", element: <Home />, loader: getAllRecipes },
      { path: "/myRecipe", element: <Home />, loader: getAllRecipes },
      { path: "/favRecipe", element: <Home />, loader: getAllRecipes },
      { path: "/addRecipe", element: <AddFood />, loader: getAllRecipes },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
