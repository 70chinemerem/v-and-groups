//This file handles all interactive functionality including:
/* - Theme toggle (light/dark mode)
* THEME TOGGLE FUNCTIONALITY
* ==========================
* Handles switching between light and dark modes
* Persists user preference in localStorage
* Updates button icon dynamically
*/
// 🌞 Theme Toggle
const themeBtn = document.getElementById('themeToggle');
themeBtn.addEventListener('click', () => {
  document.documentElement.classList.toggle('dark');
  const mode = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
  localStorage.setItem('theme', mode);
  themeBtn.textContent = mode === 'dark' ? '🌚' : '🌞';
});

// Load theme from localStorage
if (localStorage.getItem('theme') === 'dark') {
  document.documentElement.classList.add('dark');
  themeBtn.textContent = '🌚';
}

// 🎯 Scroll to About Section
const scrollBtn = document.getElementById('scrollBtn');
scrollBtn.addEventListener('click', () => {
  document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
});
