const menu = document.querySelector("#mobile-menu"); //mobile menu(hamburger) on html
const menuLinks = document.querySelector(".navbar-menu"); //ul tag class

//@Display mobile menu (toggle) - toggles btw mobile-menu(hamburger) and navbar-menu
//@Func displays CSS for is-active(hamburger) or CSS for active(navbar-menu) when clicked
const mobileMenu = () => {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
};

menu.addEventListener("click", mobileMenu); //runs when the hamburger menu is clicked
