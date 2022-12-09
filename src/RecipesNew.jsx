export function RecipesNew() {
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
