export function RecipesIndex(props) {
  console.log(props);
  return (
    <div id="recipes-index">


      <h1>All Recipes!!</h1>
      {props.recipes.map((recipe) => (
        <div key={recipe.id} className="recipes">
          <h2>{recipe.title}</h2>
          <h4>{recipe.chef}</h4>
          <img src={recipe.image_url} alt="" />
          <button className="btn btn-info" onClick={ () => props.onSelectRecipe(recipe) }>MORE INFO</button>
        </div>
      ))}

      <div className="card-group">
        <div className="card">
          <img src="..." className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
            </p>
            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>

          
      </div>
    </div>
  );
}
