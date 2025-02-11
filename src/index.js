import "the-new-css-reset/css/reset.css";
import "./style.css";

const mediaQuery = window.matchMedia("(min-width: 768px)");

mediaQuery.addEventListener("change", updateFooter);

function updateFooter(e) {
   const footerImg = document.querySelector("#footerPhoto");

   if (footerImg) {
      footerImg.classList.toggle("radius-5", e.matches);
   }
}

// Initial check
updateFooter(mediaQuery);
