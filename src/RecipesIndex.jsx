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
        </div>
      ))}
    </div>
  );
}
