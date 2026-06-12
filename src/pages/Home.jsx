import RecipesList from "../components/RecipesList/RecipesList"
import Slider from "../components/Slider/Slider";


function Home({likedRecipes, toggleLiked}) {
    return (
        <>

        <Slider/>
      <RecipesList likedRecipes={likedRecipes} toggleLiked={toggleLiked} />
        </>
    );
}

export default Home