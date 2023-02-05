//==================== SHOW PRELOADER ====================
window.onload = function () {
  document.getElementById("preloader").style.display = "none";
};

//==================== SCROLL SECTIONS ACTIVE LINK ====================
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 50,
      sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}

window.addEventListener("scroll", scrollActive);

//==================== SHOW SCROLL UP ====================
function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");

  this.scrollY >= 560
    ? scrollUp.classList.add("show-scroll")
    : scrollUp.classList.remove("show-scroll");
}

window.addEventListener("scroll", scrollUp);

//==================== TOGGLE THEME ====================
const themeButton = document.getElementById("theme-button"),
  darkTheme = "dark-theme",
  iconTheme = "uil-sun",
  selectedTheme = localStorage.getItem("selected-theme"),
  selectedIcon = localStorage.getItem("selected-icon");

const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";

const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "uil-moon" : "uil-sun";

if (selectedTheme) {
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );

  themeButton.classList[selectedIcon === "uil-moon" ? "add" : "remove"](
    iconTheme
  );
}

//==================== ACTIVATE / DEACTIVATE THE THEME MANUALLY WITH THE BUTTON ====================
themeButton.addEventListener("click", () => {
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

//==================== SHOW GIF ====================
const showGIF = () => {
  let elements = [
    document.getElementById("downloadGif"),
    document.getElementById("overlay"),
  ];

  elements.forEach((el) => (el.style.display = "block"));
  setTimeout(() => elements.forEach((el) => (el.style.display = "none")), 6000);
};

document
  .querySelectorAll(".download__link")
  .forEach((el) => el.addEventListener("click", showGIF));
