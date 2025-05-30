let poemForm = document.querySelector("#poem-generator");

function generatePoem(event) {
  event.preventDefault();

  let apiKey = "ee0d5af457458510ac3bat64c8bo7383";
  let userInput = document.querySelector("#user-instructions").value;

  let prompt = `Generate a short whimsical poem about ${userInput}`;
  let context = `You are a magical poet who writes short, dreamy poems like fairy tales, should be . Format your poem using  <p> tags,it should be in poem style. The lines should not be more than 8, end the poem with my name <strong>-Resego Motlhasi</strong>at the botton`;

  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  axios.get(apiUrl).then(displayPoem);

  let poemElement = document.querySelector("#poem");

  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="generating">...Generating a Whimsical ${userInput} poem</div>`;
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

function iconFloating() {
  const icons = document.querySelectorAll(".floating");
  const styleSheet = document.styleSheets[0];

  icons.forEach((icon, index) => {
    const id = `fly-${index}`;
    const startX = Math.random() * 100;
    const startY = Math.random() * 100;
    const midX = Math.random() * 100;
    const midY = Math.random() * 100;
    const endX = Math.random() * 100;
    const endY = Math.random() * 100;
    const duration = Math.random() * 15 + 15;
    const delay = Math.random() * 10;

    const keyframes = `
    @keyframes ${id} {
      0% { top: ${startY}%; left: ${startX}%; opacity: 0;}
      10% {opacity: 1;}
      50% { top: ${midY}%; left: ${midX}%; }
      100% { top: ${endY}%; left: ${endX}%; opacity: 0.5;}
    }
  `;
    styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
    setTimeout(() => {
      icon.style.top = `${startY}%`;
      icon.style.left = `${startX}%`;
      icon.style.animation = `${id} ${duration}s ${delay}s infinite alternate ease-in-out`;
    }, 0);
  });
}

iconFloating();
