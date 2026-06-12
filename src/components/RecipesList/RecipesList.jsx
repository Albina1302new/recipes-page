import { useRecipes } from "../../hooks/useRecipes";
import RecipesCard from "../RecipesCard/RecipesCard";
import styles from "./RecipesList.module.css";

function RecipesList({likedRecipes, toggleLiked}) {
  const { recipes, loading } = useRecipes();
   if (loading) return <p>Henter opskrifter...</p>
   
  return (
    <section id="recipes">
      <div className={styles.recipesGrid}>
        {recipes.map((recipe) => (
          <RecipesCard
            key={recipe.id}
            recipe={recipe}
            toggleLiked={toggleLiked}
            likedRecipes={likedRecipes}
          />
        ))}
      </div>
    </section>
  );
}

export default RecipesList;
