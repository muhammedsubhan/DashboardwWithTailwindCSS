// Buttons
const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menuBtn");
const closeBtn = document.querySelector("#closeBtn");
const dialogBox = document.querySelector("#dialogBox");
const showBtn = document.querySelector("#showBtn");
menuBtn.addEventListener("click", () => {
  sideMenu.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  sideMenu.classList.remove("active");
});

showBtn.addEventListener("click", () => {
  dialogBox.classList.toggle("active");
});
