import { useEffect, useState } from "react"; // Import React hooks

export function useRecipes() {
  // Custom hook til opskrifter
  const [recipes, setRecipes] = useState([]); // Gemmer opskrifterne
  const [loading, setLoading] = useState(true); // Status for indlæsning

  async function fetchRecipes() {
    // Funktion til at hente data fra API
    try {
      // Kører hvis der ikke opstår fejl
      const response = await fetch("https://dummyjson.com/recipes"); // Henter data fra serveren
      const result = await response.json(); // Konverterer svaret til et JavaScript-objekt
      setRecipes(result.recipes); // Gemmer opskrifterne i state
    } catch (error) {
      console.error("Noget gik galt", error); // Viser fejl i konsollen
    } finally {
      // Kører altid, uanset om der er fejl eller ej
      setLoading(false); // Stopper indlæsningen
    }
  }

  useEffect(() => {
    fetchRecipes(); // Henter opskrifter når komponenten bliver indlæst
  }, []);

  return { recipes, loading }; // Returnerer data og loading-status
}
