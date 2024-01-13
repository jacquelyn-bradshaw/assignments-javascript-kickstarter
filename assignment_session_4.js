const info = document.getElementById("info");
const h1element = document.getElementById("h1");

function makeLarger() {
  h1element.style.fontSize = "40px";
}

function applyHeadingColour() {
  const selectedHeadingFontColour = document.getElementById(
    "heading-font-colour"
  ).value;
  h1element.style.color = selectedHeadingFontColour;
}

function loadInfo() {
  const selectedOption = document.getElementById("select").value;

  if (selectedOption == "blank") {
    info.textContent = " ";
  } else if (selectedOption == "HTML") {
    info.textContent =
      "HTML is the standard markup language for web pages. With HTML you can create your own website.";
  } else {
    info.textContent =
      "CSS is the language we use to style an HTML document. CSS describes how HTML elements should be displayed.";
  }
}

function startLearning() {
  let paragraph = document.createElement("p");
  paragraph.textContent = "Lets Start";
  const div = document.getElementById("learning-div");
  div.appendChild(paragraph);
}

function removeHeading() {
  h1element.remove();
}
