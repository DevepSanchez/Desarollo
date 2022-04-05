"use strict";

//menu Items
let navbar = document.querySelector(".menu--main");

document.querySelector("#menu_open").onclick = () => {
  navbar.classList.replace("menu--main", "active");
};

let navbarClose = document.querySelector(".active");
document.querySelector("#btn-close").onclick = () => {
  navbar.classList.replace("active", "menu--main");
};
