// MENU TOGGLE FUNCTIONALITY
const menuButton = document.querySelector(".header__menu-mobile");
const menuCloseButton = document.querySelector(".header__menu-close");
const menu = document.querySelector(".header__menu");

// Overlay element
const overlay = document.querySelector(".menu-overlay");

// Open menu
function openMenu() {
  menu.classList.add("active");
  overlay.classList.add("active");
  document.body.style.overflow = "hidden"; // Prevent background scroll
}

// Close menu
function closeMenu() {
  menu.classList.remove("active");
  overlay.classList.remove("active");
  document.body.style.overflow = ""; // Re-enable background scroll
}

// Toggle functions
menuButton.addEventListener("click", openMenu);
menuCloseButton.addEventListener("click", closeMenu);
overlay.addEventListener("click", closeMenu);

// Optional: Close if clicking outside the menu
document.addEventListener("click", (e) => {
  const isMenuOpen = menu.classList.contains("active");
  if (
    isMenuOpen &&
    !menu.contains(e.target) &&
    !menuButton.contains(e.target)
  ) {
    closeMenu();
  }
});

// SEARCH & NOTIFICATIONS FUNCTIONALITY
// Search functionality
const searchButton = document.querySelector(".header-profile__search-button");
const searchPanel = document.querySelector(".header__search");
const searchInput = document.querySelector(".header__search-input");

function toggleSearch(event) {
  event.stopPropagation();

  const isActive = searchPanel.classList.toggle("active");
  searchButton.classList.toggle("active", isActive);

  if (isActive && searchInput) {
    setTimeout(() => {
      searchInput.focus();
    }, 40);
  }
}

function closeSearchPanel() {
  searchPanel.classList.remove("active");
  searchButton.classList.remove("active");
}

// Attach toggle to search button
searchButton.addEventListener("click", toggleSearch);

// Close panel on outside click
document.addEventListener("click", (event) => {
  const isClickInside =
    searchPanel.contains(event.target) || searchButton.contains(event.target);
  if (!isClickInside) {
    closeSearchPanel();
  }
});

// Close search panel if pressed Escape
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    searchPanel.classList.remove("active");
    searchButton.classList.remove("active");
  }
});

// Notification functionality
const notificationButton = document.querySelector(
  ".header-profile__notifications-button"
);
const notificationPanel = document.querySelector(
  ".header-profile__notification-panel"
);

function toggleNotifications(event) {
  event.stopPropagation(); // prevent body click listener from firing
  notificationPanel.classList.toggle("active");
  notificationButton.classList.toggle("active");
}

// Close panel if clicked outside
function handleClickOutside(event) {
  const isClickInside =
    notificationPanel.contains(event.target) ||
    notificationButton.contains(event.target);

  if (!isClickInside) {
    notificationPanel.classList.remove("active");
    notificationButton.classList.remove("active");
  }
}

notificationButton.addEventListener("click", toggleNotifications);
document.addEventListener("click", handleClickOutside);

//NOTIFICATIONS TYPE TOGGLE FUNCTIONALITY
const typeAnime = document.querySelector(".type-anime");
const typeCommunity = document.querySelector(".type-community");

function toggleNotificationType(event) {
  const isAnime = event.currentTarget.classList.contains("type-anime");
  typeAnime.classList.toggle("active", isAnime);
  typeCommunity.classList.toggle("active", !isAnime);
}

typeAnime.addEventListener("click", toggleNotificationType);
typeCommunity.addEventListener("click", toggleNotificationType);
