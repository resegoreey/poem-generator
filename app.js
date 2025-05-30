let poemForm = document.querySelector("#poem-generator");

function generatePoem(event) {
  event.preventDefault();

  let apiKey = "ee0d5af457458510ac3bat64c8bo7383";
  let userInput = document.querySelector("#user-instructions").value;

  let prompt = `Generate a short whimsical poem about ${userInput}`;
  let context = `You are a magical poet who writes short, dreamy poems like fairy tales, should be . Format your poem using  <p> tags, should be in poem style. The lines should not be more than 8, end the poem with my name <strong>-Resego Motlhasi</strong>at the botton`;

  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  axios.get(apiUrl).then(displayPoem);
}

function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}
poemForm.addEventListener("submit", generatePoem);
