import { useParams } from "react-router-dom";
import { useRecipes } from "../hooks/useRecipes.js";
import styles from "./Recipe.module.css";

function Recipe() {
  const { id } = useParams();
  const { recipes, loading } = useRecipes();

  if (loading) return <p>Henter opskrift...</p>;

  const recipe = recipes.find((r) => r.id === Number(id));

  if (!recipe) return <p>Opskrift ikke fundet</p>;

  return (
    <section className={styles.recipe}>
      <h1>{recipe.name}</h1>

      <img src={recipe.image} alt={recipe.name} />

      <div className={styles.info}>
        <p> {recipe.cuisine}</p>
        <p>{recipe.difficulty}</p>
        <p>{recipe.rating}</p>
        <p> {recipe.prepTimeMinutes} min</p>
        <p> {recipe.servings} pers</p>
      </div>

      <div className={styles.content}>
        <div className={styles.card}>
          <h2>Ingredienser</h2>

          <ul>
            {recipe.ingredients.map((ingredient) => (
              <li key={ingredient}>{ingredient}</li>
            ))}
          </ul>
        </div>

        <div className={styles.card}>
          <h2>Fremgangsmåde</h2>

          <ol>
            {recipe.instructions.map((instruction) => (
              <li key={instruction}>{instruction}</li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Recipe;
