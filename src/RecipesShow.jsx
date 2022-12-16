import axios from "axios"
export function RecipesShow(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onRecipeUpdate(props.recipe.id, params)
    event.target.reset();
  }

  return (
    <div id="recipes-show">
        <h2>{props.recipe.title}</h2>
        <p>Chef: {props.recipe.chef}</p>
        <p>Ingredients: {props.recipe.ingredients}</p>
        <p>Directions: {props.recipe.directions}</p>
        <p>Prep time: {props.recipe.prep_time}</p>

        <h2>Edit this Recipe!</h2>
        <form onSubmit={handleSubmit}>
          <div>Title: <input defaultValue={props.recipe.title} name="title" type="text" /></div>
          <div>chef: <input defaultValue={props.recipe.chef} name="chef" type="text" /></div>
          <div>ingredients: <input defaultValue={props.recipe.ingredients} name="ingredients" type="text" /></div>
          <div>directions: <input defaultValue={props.recipe.directions} name="directions" type="text" /></div>
          <div>prep_time: <input defaultValue={props.recipe.prep_time} name="prep_time" type="text" /></div>
          <div>image_url: <input defaultValue={props.recipe.image_url} name="image_url" type="text" /></div>
          <button type="submit">Update</button>
        </form>
    </div>
  )
}