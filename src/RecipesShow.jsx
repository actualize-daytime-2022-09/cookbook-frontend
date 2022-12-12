export function RecipesShow(props) {
  return (
    <div id="recipes-show">
        <h2>{props.recipe.title}</h2>
        <p>Chef: {props.recipe.chef}</p>
        <p>Ingredients: {props.recipe.ingredients}</p>
        <p>Directions: {props.recipe.directions}</p>
        <p>Prep time: {props.recipe.prep_time}</p>
    </div>
  )
}