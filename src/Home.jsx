import axios from "axios";
import { useState, useEffect } from "react";
import { RecipesIndex } from "./RecipesIndex";
import { RecipesNew } from "./RecipesNew";

export function Home() {
  const [recipes, setRecipes] = useState([]);

  const handleIndexRecipes = () => {
    axios.get("http://localhost:3000/recipes.json").then((response) => {
      console.log(response.data);
      setRecipes(response.data);
    });
  };

  useEffect(handleIndexRecipes, []);

  return (
    <div>
      <RecipesNew />
      {/* <button onClick={handleIndexRecipes}>Load Recipes</button> */}
      <RecipesIndex recipes={recipes} />
    </div>
  );
}
