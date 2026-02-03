document.addEventListener("DOMContentLoaded", () => {
  const hamb = document.querySelector(".burger");
  const popup = document.querySelector(".header__menu");
  const body = document.body;

  if (!hamb || !popup) {
    console.error("Бургер или меню не найдены.");
    return;
  }
  function closeMenu() {
    popup.classList.remove("header__menu--open");
    hamb.classList.remove("burger--open");
    body.classList.remove("page__body--no-scroll");
  }
  hamb.addEventListener("click", e => {
    e.preventDefault();
    if (body.classList.contains("page__body--no-scroll")) {
      closeMenu();
    } else {
      popup.classList.add("header__menu--open");
      hamb.classList.add("burger--open");
      body.classList.add("page__body--no-scroll");
    }
  });
  popup.addEventListener("click", event => {
    const clickedLink = event.target.closest("a");

    if (clickedLink) {
      closeMenu();
    }
  });
  document.addEventListener("click", event => {
    const isMenuOpen = body.classList.contains("page__body--no-scroll");
    const isClickOnBurger = hamb.contains(event.target);
    const isClickInsideMenu = popup.contains(event.target);

    if (isMenuOpen && !isClickOnBurger && (isClickInsideMenu || !isClickInsideMenu)) {
      closeMenu();
    }
  });
});
