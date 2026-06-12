import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import LikedRecipes from "./components/LikedRecipes/LikedRecipes";
import RecipesList from "./components/RecipesList/RecipesList";
import Slider from "./components/Slider/Slider";
import { useLikedRecipes } from "./hooks/useLikedRecipes";
import Routes from "./routes/Routes";

function App() {
  const { likedRecipes, toggleLiked } = useLikedRecipes();

  return (
    <>
      <Header likedRecipes={likedRecipes} toggleLiked={toggleLiked} />
      <Routes likedRecipes={likedRecipes} toggleLiked={toggleLiked} />
      {/* <Slider />
      <RecipesList likedRecipes={likedRecipes} toggleLiked={toggleLiked} /> */}
      {/* <LikedRecipes likedRecipes={likedRecipes} toggleLiked={toggleLiked} /> */}

      <Footer />
    </>
  );
}

export default App;
