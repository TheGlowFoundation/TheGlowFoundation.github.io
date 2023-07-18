//SHOW() & HIDE() THE NAVBAR
let nav = document.getElementById('nav');
let Close = document.getElementById('close');

function openNav() {
   nav.style.display="block"
   Close.style.display="block"
}

function closeNav() {
   nav.style.display="none"
   Close.style.display="none"
}


const viewportWidth = window.innerWidth;

if (viewportWidth<597) {
    document.querySelectorAll("a").forEach((   anchor) => {
     anchor.addEventListener("click",    closeNav);
   });
 }   



//BACK TO stop()

(function () {
  var bodyContainer = $('body');
  var mybutton = document.createElement("button");
  mybutton.innerHTML = '<i class="fas fa-arrow-circle-up"></i><p>Top</p>';
  mybutton.setAttribute("id", "myBtn");
  mybutton.addEventListener("click", topFunction);
  bodyContainer.append(mybutton);

  // When the user scrolls down 20px from the top of the document, show the button
  // Both functions are used based on the responsive portion of the output
  bodyContainer.on("scroll", scrollFunction);
  $(window).on("scroll", scrollFunctionx);

  function scrollFunction() {
    if (
      bodyContainer.scrollTop() > 40 ||
      $(document).scrollTop() > 40
    ) {
      mybutton.style.display = "inline";
    } else {
      mybutton.style.display = "none";
    }
  }

  function scrollFunctionx() {
    if (
      $(document.body).scrollTop() > 40 ||
      $(document.documentElement).scrollTop() > 40
    ) {
      mybutton.style.display = "inline";
    } else {
      mybutton.style.display = "none";
    }
  }

  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    $("html, body").animate({ scrollTop: 0 }, 1000);
    $("html, documentElement").animate({ scrollTop: 0 }, 1000);
    $("body").animate({ scrollTop: 0 }, 1000);
  }
})();
