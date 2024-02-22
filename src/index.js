function generateRecipe(event) {
  event.preventDefault();

  new Typewriter("#recipe", {
    strings:
      "Directions: 1 Bring the balsamic vinegar to a boil over medium-low heat in a small saucepan.",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);
