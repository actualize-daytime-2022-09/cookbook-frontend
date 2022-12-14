import axios from "axios";
import { useState, useEffect } from "react";
import { RecipesIndex } from "./RecipesIndex";
import { RecipesNew } from "./RecipesNew";
import { Signup } from "./Signup";
import { Modal } from "./Modal";
import { RecipesShow } from "./RecipesShow";

export function Home() {
  const [recipes, setRecipes] = useState([]);
  const [isRecipesShowVisible, setIsRecipesShowVisible] = useState(false)
  const [currentRecipe, setCurrentRecipe] = useState({});

  const handleIndexRecipes = () => {
    axios.get("http://localhost:3000/recipes.json").then((response) => {
      console.log(response.data);
      setRecipes(response.data);
    });
  };

  const handleShowRecipe = (recipe) => {
    setIsRecipesShowVisible(true);
    setCurrentRecipe(recipe);
  }

  const handleHideRecipe = () => {
    setIsRecipesShowVisible(false);
  }

  useEffect(handleIndexRecipes, []);

  return (
    <div className="container">
      <Signup />
      <Modal show={isRecipesShowVisible} onClose={handleHideRecipe}>
        <RecipesShow recipe={currentRecipe}/>
      </Modal>

      <RecipesNew />
      <RecipesIndex recipes={recipes} onSelectRecipe={handleShowRecipe} />
    </div>
  );
}
