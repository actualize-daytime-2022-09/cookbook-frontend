export function RecipesNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    console.log("handleSubmit", params);
    props.onRecipeCreate(params)
    event.target.reset();
  };
      
      return (
        <div id="recipes-new">
      <h1>New Recipe</h1>
      <form onSubmit={handleSubmit}>
        <div>
          What it called?: <input className="form-control" name="title" type="text" />
        </div>
        <div>
          chef: <input className="form-control" name="chef" type="text" />
        </div>
        <div>
          How long???: <input className="form-control" name="prep_time" type="text" />
        </div>
        <div>
          What go in?: <input className="form-control" name="ingredients" type="text" />
        </div>
        <div>
          directions: <input className="form-control" name="directions" type="text" />
        </div>
        <div>
          Put in a picture: <input className="form-control" name="image_url" type="text" />
        </div>
        <button type="submit">Create recipe</button>
      </form>
    </div>
  );
}

