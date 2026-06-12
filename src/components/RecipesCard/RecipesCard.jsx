import styles from "./RecipesCard.module.css";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";

function RecipesCard({ recipe, toggleLiked, likedRecipes }) {
 const [showIngredients, setShowIngredients] = useState(false)

  const liked = likedRecipes.some((r) => r.id == recipe.id)

  return (
    <div className={styles.card}>
      <div className={styles.heart} onClick={() => toggleLiked(recipe)}>
        {liked ? (
          <FaHeart className={styles.heartFull} />
        ) : (
          <FaRegHeart className={styles.heartEmpty} />
        )}
      </div>

      <Link to={`/recipes/${recipe.id}`}>
        <img src={recipe.image} alt={recipe.name} />
      </Link>

      <h3>{recipe.name}</h3>
      <p>{recipe.mealType}</p>
      <p>{recipe.cuisine}</p>
      <p>{recipe.difficulty}</p>
      <p>{recipe.rating}</p>
      <button
        className={styles.button}
        onClick={() => setShowIngredients(!showIngredients)}
      >
        Vis Ingredienser
      </button>
      {showIngredients && (
        <ul className={styles.list}>
          {recipe.ingredients.map((i) => (
            <li>{i}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default RecipesCard;
