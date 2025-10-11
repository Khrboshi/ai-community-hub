document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector(".nav-links");
  const toggle = document.createElement("div");

  toggle.classList.add("nav-toggle");
  toggle.innerHTML = "☰";
  nav.parentElement.insertBefore(toggle, nav);

  toggle.addEventListener("click", () => {
    nav.classList.toggle("open");
    toggle.innerHTML = nav.classList.contains("open") ? "✖" : "☰";
  });
});

console.log("AI Community Hub loaded successfully.");
