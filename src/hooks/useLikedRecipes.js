import { useState } from "react"

export function useLikedRecipes() {
  const [likedRecipes, setLikedRecipes] = useState(() => {
    return JSON.parse(localStorage.getItem("likedRecipes") || " []")
  })

  function toggleLiked(recipe) {
    const currentList = JSON.parse(localStorage.getItem('likedrecipes') || '[]')
    const isLiked = likedRecipes.some((r) => r.id == recipe.id)

    const updatedList = isLiked
      ? likedRecipes.filter((r) => r.id != recipe.id)
      : [...likedRecipes, recipe]

    setLikedRecipes(updatedList)
    localStorage.setItem("likedRecipes", JSON.stringify(updatedList));
    console.log(updatedList);
  }

  return { likedRecipes, toggleLiked }
}
