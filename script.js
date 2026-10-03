// dom elements

// nav responsiveness
const openNavBtn = document.getElementById("open-menu");
const closeNavBtn = document.getElementById("close-menu");
const nav = document.querySelector(".nav");

openNavBtn.addEventListener("click", (e) => {
  e.preventDefault();
  nav.classList.toggle("open");
});

if (closeNavBtn) {
  closeNavBtn.addEventListener("click", (e) => {
    e.preventDefault();
    nav.classList.toggle("open");
  });
}
