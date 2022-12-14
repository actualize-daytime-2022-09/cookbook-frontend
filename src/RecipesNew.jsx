import axios from "axios";

export function RecipesNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("makin a recipe!");
    const params = new FormData(event.target);
    axios
      .post("http://localhost:3000/recipes.json", params)
      .then((response) => {
        console.log(response.data);
        event.target.reset();
      });
  }

  return (
    <div id="recipes-new">
      <h1>New Recipe</h1>
      <form onSubmit={handleSubmit}>
        <div>
          What it called?: <input name="title" type="text" />
        </div>
        <div>
          chef: <input name="chef" type="text" />
        </div>
        <div>
          How long???: <input name="prep_time" type="text" />
        </div>
        <div>
          What go in?: <input name="ingredients" type="text" />
        </div>
        <div>
          directions: <input name="directions" type="text" />
        </div>
        <div>
          Put in a picture: <input name="image" type="text" />
        </div>
        <button type="submit">Create recipe</button>
      </form>
    </div>
  );
}
