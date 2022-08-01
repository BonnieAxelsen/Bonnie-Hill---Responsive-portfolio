function mainMenuButtonClicked() {
  let openMenuMain = document.querySelector("#menu");
  const bodyDiv = document.body;
  if (window.getComputedStyle(openMenuMain).getPropertyValue("opacity") != 0) {
    openMenuMain.classList.remove("menu-unfolded");
    bodyDiv.style.overflow = "visible";
  } else {
    openMenuMain.classList.add("menu-unfolded");
    bodyDiv.style.overflow = "hidden";
  }
}

function mobileMenuButtonClicked() {
  console.log("Hello this works");
  let openMenuMain = document.querySelector("#menu-mobile");
  const bodyDiv = document.body;
  if (window.getComputedStyle(openMenuMain).getPropertyValue("opacity") != 0) {
    openMenuMain.classList.remove("menu-unfolded-mobile");
    bodyDiv.style.overflow = "visible";
  } else {
    openMenuMain.classList.add("menu-unfolded-mobile");
    bodyDiv.style.overflow = "hidden";
  }
}

let mainMenuButton = document.querySelector("#menu-icon-main");
mainMenuButton.addEventListener("click", mainMenuButtonClicked);

let openMenuButton = document.querySelector("#menu-icon");
openMenuButton.addEventListener("click", mainMenuButtonClicked);

let mobileMenuButton = document.querySelector("#menu-icon-main-mobile");
mobileMenuButton.addEventListener("click", mobileMenuButtonClicked);

let openMobileMenuButton = document.querySelector("#menu-icon-mobile");
openMobileMenuButton.addEventListener("click", mobileMenuButtonClicked);
