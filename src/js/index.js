import "../css/style.scss";

const burger = document.querySelector("#burger");
const menu = document.querySelector("nav aside");
const header = document.querySelector("header");

burger.addEventListener("click", (event) => {
  burger.classList.toggle("active");
  menu.classList.toggle("active");
  header.classList.toggle("active");
});
