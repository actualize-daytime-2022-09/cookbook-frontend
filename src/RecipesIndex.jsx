export function RecipesIndex(props) {
  console.log(props);
  return (
    <div id="recipes-index">

<div class="card-group">
  <div class="card">
    <img src="..." class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">
      {props.recipes.map((recipe) => (
        <div key={recipe.id} className="recipes">
          <h2>{recipe.title}</h2>
          <h4>{recipe.chef}</h4>
          <img src={recipe.image_url} alt="" />
          <button className="btn btn-info" onClick={ () => props.onSelectRecipe(recipe) }>MORE INFO</button>
        </div>
      ))}
      </p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>

</div>

      <h1>All Recipes!!</h1>
      {props.recipes.map((recipe) => (
        <div key={recipe.id} className="recipes">
          <h2>{recipe.title}</h2>
          <h4>{recipe.chef}</h4>
          <img src={recipe.image_url} alt="" />
          <button className="btn btn-info" onClick={ () => props.onSelectRecipe(recipe) }>MORE INFO</button>
        </div>
      ))}
    </div>
  );
}
