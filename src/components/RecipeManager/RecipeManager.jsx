import React, { useState } from "react";

function RecipeManager() {
  const [recipes, setRecipes] = useState([]);
  const [cuisine, setCuisine] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [cookTime, setCookTime] = useState("");
  const [servings, setServings] = useState("");
  const [allergens, setAllergens] = useState("");

  // Handle input change for cuisine
  function handleCuisine(event) {
    setCuisine(event.target.value);
  }
  // Handle input change for difficulty
  function handleDifficulty(event) {
    setDifficulty(event.target.value);
  }
    // Handle input change for cooktime
  function handleCookTime(event) {
    setCookTime(event.target.value);
  }
    // Handle input change for servings
  function handleServings(event) {
    setServings(event.target.value);
  }
    // Handle input change for allergens
  function handleAllergens(event) {
    setAllergens(event.target.value);
  }

  // Add a new recipe to the list
  function addRecipe() {
    if (cuisine.trim() !== "" && difficulty.trim() !== "" && cookTime.trim() !== "" && servings.trim() !== "" && allergens.trim() !== "") {
      setRecipes((r) => [...r, { cuisine, difficulty, cookTime, servings, allergens }]);
      setCuisine("");
      setDifficulty("");
      setCookTime("");
      setServings("");
      setAllergens(""); // Clear the input fields
    }
  };

  // Delete a recipe from the list
  function deleteRecipe(index) {
    const updatedRecipes = recipes.filter((_, i) => i !== index);
    setRecipes(updatedRecipes);
  };

  return (
    <div className="recipe-manager">
      <h1>Recipe Manager</h1>
      <div>
        <input
          type="text"
          placeholder="Enter cuisine..."
          value={cuisine}
          onChange={handleCuisine}
        /> <br />
        <input
          type="text"
          placeholder="Enter difficulty..."
          value={difficulty}
          onChange={handleDifficulty}
        /> <br />
        <input
          type="text"
          placeholder="Enter cooktime..."
          value={cookTime}
          onChange={handleCookTime}
        /> <br />
        <input
          type="text"
          placeholder="Enter servings..."
          value={servings}
          onChange={handleServings}
        /> <br />
        <input
          type="text"
          placeholder="Enter allergens..."
          value={allergens}
          onChange={handleAllergens}
        /> <br />
        
        <button onClick={addRecipe}>Add Recipe</button>
      </div>
      <ol>
        {recipes.map((recipe, index) => (
          <li key={index}>
            Cuisine: {recipe.cuisine} <br /> 
            Difficulty: {recipe.difficulty} <br /> 
            Cooktime: {recipe.cookTime} <br /> 
            Servings: {recipe.servings} <br /> 
            Allergeens: {recipe.allergens} <br />
            <button onClick={() => deleteRecipe(index)}>Delete</button>
             <br />
          </li>
        ))}
      </ol>
    </div>
  );
}

export default RecipeManager;