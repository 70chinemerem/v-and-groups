//This file handles all interactive functionality including:
/* - Theme toggle (light/dark mode)
* THEME TOGGLE FUNCTIONALITY
* ==========================
* Handles switching between light and dark modes
* Persists user preference in localStorage
* Updates button icon dynamically
*/
// ☀️ Theme Toggle
const themeBtn = document.getElementById("theme-toggle");

// Check if theme toggle button exists before adding event listener
if (themeBtn) {
  themeBtn.addEventListener("click", () => {
    // Toggle dark class on document element
    document.documentElement.classList.toggle("dark");
    // Determine current mode and update button
    const mode = document.documentElement.classList.contains("dark")
      ? "dark"
      : "light";
    localStorage.setItem("theme", mode);
    themeBtn.textContent = mode === "dark" ? "☪︎" : "☀️";
  });

  // Load saved theme preference on page load
  if (localStorage.getItem("theme") === "dark") {
    document.documentElement.classList.add("dark");
    themeBtn.textContent = "☪︎";
  }
}

// 🎯 Scroll to About Section
const scrollBtn = document.getElementById('scrollBtn');
if (scrollBtn) {
  scrollBtn.addEventListener('click', () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
}

// 📋 FAQ Toggle Functionality
function toggleFAQ(button) {
  const content = button.querySelector('.faq-content');
  const icon = button.querySelector('span');

  if (content.classList.contains('hidden')) {
    content.classList.remove('hidden');
    icon.textContent = '−';
  } else {
    content.classList.add('hidden');
    icon.textContent = '+';
  }
}

// 💰 Repair Cost Calculator
function calculateRepairCost() {
  const brand = document.getElementById('phone-brand').value;
  const repairType = document.getElementById('repair-type').value;
  const model = document.getElementById('phone-model').value;

  if (!brand || !repairType) {
    alert('Please select both phone brand and repair type');
    return;
  }

  // Base pricing structure
  const pricing = {
    iphone: {
      screen: { min: 80, max: 200, base: 120 },
      battery: { min: 40, max: 80, base: 60 },
      water: { min: 100, max: 300, base: 150 },
      charging: { min: 30, max: 60, base: 45 },
      camera: { min: 60, max: 120, base: 90 },
      software: { min: 20, max: 50, base: 35 }
    },
    samsung: {
      screen: { min: 70, max: 180, base: 110 },
      battery: { min: 35, max: 70, base: 55 },
      water: { min: 90, max: 280, base: 140 },
      charging: { min: 25, max: 55, base: 40 },
      camera: { min: 50, max: 110, base: 80 },
      software: { min: 20, max: 50, base: 35 }
    },
    google: {
      screen: { min: 60, max: 160, base: 100 },
      battery: { min: 30, max: 60, base: 45 },
      water: { min: 80, max: 250, base: 130 },
      charging: { min: 25, max: 50, base: 35 },
      camera: { min: 45, max: 100, base: 75 },
      software: { min: 20, max: 50, base: 35 }
    },
    oneplus: {
      screen: { min: 65, max: 170, base: 105 },
      battery: { min: 32, max: 65, base: 50 },
      water: { min: 85, max: 260, base: 135 },
      charging: { min: 28, max: 52, base: 38 },
      camera: { min: 48, max: 105, base: 78 },
      software: { min: 20, max: 50, base: 35 }
    },
    huawei: {
      screen: { min: 55, max: 150, base: 95 },
      battery: { min: 28, max: 58, base: 42 },
      water: { min: 75, max: 240, base: 125 },
      charging: { min: 22, max: 48, base: 32 },
      camera: { min: 40, max: 95, base: 70 },
      software: { min: 20, max: 50, base: 35 }
    },
    other: {
      screen: { min: 50, max: 140, base: 90 },
      battery: { min: 25, max: 55, base: 40 },
      water: { min: 70, max: 220, base: 120 },
      charging: { min: 20, max: 45, base: 30 },
      camera: { min: 35, max: 90, base: 65 },
      software: { min: 20, max: 50, base: 35 }
    }
  };

  const price = pricing[brand][repairType];
  const costAmount = document.getElementById('cost-amount');
  const costDetails = document.getElementById('cost-details');
  const costResult = document.getElementById('cost-result');

  costAmount.textContent = `$${price.base}`;
  costDetails.textContent = `Estimated range: $${price.min} - $${price.max}. Final price may vary based on specific model and damage extent.`;
  costResult.classList.remove('hidden');
}
