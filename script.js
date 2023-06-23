document.addEventListener("DOMContentLoaded", function() {
  const slides = document.querySelector(".slides");
  const images = slides.querySelectorAll("img");
  const sliderButtons = document.querySelector(".slider-buttons");

  // Generate buttons for each slide
  for (let i = 0; i < images.length; i++) {
    const button = document.createElement("button");
    button.addEventListener("click", function() {
      goToSlide(i);
    });
    sliderButtons.appendChild(button);
  }

  const buttons = sliderButtons.querySelectorAll("button");

  // Add active class to the first button
  buttons[0].classList.add("active");

  // Go to the selected slide
  function goToSlide(index) {
    slides.style.transform = `translateX(-${index * 100}%)`;

    // Update active button
    buttons.forEach(button => button.classList.remove("active"));
    buttons[index].classList.add("active");
  }
});
                            
