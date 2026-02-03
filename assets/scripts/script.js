const toggleBtn = document.getElementById("menuToggle");
const sideMenu = document.getElementById("navigation-bar");
const closeBtn = document.getElementById("close-btn-menu");

toggleBtn.addEventListener("click", () => {
  sideMenu.classList.toggle("side-menu-active");
  sideMenu.style.display = "block !important";
});

closeBtn.addEventListener("click", () => {
  sideMenu.classList.toggle("side-menu-active");
  sideMenu.style.display = "none !important";
});

const seemoreBtn = document.querySelector(".seemore-btn");
const drawerPopup = document.querySelector(".drawer-popup");
const seemoreTxt = document.querySelector(".see-more-text");
const chevronDown = document.querySelector("#chevron-down");
const chevronUp = document.querySelector("#chevron-up");
seemoreBtn.addEventListener("click", () => {
  drawerPopup.classList.toggle("collapsed");
  if (drawerPopup.classList.contains("collapsed")) {
    seemoreTxt.textContent = "See Less";

    chevronDown.style.display = "none";
    chevronUp.style.display = "block";
    chevronUp.classList.add("d-block");
    chevronUp.classList.remove("d-none");
  } else {
    seemoreTxt.textContent = "See More";

    chevronDown.style.display = "block";
    chevronUp.style.display = "none";
    chevronUp.classList.remove("d-block");
    chevronUp.classList.add("d-none");
  }
});
