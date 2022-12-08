import axios from "axios";
import { useState } from "react";

function Header() {
  return (
    <div>
      <header>
        <a href="#">Home</a> | <a href="#recipes-index">All Recipes</a> | <a href="#recipes-new">New Recipe</a> |
      </header>
    </div>
  );
}

function RecipesNew() {
  return (
    <div id="recipes-new">
      <h1>New Recipe</h1>
      <form>
        <div>
          title: <input type="text" />
        </div>
        <div>
          chef: <input type="text" />
        </div>
        <button type="submit">Create recipe</button>
      </form>
    </div>
  );
}

function RecipesIndex(props) {
  console.log(props);
  return (
    <div id="recipes-index">
      <h1>All Recipes!!</h1>
        {props.recipes.map((recipe) => (
        <div key={recipe.id} className="recipes">
          <h2>{recipe.title}</h2>
        </div>
      ))}
    </div>
  );
}

function Footer() {
  return (
    <div>
      <h4>© Copywrite 2022</h4>
    </div>
  );
}

function Home() {
  const [recipes, setRecipes] = useState([]);

  const handleIndexRecipes = () => {
    axios.get("http://localhost:3000/recipes.json").then((response) => {
      console.log(response.data);
      setRecipes(response.data);
    });
  };

  return (
    <div>
      <RecipesNew />
      <button onClick={handleIndexRecipes}>Load Recipes</button>
      <RecipesIndex recipes={recipes} />
    </div>
  );
}

function App() {
  return (
    <div>
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
