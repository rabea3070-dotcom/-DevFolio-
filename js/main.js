// const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");
const loding = document.querySelector(".loding");
const main = document.querySelector("main");
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.forEach((lnk) => lnk.classList.remove("active"));
    link.classList.add("active");
  });
});

setTimeout(() => {
  loding.classList.add("d-none");
  main.classList.remove("d-none");
}, 1500);

// window.addEventListener("scroll", () => {
//   let current = "";

//   sections.forEach((section) => {
//     const sectionTop = section.offsetTop - 90;
//     if (pageYOffset >= sectionTop) {
//       current = section.getAttribute("id");
//     }
//   });

//   navLinks.forEach((link) => {
//     link.classList.remove("active");
//     if (link.getAttribute("href") === `#${current}`) {
//       link.classList.add("active");
//     }
//   });
// });

var typed = new Typed(".element", {
  strings: ["Front End", "Freelancer", "Back End"],
  typeSpeed: 60,
  backSpeed: 40,
  loop: true,
});

const Deep_Drop_Down = document.querySelector(".Deep-Drop-Down");
Deep_Drop_Down.addEventListener("click", function (e) {
  e.stopPropagation();
  const dropdown_menu = this.nextElementSibling;
  dropdown_menu.classList.toggle("show");
});

// dropdown_toggle.addEventListener('click', function (e) {
//   e.preventDefault();
//   const dropdown_menu = this.nextElementSibling;
//   console.log(dropdown_menu);
//   // dropdown_menu.classList.toggle('show');
// }
// );

// document.addEventListener('click', function (e) {
//   const dropdown_menu = document.querySelector('.dropdown-menu');
//   if (!dropdown_toggle.contains(e.target)) {
//     dropdown_menu.classList.remove('show');
//   }
// });

const navLinks1 = document.querySelectorAll(
  '.navbar-nav .nav-link[href^="#"]:not([href="#"])'
);

const sections = Array.from(navLinks1)
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter((section) => section !== null);

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.clientHeight;

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  navLinks1.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});
