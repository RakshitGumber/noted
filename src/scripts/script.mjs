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

const noteForm = document.querySelector(".note-form");

noteForm.children.namedItem("submit-button").addEventListener("click", (e) => {
  e.preventDefault();
  console.log(noteForm.children.namedItem("notes").value);
});
