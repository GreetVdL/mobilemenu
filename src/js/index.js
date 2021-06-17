import "../css/style.scss";

const burger = document.querySelector("#burger");
const menu = document.querySelector("nav aside");

burger.addEventListener("click", (event) => {
  burger.classList.toggle("active");
  menu.classList.toggle("active");
});
