const separator = document.getElementById('separator');
const homeHero = document.getElementById("home-hero");

window.onload = function() {
  //renderSeparator();
  // heroImage();
}



function renderSeparator() {
  separator.style.height = `1.5rem`
  separator.style.justifyContent = `center`
  separator.style.margin = `0 0.2rem`
}

function heroImage() {
  const image = document.createElement("img");
  image.src = "%PUBLIC_URL%/assets/icon_named.png";
  image.alt = "Laz Studios icon <main.js> image";
  if (homeHero !== undefined) {
    homeHero.appendChild(image)
  }
}