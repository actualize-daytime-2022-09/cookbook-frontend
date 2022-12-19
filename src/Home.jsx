import axios from "axios";
import { useState, useEffect } from "react";
import { RecipesIndex } from "./RecipesIndex";

import { Signup } from "./Signup";
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";
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



  const handleUpdateRecipe = (id, params) => {
    axios.patch(`http://localhost:3000/recipes/${id}.json`, params).then((response) => {
      setRecipes(
        recipes.map((recipe) => {
          if (recipe.id === response.data.id) {
            return response.data;
          } else {
            return recipe;
          }
        })
      );
      handleHideRecipe();
    })
  }

  const handleDestroyRecipe = (recipe) => {
    console.log(recipe)
    axios.delete(`http://localhost:3000/recipes/${recipe.id}.json`).then((response) => {
      setRecipes(recipes.filter((p) => p.id !== recipe.id));
      handleHideRecipe();
    });
  }

  useEffect(handleIndexRecipes, []);

  return (
    <div className="container">
      <div className="row">
        {/* <div className="col-4">
          <Signup />
        </div> */}
        <div className="col-6">
          <Login />
          <LogoutLink />
        </div>

      </div>

      <Modal show={isRecipesShowVisible} onClose={handleHideRecipe}>
        <RecipesShow recipe={currentRecipe} onRecipeUpdate={handleUpdateRecipe} onRecipeDestroy={handleDestroyRecipe}/>
        
      </Modal>

      <RecipesIndex recipes={recipes} onSelectRecipe={handleShowRecipe} />
    </div>
  );
}
