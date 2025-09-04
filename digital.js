const body = document.querySelector("body");
const backdrop = document.getElementById("backdrop");
const header = document.getElementById("header");
const hamburger = document.querySelector(".hamburger_menu");
const mockUp = header.querySelector(".intro__mockup");
const mobileNav = document.getElementById("mobile__nav");
const btns = document.querySelectorAll(".request_invite");

let open = false;
function navToggle() {
  open = !open;
  if (open) {
    hamburger.innerHTML = `&#10005;`;
  } else {
    hamburger.innerHTML = `<img src="./images/icon-hamburger.svg" alt="menu-icon">`;
  }

  // toggle the hidden class
  mockUp.classList.toggle("hidden");
  backdrop.classList.toggle("hidden");
  mobileNav.classList.toggle("hidden");
}

(function () {
  const showMockUp = window.matchMedia("(min-width: 48rem)");
  showMockUp.addEventListener("change", function (e) {
    if (e.matches && open) mockUp.classList.remove("hidden");
    else if (!e.matches && open) mockUp.classList.add("hidden");
  });
})();

// event listeners
hamburger.addEventListener("click", navToggle);
document.addEventListener("keyup", function (ev) {
  if (ev.key === "Escape" && open) {
    navToggle();
  }
});

btns.forEach((b) =>
  b.addEventListener("click", function (e) {
    e.preventDefault();
  })
);

// section revealing
const sections = document.querySelectorAll(".section");

function showSection(entries) {
  const [entry] = entries;
  // console.log(entry);

  if (!entry.isIntersecting) return;
  entry.target.classList.remove("hide-section");
  sectObserver.unobserve(entry.target);
}
const sectObserver = new IntersectionObserver(showSection, {
  root: null,
  threshold: 0.1,
});

sections.forEach(function (sect) {
  sectObserver.observe(sect);
  sect.classList.add("hide-section");
});
