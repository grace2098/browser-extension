const sun = document.getElementById("sun");
const moon = document.getElementById("moon");
const body = document.querySelector("body");

const allBtn = document.getElementById("all");
const activeBtn = document.getElementById("active");
const inactiveBtn = document.getElementById("inactive");

sun.addEventListener("click", function() {
  body.classList.add("light-mode");
  moon.style.display = "flex";
  sun.style.display = "none";
});

moon.addEventListener("click", function() {
  body.classList.remove("light-mode");
  sun.style.display = "flex";
  moon.style.display = "none";
});



const path = window.location.pathname;

if (path.includes("/index/")) {
  allBtn.classList.add("focus");
} else if (path.includes("/active1/")) {
  activeBtn.classList.add("focus");
} else if (path.includes("/inactive2/")) {
  inactiveBtn.classList.add("focus");
}