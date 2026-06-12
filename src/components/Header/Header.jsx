import { useState } from "react";
import styles from "./Header.module.css";
import { FaHeart, FaTimes } from "react-icons/fa";
import RecipesCard from "../RecipesCard/RecipesCard";
import { Link } from "react-router-dom";

function Header({ likedRecipes, toggleLiked }) {
  const [showFavorites, setShowFavorites] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/">
          <h1>
           Recipe App
          </h1>
        </Link>

        <nav className={styles.nav}>
          <a href="#recipes">Opskrifter</a>

          <button
            className={styles.favoriteBtn}
            onClick={() => setShowFavorites(!showFavorites)}
          >
            <p className={styles.titleP}>Favorites</p>
            <FaHeart className={styles.heartFull} />
            <span>{likedRecipes.length}</span>
          </button>
        </nav>
      </div>

      {showFavorites && (
        <div className={styles.favoritesContainer}>
          <div className={styles.favoritesHeader}>
            <h2>Mine favoritter</h2>

            <button
              className={styles.closeBtn}
              onClick={() => setShowFavorites(false)}
            >
              <FaTimes />
            </button>
          </div>

          {likedRecipes.length == 0 ? (
            <p>Du har ingen favoritter endnu.</p>
          ) : (
            <div className={styles.favoritesGrid}>
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
        </div>
      )}
    </header>
  );
}

export default Header;
