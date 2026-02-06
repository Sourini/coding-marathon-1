function Recipe({ cuisine, difficulty, cookTime, servings, allergens }) {
  return (
    <div className="item">
      <p>Cuisine: {cuisine}</p>
      <p>Difficulty: {difficulty}</p>
      <p>Cooktime: {cookTime}</p>
      <p>Servings: {servings}</p>
      <p>Allergeens: {allergens}</p>
    </div>
  );
}

export default Recipe;