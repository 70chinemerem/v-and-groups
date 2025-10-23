//This file handles all interactive functionality including:
/* - Theme toggle (light/dark mode)
* THEME TOGGLE FUNCTIONALITY
* ==========================
* Handles switching between light and dark modes
* Persists user preference in localStorage
* Updates button icon dynamically
*/
const themeBtn = document.getElementById("themeToggle");
themeBtn.addEventListener("click", () => {
  // Toggle dark class on document element
  document.documentElement.classList.toggle("dark");
  // Determine current mode and update button
  const mode = document.documentElement.classList.contains("dark")
    ? "dark"
    : "light";
  localStorage.setItem("theme", mode);
  themeBtn.textContent = mode === "dark" ? "🌚" : "🌞";
});
// Load saved theme preference on page load
if (localStorage.getItem("theme") === "dark") {
  document.documentElement.classList.add("dark");
  themeBtn.textContent = "🌚";
}
