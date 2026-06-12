import styles from "./LikedRecipes.module.css";
import RecipesCard from "../RecipesCard/RecipesCard";
/* import { useLikedRecipes } from "../../hooks/useLikedRecipes"; */

function LikedRecipes({likedRecipes, toggleLiked}) {
  /* const { likedRecipes, toggleLiked } = useLikedRecipes(); */

  return (
    <section id="favorites" className={styles.likedSection}>
      <h2>Mine favoritter</h2>

      {likedRecipes.length == 0 ? (
        <p className={styles.subtitleLiked}>Du har ingen favoritter endnu.</p>
      ) : (
        <div className={styles.likedGrid}>
          {likedRecipes.map((recipe) => (
            <RecipesCard
              key={recipe.id}
              recipe={recipe}
              toggleLiked={toggleLiked}
              likedRecipes={likedRecipes}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default LikedRecipes;
