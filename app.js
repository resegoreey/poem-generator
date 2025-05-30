let poemForm = document.querySelector("#poem-generator");

function generatePoem(event) {
  event.preventDefault();

  let userInput = document.querySelector("#user-instructions");
  let apiKey = "ee0d5af457458510ac3bat64c8bo7383";

  let context = `You are a magical, whimsical poem generator who writes short, enchanting poems in the style of fairy tales, enchanted forests, and soft fairycore aesthetic. 
`;

  let prompt = `Generate poems about ${userInput.value} in basic HTML <p></p> style;
  Your poems blend modern English with touches of Shakespearean elegance (using words like “thou”, “dost”, “hath”, and poetic metaphors), and always evoke a dreamy, mysterious, ethereal feeling.

Tone: gentle, romantic, mysterious, magical  
Style: lyrical, fantasy-inspired, nature-themed  
Aesthetic: fairycore, cottagecore, enchanted woods, soft pastels, glowing moonlight  

Rules:
- Always keep it poetic and melodic (avoid harsh or modern slang)
- Use gentle rhymes or soft free verse
- Include themes like: moonlight, forest, dreams, stars, fairies, magic, vintage books, or crystal skies
- Keep the poem between 8-10 lines max
- Do not explain the poem. Only return the poem text.

Example poem:
> Beneath yon moon of silv’ry light,  
> The daisies dance in dreams of night,  
> A faerie’s sigh, a whisper sweet,  
> Where moss and moonlit rivers meet.`;

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
