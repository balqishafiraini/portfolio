// Navbar
const navLink = document.querySelectorAll(".navbar .nav-link");
navLink.forEach((e) => {
  e.addEventListener("click", () => {
    navLink.forEach((element) => {
      element.classList.add("nav-hover");
      element.classList.remove("active");
    });
    e.classList.add("active");
    e.classList.remove("nav-hover");
  });
});

// Skills
const dropdown = document.querySelectorAll("#skills .box .dropdown");
const content = document.querySelectorAll("#skills .box .content");
const arrow = document.querySelectorAll("#skills .box .dropdown .arrow");

// dropdown-1
for (let i = 0; i <= dropdown.length; i++) {
  dropdown[i].addEventListener("click", () => {
    dropdown[i].querySelector(".arrow").classList.add("rotate");
    content[i].querySelectorAll("span").forEach((e) => {
      e.classList.toggle("content-disabled");
    });
  });
}
