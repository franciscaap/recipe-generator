function displayRecipe(response) {
  new Typewriter("#recipe", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateRecipe(event) {
  event.preventDefault();

  let userInstructions = document.querySelector("#user-instructions");
  let apiKey = "9b00a0b2o792ct546c043d35bf49a6e3";
  let prompt = `uesr instructions: Please generate an italian cuisine recipe using ${userInstructions.value}. Generate it in basic HTML format and seperate the instuctions from the ingredients using paragraphs. Wrap the recipe name in html div and strong. Please do not acknowlege user.`;
  let context =
    "you are an Italian culinary expert and you give short recipes. You make sure to follow the user instructions when generating the recipes.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let recipeElement = document.querySelector("#recipe");
  recipeElement.classList.add("hidden");
  recipeElement.innerHTML = `<div class= generating>⌛ Generating an Italian recipe with ${userInstructions.value}</div>`;

  axios.get(apiUrl).then(displayRecipe);
}

let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);
