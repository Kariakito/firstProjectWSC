const navbar = document.getElementById("navbar"); //we assign element with navbar ID to the variable
const navbarToggle = navbar.querySelector(".navbar-toggle"); //we assign the button with navbar-toggle to variable navbarToggle

function openMobileNavbar() {
  navbar.classList.add("opened");
  navbarToggle.setAttribute("aria-expanded", "true");
} // this function opens the burger

function closeMobileNavbar() {
  navbar.classList.remove("opened");
  navbarToggle.setAttribute("aria-expanded", "false");
} // this function closes the burger 

navbarToggle.addEventListener("click", () => {
  if (navbar.classList.contains("opened")) {
    closeMobileNavbar();
  } else {
    openMobileNavbar();
  }
}); //this part opens or closes the burger on click (event listener)

// const navbarMenu = navbar.querySelector("#navbar-menu");
// const navbarLinksContainer = navbar.querySelector(".navbar-links");

// navbarLinksContainer.addEventListener("click", (clickEvent) => {
//   clickEvent.stopPropagation();
// });

// navbarMenu.addEventListener("click", closeMobileNavbar);
