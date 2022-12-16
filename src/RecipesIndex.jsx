export function RecipesIndex(props) {
  console.log(props);
  return (
    <div id="recipes-index">
      <h1 className="text-center">All Recipes!!</h1>
      <div className="recipes row">
        {props.recipes.map((recipe) => (
          <div className="col-4" key={recipe.id}>
            <h2 className="card-title text-center">{recipe.title}</h2>
            <div >
              <img src={recipe.image_url} className="card-img-top rounded mx-auto d-block" alt="" />
            </div>
            <h4 className="card-text text-center">{recipe.chef}</h4>
            <div className="d-grid gap-2 mx-auto">
              <button className="btn btn-dark" onClick={ () => props.onSelectRecipe(recipe) }>MORE INFO</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
