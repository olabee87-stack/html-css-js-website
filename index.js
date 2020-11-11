const menu = document.querySelector("#mobile-menu"); //mobile menu(hamburger) on html
const menuLinks = document.querySelector(".navbar-menu"); //ul tag class
const navLogo = document.querySelector("#navbar-logo");

//@Display mobile menu (toggle) - toggles btw mobile-menu(hamburger) and navbar-menu
//@Func displays CSS for is-active(hamburger) or CSS for active(navbar-menu) when clicked
const mobileMenu = () => {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
};

menu.addEventListener("click", mobileMenu); //runs when the hamburger menu is clicked

//Show active menu when scrolling - IDs of the Nav bar menu
const highlightMenu = () => {
  const elem = document.querySelector(".highlight");
  const homeMenu = document.querySelector("#home-page");
  const aboutMenu = document.querySelector("#about-page");
  const educationMenu = document.querySelector("#education-page");
  const skillsMenu = document.querySelector("#skills-page"); //@skills
  const portfolioMenu = document.querySelector("#portfolio-page"); //@use sign up
  let scrollPos = window.scrollY;
  //console.log(scrollPos);

  //Adds the hightlight class to menu items - hightlight only on desktop - switch hightlight to next bar
  if (window.innerWidth > 960 && scrollPos < 600) {
    homeMenu.classList.add("highlight");
    aboutMenu.classList.remove("highlight");
    return;
  } else if (window.innerWidth > 960 && scrollPos < 1400) {
    aboutMenu.classList.add("highlight");
    homeMenu.classList.remove("highlight");
    educationMenu.classList.remove("highlight");
    return;
  } else if (window.innerWidth > 960 && scrollPos < 2345) {
    educationMenu.classList.add("highlight");
    aboutMenu.classList.remove("highlight");
    skillsMenu.classList.remove("highlight");
    return;
  } else if (window.innerWidth > 960 && scrollPos < 3145) {
    skillsMenu.classList.add("highlight");
    educationMenu.classList.remove("highlight");
    portfolioMenu.classList.remove("highlight");
    return;
  } else if (window.innerWidth > 960 && scrollPos < 3945) {
    portfolioMenu.classList.add("highlight");
    skillsMenu.classList.remove("highlight");
    return;
  }

  if ((elem && window.innerWidth < 960 && scrollPos < 600) || elem) {
    elem.classList.remove("highlight");
  }
};

window.addEventListener("scroll", highlightMenu);
window.addEventListener("click", highlightMenu);

//Close mobile menu when clicking on a menu item
const hideMobileMenu = () => {
  const menuBars = document.querySelector(".is-active");
  if (window.innerWidth <= 768 && menuBars) {
    menu.classList.toggle("is-active");
    menuLinks.classList.remove("active");
  }
};

menuLinks.addEventListener("click", hideMobileMenu);
navLogo.addEventListener("click", hideMobileMenu);
