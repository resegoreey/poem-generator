let poemForm = document.querySelector("#poem-generator");

function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque sunt impedit aliquam culpa numquam voluptatem labore asperiores. Eligendi magnam minima rerum voluptatem eius, beatae eum dolor voluptatum repudiandae sint harum!",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}
poemForm.addEventListener("submit", generatePoem);
