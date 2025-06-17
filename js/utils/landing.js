export function renderMobileMenu() {
  const menuMobile = document.querySelector(".header__nav-menu-mobile");
  const menu = document.querySelector(".header__nav-menu");

  menuMobile.addEventListener("click", () => {
    menu.classList.toggle("active");
    menuMobile.classList.toggle("active");
  });
}
