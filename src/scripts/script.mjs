const themeToggle = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");
const notesSection = document.querySelector(".notes");

render();

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
  const data = noteForm.children.namedItem("notes").value;
  let notes = [];
  if (localStorage.getItem("notes"))
    notes = JSON.parse(localStorage.getItem("notes"));

  notes.push(data);

  localStorage.setItem("notes", JSON.stringify(notes));

  render();
});

function render() {
  if (localStorage.getItem("notes")) {
    notesSection.innerHTML = JSON.parse(localStorage.getItem("notes"))
      .map((note, index) => {
        return `<article class="note-item" id="${index}">
      <span>
      ${note}
      </span>
      </article>`;
      })
      .join(" ");
  } else {
    notesSection.innerHTML = `<div class="no-item-placeholder">No Items Found</div>`;
  }
}
