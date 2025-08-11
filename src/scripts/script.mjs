const themeToggle = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");

themeToggle.addEventListener("click", () => {
  if (document.body.classList.contains("dark")) {
    document.body.classList.remove("dark");
    themeIcon.setAttribute("icon", "carbon:sun");
  } else {
    document.body.classList.add("dark");
    themeIcon.setAttribute("icon", "carbon:moon");
  }
});
