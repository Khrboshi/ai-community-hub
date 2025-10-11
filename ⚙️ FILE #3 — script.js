// ==============================
// AI COMMUNITY HUB INTERACTIVITY
// ==============================

// --- MOBILE NAV TOGGLE ---
document.addEventListener("DOMContentLoaded", () => {
    const nav = document.querySelector(".nav-links");
    const toggle = document.createElement("div");

    toggle.classList.add("nav-toggle");
    toggle.innerHTML = "☰"; // hamburger icon
    nav.parentElement.insertBefore(toggle, nav);

    toggle.addEventListener("click", () => {
        nav.classList.toggle("open");
        toggle.classList.toggle("active");
        toggle.innerHTML = nav.classList.contains("open") ? "✖" : "☰";
    });
});

// --- FUTURE FEATURES ---
// Here we can later add:
// - Dark/light theme toggle
// - Blog search or filtering
// - Smooth scroll for navigation
console.log("AI Community Hub script loaded successfully.");
