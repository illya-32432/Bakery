let burger = document.querySelector(".burger")
let menu = document.querySelector(".menu")
let social = document.querySelector(".social")

burger.onclick = function () {
  menu.classList.toggle ("active-burger")
  burger.classList.toggle ("burger-open")
  social.classList.toggle ("social-open")
}
