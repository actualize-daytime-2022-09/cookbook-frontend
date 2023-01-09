import axios from "axios"
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export function RecipesShowPage() {
  const [recipe, setRecipe] = useState({});
  const params = useParams();

  const handleShowRecipe = () => {
    axios.get(`http://localhost:3000/recipes/${params.id}.json`).then((response) =>{ 
      setRecipe(response.data);
  });
  }

  useEffect(handleShowRecipe, []);

  return (
    <div id="recipes-show">
        <h2>{recipe.title}</h2>
        <p>Chef: {recipe.chef}</p>
        <p>Ingredients: {recipe.ingredients}</p>
        <p>Directions: {recipe.directions}</p>
        <p>Prep time: {recipe.prep_time}</p>
    </div>
  )
}