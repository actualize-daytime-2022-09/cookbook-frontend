function Header() {
  return (
    <div>
      <header>
        <a href="#">Home</a> |  <a href="#recipes-index">All Recipes</a> |  <a href="#recipes-new">New Recipe</a> |
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
          title: <input type="text"/>
        </div>
        <div>
          chef: <input type="text"/>
        </div>
        <button type="submit">Create recipe</button>
      </form>
    </div>
  );
}

function RecipesIndex() {
  return (
    <div id="recipes-index">
      <h1>All Recipes!!</h1>
      <div className="recipes">
        <h2>Raw Eggs</h2>
        <img src="https://cdn.britannica.com/94/151894-050-F72A5317/Brown-eggs.jpg" alt="" />
        <p>Chef: Peter Jang</p>
        <button>More info</button>
      </div>
      <div className="recipes">
        <h2>Mud Pie</h2>
        <img
          src="https://static.onecms.io/wp-content/uploads/sites/9/2017/12/mud-pie-XL-RECIPE2016.jpg"
          alt=""
        />
        <p>Chef: Jay Wengrow</p>
        <button>More info</button>
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
  return(
    <div>
      <RecipesNew />
      <RecipesIndex />
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