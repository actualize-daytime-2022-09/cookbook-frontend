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
        <div className="recipes">
          <div>
            <h2>{props.recipes[0].title}</h2>
            <h4>{props.recipes[0].chef}</h4>
            <img src={props.recipes[0].image_url} />
          </div>
          <div>
            <h2>{props.recipes[1].title}</h2>
            <h4>{props.recipes[1].chef}</h4>
            <img src={props.recipes[1].image_url} />
          </div>
          <div>
            <h2>{props.recipes[2].title}</h2>
            <h4>{props.recipes[2].chef}</h4>
            <img src={props.recipes[2].image_url} />
          </div>
        </div>
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
  const [recipes, setRecipes] = useState([
    {
      id: 1,
      title: "Raw Eggs",
      chef: "Peter Jang",
      image_url: "https://cdn.britannica.com/94/151894-050-F72A5317/Brown-eggs.jpg",
    },
    {
      id: 2,
      title: "Mud Pie",
      chef: "Jay Wengrow",
      image_url:
        "https://static.onecms.io/wp-content/uploads/sites/9/2017/12/mud-pie-XL-RECIPE2016.jpg",
    },
    {
      id: 3,
      title: "Pizza",
      chef: "Jay Wengrow",
      image_url:
        "https://static.onecms.io/wp-content/uploads/sites/9/2021/06/15/mozzarella-pizza-margherita-FT-RECIPE0621.jpg",
    },
  ])
  return (
    <div>
      <RecipesNew />
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
