import { useRoutes } from "react-router-dom";
import Home from "../pages/Home";
import Recipe from "../pages/Recipe";

function Routes({likedRecipes, toggleLiked}) {
  return useRoutes([
    {
      path: "/",
      element: <Home likedRecipes={likedRecipes} toggleLiked={toggleLiked} />,
    },
    {
      path: "/recipes/:id",
      element: <Recipe />,
    },
  ]);
}

export default Routes;
