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

// 🎯 Scroll to Services Section
const scrollBtn = document.getElementById('scrollBtn');
if (scrollBtn) {
  scrollBtn.addEventListener('click', () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Fallback: scroll to first section after hero
      const firstSection = document.querySelector('section:not(.min-h-screen)');
      if (firstSection) {
        firstSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
}

// 📋 FAQ Toggle Functionality
function toggleFAQ(button) {
  console.log('FAQ toggle clicked'); // Debug log
  const content = button.querySelector('.faq-content');
  const icon = button.querySelector('span');

  if (!content || !icon) {
    console.error('FAQ elements not found');
    return;
  }

  if (content.classList.contains('hidden')) {
    content.classList.remove('hidden');
    icon.textContent = '−';
  } else {
    content.classList.add('hidden');
    icon.textContent = '+';
  }
}

// Make functions globally accessible
window.toggleFAQ = toggleFAQ;
window.calculateRepairCost = calculateRepairCost;

// Add event listeners for FAQ buttons (alternative approach)
document.addEventListener('DOMContentLoaded', function () {
  const faqButtons = document.querySelectorAll('[onclick*="toggleFAQ"]');
  faqButtons.forEach(button => {
    button.addEventListener('click', function () {
      toggleFAQ(this);
    });
  });
});

// 💰 Repair Cost Calculator
function calculateRepairCost() {
  console.log('Calculator function called'); // Debug log

  const brand = document.getElementById('phone-brand').value;
  const repairType = document.getElementById('repair-type').value;
  const model = document.getElementById('phone-model').value.toLowerCase();

  console.log('Input values:', { brand, repairType, model }); // Debug log

  if (!brand || !repairType || !model) {
    alert('Please select phone brand, repair type, and enter your phone model');
    return;
  }

  // Enhanced pricing structure with specific models (Prices in Nigerian Naira)
  const pricing = {
    iphone: {
      // iPhone 15 series (latest)
      "iphone 15 pro max": { screen: { min: 180000, max: 250000, base: 220000 }, battery: { min: 60000, max: 90000, base: 75000 }, water: { min: 200000, max: 400000, base: 280000 }, charging: { min: 40000, max: 70000, base: 55000 }, camera: { min: 80000, max: 150000, base: 120000 }, software: { min: 30000, max: 60000, base: 45000 } },
      "iphone 15 pro": { screen: { min: 160000, max: 220000, base: 190000 }, battery: { min: 55000, max: 85000, base: 70000 }, water: { min: 180000, max: 350000, base: 260000 }, charging: { min: 35000, max: 65000, base: 50000 }, camera: { min: 75000, max: 140000, base: 110000 }, software: { min: 30000, max: 60000, base: 45000 } },
      "iphone 15": { screen: { min: 140000, max: 200000, base: 170000 }, battery: { min: 50000, max: 80000, base: 65000 }, water: { min: 160000, max: 320000, base: 240000 }, charging: { min: 30000, max: 60000, base: 45000 }, camera: { min: 70000, max: 130000, base: 100000 }, software: { min: 30000, max: 60000, base: 45000 } },
      // iPhone 14 series
      "iphone 14 pro max": { screen: { min: 150000, max: 220000, base: 185000 }, battery: { min: 55000, max: 85000, base: 70000 }, water: { min: 180000, max: 350000, base: 260000 }, charging: { min: 35000, max: 65000, base: 50000 }, camera: { min: 70000, max: 130000, base: 100000 }, software: { min: 30000, max: 60000, base: 45000 } },
      "iphone 14 pro": { screen: { min: 130000, max: 190000, base: 160000 }, battery: { min: 50000, max: 80000, base: 65000 }, water: { min: 160000, max: 320000, base: 240000 }, charging: { min: 30000, max: 60000, base: 45000 }, camera: { min: 65000, max: 120000, base: 95000 }, software: { min: 30000, max: 60000, base: 45000 } },
      "iphone 14": { screen: { min: 120000, max: 180000, base: 150000 }, battery: { min: 45000, max: 75000, base: 60000 }, water: { min: 140000, max: 300000, base: 220000 }, charging: { min: 25000, max: 55000, base: 40000 }, camera: { min: 60000, max: 110000, base: 85000 }, software: { min: 30000, max: 60000, base: 45000 } },
      // iPhone 13 series
      "iphone 13 pro max": { screen: { min: 130000, max: 200000, base: 165000 }, battery: { min: 50000, max: 80000, base: 65000 }, water: { min: 160000, max: 320000, base: 240000 }, charging: { min: 30000, max: 60000, base: 45000 }, camera: { min: 65000, max: 120000, base: 95000 }, software: { min: 25000, max: 55000, base: 40000 } },
      "iphone 13 pro": { screen: { min: 110000, max: 170000, base: 140000 }, battery: { min: 45000, max: 75000, base: 60000 }, water: { min: 140000, max: 290000, base: 220000 }, charging: { min: 25000, max: 55000, base: 40000 }, camera: { min: 60000, max: 110000, base: 85000 }, software: { min: 25000, max: 55000, base: 40000 } },
      "iphone 13": { screen: { min: 100000, max: 160000, base: 130000 }, battery: { min: 40000, max: 70000, base: 55000 }, water: { min: 120000, max: 270000, base: 200000 }, charging: { min: 20000, max: 50000, base: 35000 }, camera: { min: 55000, max: 100000, base: 80000 }, software: { min: 25000, max: 55000, base: 40000 } },
      // iPhone 12 series
      "iphone 12 pro max": { screen: { min: 100000, max: 160000, base: 130000 }, battery: { min: 40000, max: 70000, base: 55000 }, water: { min: 120000, max: 250000, base: 180000 }, charging: { min: 20000, max: 50000, base: 35000 }, camera: { min: 50000, max: 100000, base: 75000 }, software: { min: 20000, max: 50000, base: 35000 } },
      "iphone 12 pro": { screen: { min: 90000, max: 150000, base: 120000 }, battery: { min: 35000, max: 65000, base: 50000 }, water: { min: 110000, max: 230000, base: 170000 }, charging: { min: 18000, max: 45000, base: 32000 }, camera: { min: 45000, max: 90000, base: 70000 }, software: { min: 20000, max: 50000, base: 35000 } },
      "iphone 12": { screen: { min: 80000, max: 140000, base: 110000 }, battery: { min: 30000, max: 60000, base: 45000 }, water: { min: 100000, max: 210000, base: 160000 }, charging: { min: 15000, max: 40000, base: 28000 }, camera: { min: 40000, max: 80000, base: 60000 }, software: { min: 20000, max: 50000, base: 35000 } },
      // Older iPhones
      "iphone 11": { screen: { min: 70000, max: 120000, base: 95000 }, battery: { min: 25000, max: 50000, base: 38000 }, water: { min: 80000, max: 180000, base: 130000 }, charging: { min: 12000, max: 35000, base: 24000 }, camera: { min: 35000, max: 70000, base: 55000 }, software: { min: 20000, max: 50000, base: 35000 } },
      "iphone x": { screen: { min: 60000, max: 110000, base: 85000 }, battery: { min: 20000, max: 45000, base: 32000 }, water: { min: 70000, max: 160000, base: 115000 }, charging: { min: 10000, max: 30000, base: 20000 }, camera: { min: 30000, max: 60000, base: 45000 }, software: { min: 20000, max: 50000, base: 35000 } },
      // Default iPhone pricing
      default: { screen: { min: 80000, max: 200000, base: 120000 }, battery: { min: 40000, max: 80000, base: 60000 }, water: { min: 100000, max: 300000, base: 150000 }, charging: { min: 30000, max: 60000, base: 45000 }, camera: { min: 60000, max: 120000, base: 90000 }, software: { min: 20000, max: 50000, base: 35000 } }
    },
    samsung: {
      // Samsung Galaxy S24 series
      "galaxy s24 ultra": { screen: { min: 160000, max: 220000, base: 190000 }, battery: { min: 55000, max: 85000, base: 70000 }, water: { min: 180000, max: 350000, base: 260000 }, charging: { min: 35000, max: 65000, base: 50000 }, camera: { min: 70000, max: 130000, base: 100000 }, software: { min: 30000, max: 60000, base: 45000 } },
      "galaxy s24 plus": { screen: { min: 140000, max: 200000, base: 170000 }, battery: { min: 50000, max: 80000, base: 65000 }, water: { min: 160000, max: 320000, base: 240000 }, charging: { min: 30000, max: 60000, base: 45000 }, camera: { min: 65000, max: 120000, base: 95000 }, software: { min: 30000, max: 60000, base: 45000 } },
      "galaxy s24": { screen: { min: 120000, max: 180000, base: 150000 }, battery: { min: 45000, max: 75000, base: 60000 }, water: { min: 140000, max: 300000, base: 220000 }, charging: { min: 25000, max: 55000, base: 40000 }, camera: { min: 60000, max: 110000, base: 85000 }, software: { min: 30000, max: 60000, base: 45000 } },
      // Samsung Galaxy S23 series
      "galaxy s23 ultra": { screen: { min: 150000, max: 210000, base: 180000 }, battery: { min: 50000, max: 80000, base: 65000 }, water: { min: 170000, max: 330000, base: 250000 }, charging: { min: 30000, max: 60000, base: 45000 }, camera: { min: 65000, max: 120000, base: 95000 }, software: { min: 25000, max: 55000, base: 40000 } },
      "galaxy s23 plus": { screen: { min: 130000, max: 190000, base: 160000 }, battery: { min: 45000, max: 75000, base: 60000 }, water: { min: 150000, max: 300000, base: 230000 }, charging: { min: 25000, max: 55000, base: 40000 }, camera: { min: 60000, max: 110000, base: 85000 }, software: { min: 25000, max: 55000, base: 40000 } },
      "galaxy s23": { screen: { min: 110000, max: 170000, base: 140000 }, battery: { min: 40000, max: 70000, base: 55000 }, water: { min: 130000, max: 280000, base: 210000 }, charging: { min: 20000, max: 50000, base: 35000 }, camera: { min: 55000, max: 100000, base: 80000 }, software: { min: 25000, max: 55000, base: 40000 } },
      // Samsung Galaxy S22 series
      "galaxy s22 ultra": { screen: { min: 120000, max: 180000, base: 150000 }, battery: { min: 40000, max: 70000, base: 55000 }, water: { min: 140000, max: 280000, base: 210000 }, charging: { min: 25000, max: 55000, base: 40000 }, camera: { min: 55000, max: 100000, base: 80000 }, software: { min: 20000, max: 50000, base: 35000 } },
      "galaxy s22 plus": { screen: { min: 100000, max: 160000, base: 130000 }, battery: { min: 35000, max: 65000, base: 50000 }, water: { min: 120000, max: 250000, base: 190000 }, charging: { min: 20000, max: 45000, base: 32000 }, camera: { min: 50000, max: 90000, base: 70000 }, software: { min: 20000, max: 50000, base: 35000 } },
      "galaxy s22": { screen: { min: 90000, max: 150000, base: 120000 }, battery: { min: 30000, max: 60000, base: 45000 }, water: { min: 110000, max: 230000, base: 170000 }, charging: { min: 18000, max: 40000, base: 29000 }, camera: { min: 45000, max: 85000, base: 65000 }, software: { min: 20000, max: 50000, base: 35000 } },
      // Samsung Galaxy Note series
      "galaxy note 20": { screen: { min: 80000, max: 140000, base: 110000 }, battery: { min: 25000, max: 50000, base: 38000 }, water: { min: 100000, max: 200000, base: 150000 }, charging: { min: 15000, max: 35000, base: 25000 }, camera: { min: 40000, max: 80000, base: 60000 }, software: { min: 20000, max: 50000, base: 35000 } },
      // Default Samsung pricing
      default: { screen: { min: 70000, max: 180000, base: 110000 }, battery: { min: 35000, max: 70000, base: 55000 }, water: { min: 90000, max: 280000, base: 140000 }, charging: { min: 25000, max: 55000, base: 40000 }, camera: { min: 50000, max: 110000, base: 80000 }, software: { min: 20000, max: 50000, base: 35000 } }
    },
    google: {
      "pixel 8 pro": { screen: { min: 120000, max: 180000, base: 150000 }, battery: { min: 45000, max: 75000, base: 60000 }, water: { min: 140000, max: 280000, base: 210000 }, charging: { min: 25000, max: 55000, base: 40000 }, camera: { min: 60000, max: 110000, base: 85000 }, software: { min: 25000, max: 55000, base: 40000 } },
      "pixel 8": { screen: { min: 100000, max: 160000, base: 130000 }, battery: { min: 40000, max: 70000, base: 55000 }, water: { min: 120000, max: 250000, base: 190000 }, charging: { min: 20000, max: 50000, base: 35000 }, camera: { min: 55000, max: 100000, base: 80000 }, software: { min: 25000, max: 55000, base: 40000 } },
      "pixel 7 pro": { screen: { min: 90000, max: 150000, base: 120000 }, battery: { min: 35000, max: 65000, base: 50000 }, water: { min: 110000, max: 230000, base: 170000 }, charging: { min: 18000, max: 45000, base: 32000 }, camera: { min: 50000, max: 90000, base: 70000 }, software: { min: 20000, max: 50000, base: 35000 } },
      "pixel 7": { screen: { min: 80000, max: 140000, base: 110000 }, battery: { min: 30000, max: 60000, base: 45000 }, water: { min: 100000, max: 210000, base: 160000 }, charging: { min: 15000, max: 40000, base: 28000 }, camera: { min: 45000, max: 80000, base: 65000 }, software: { min: 20000, max: 50000, base: 35000 } },
      "pixel 6 pro": { screen: { min: 70000, max: 130000, base: 100000 }, battery: { min: 25000, max: 50000, base: 38000 }, water: { min: 90000, max: 190000, base: 140000 }, charging: { min: 12000, max: 35000, base: 24000 }, camera: { min: 40000, max: 75000, base: 60000 }, software: { min: 20000, max: 50000, base: 35000 } },
      "pixel 6": { screen: { min: 60000, max: 120000, base: 90000 }, battery: { min: 20000, max: 45000, base: 32000 }, water: { min: 80000, max: 170000, base: 125000 }, charging: { min: 10000, max: 30000, base: 20000 }, camera: { min: 35000, max: 70000, base: 55000 }, software: { min: 20000, max: 50000, base: 35000 } },
      default: { screen: { min: 60000, max: 160000, base: 100000 }, battery: { min: 30000, max: 60000, base: 45000 }, water: { min: 80000, max: 250000, base: 130000 }, charging: { min: 25000, max: 50000, base: 35000 }, camera: { min: 45000, max: 100000, base: 75000 }, software: { min: 20000, max: 50000, base: 35000 } }
    },
    oneplus: {
      "oneplus 12": { screen: { min: 100000, max: 160000, base: 130000 }, battery: { min: 40000, max: 70000, base: 55000 }, water: { min: 120000, max: 240000, base: 180000 }, charging: { min: 25000, max: 50000, base: 38000 }, camera: { min: 55000, max: 100000, base: 80000 }, software: { min: 25000, max: 55000, base: 40000 } },
      "oneplus 11": { screen: { min: 90000, max: 150000, base: 120000 }, battery: { min: 35000, max: 65000, base: 50000 }, water: { min: 110000, max: 220000, base: 165000 }, charging: { min: 22000, max: 45000, base: 34000 }, camera: { min: 50000, max: 90000, base: 75000 }, software: { min: 20000, max: 50000, base: 35000 } },
      "oneplus 10 pro": { screen: { min: 80000, max: 140000, base: 110000 }, battery: { min: 30000, max: 60000, base: 45000 }, water: { min: 100000, max: 200000, base: 150000 }, charging: { min: 20000, max: 40000, base: 30000 }, camera: { min: 45000, max: 85000, base: 70000 }, software: { min: 20000, max: 50000, base: 35000 } },
      default: { screen: { min: 65000, max: 170000, base: 105000 }, battery: { min: 32000, max: 65000, base: 50000 }, water: { min: 85000, max: 260000, base: 135000 }, charging: { min: 28000, max: 52000, base: 38000 }, camera: { min: 48000, max: 105000, base: 78000 }, software: { min: 20000, max: 50000, base: 35000 } }
    },
    huawei: {
      "p60 pro": { screen: { min: 80000, max: 140000, base: 110000 }, battery: { min: 30000, max: 60000, base: 45000 }, water: { min: 100000, max: 200000, base: 150000 }, charging: { min: 20000, max: 40000, base: 30000 }, camera: { min: 45000, max: 85000, base: 70000 }, software: { min: 20000, max: 50000, base: 35000 } },
      "p50 pro": { screen: { min: 70000, max: 130000, base: 100000 }, battery: { min: 25000, max: 50000, base: 38000 }, water: { min: 90000, max: 180000, base: 135000 }, charging: { min: 18000, max: 35000, base: 27000 }, camera: { min: 40000, max: 75000, base: 60000 }, software: { min: 20000, max: 50000, base: 35000 } },
      "mate 50 pro": { screen: { min: 75000, max: 135000, base: 105000 }, battery: { min: 28000, max: 55000, base: 42000 }, water: { min: 95000, max: 190000, base: 140000 }, charging: { min: 20000, max: 38000, base: 29000 }, camera: { min: 42000, max: 78000, base: 62000 }, software: { min: 20000, max: 50000, base: 35000 } },
      default: { screen: { min: 55000, max: 150000, base: 95000 }, battery: { min: 28000, max: 58000, base: 42000 }, water: { min: 75000, max: 240000, base: 125000 }, charging: { min: 22000, max: 48000, base: 32000 }, camera: { min: 40000, max: 95000, base: 70000 }, software: { min: 20000, max: 50000, base: 35000 } }
    },
    other: {
      default: { screen: { min: 50000, max: 140000, base: 90000 }, battery: { min: 25000, max: 55000, base: 40000 }, water: { min: 70000, max: 220000, base: 120000 }, charging: { min: 20000, max: 45000, base: 30000 }, camera: { min: 35000, max: 90000, base: 65000 }, software: { min: 20000, max: 50000, base: 35000 } }
    }
  };

  // Find the specific model pricing - model is now required
  let price;
  if (pricing[brand] && model) {
    // Try to find exact model match
    const modelKey = Object.keys(pricing[brand]).find(key =>
      key !== 'default' && model.includes(key.toLowerCase())
    );
    console.log('Model search:', { model, modelKey }); // Debug log
    if (modelKey) {
      price = pricing[brand][modelKey][repairType];
      console.log('Using specific model pricing:', modelKey); // Debug log
    } else {
      // If no specific model found, show error message
      alert(`Sorry, we don't have specific pricing for "${model}". Please try a different model or contact us for a quote.`);
      return;
    }
  } else {
    alert('Please enter a valid phone model');
    return;
  }

  const costAmount = document.getElementById('cost-amount');
  const costDetails = document.getElementById('cost-details');
  const costResult = document.getElementById('cost-result');

  console.log('Final price:', price); // Debug log

  if (!price) {
    console.error('No price found for:', { brand, repairType, model });
    alert('Sorry, we could not calculate a price for this combination. Please try different options.');
    return;
  }

  costAmount.textContent = `₦${price.base.toLocaleString()}`;

  let modelText = model ? ` for ${model}` : '';
  costDetails.textContent = `Estimated range: ₦${price.min.toLocaleString()} - ₦${price.max.toLocaleString()}${modelText}. Final price may vary based on specific model and damage extent.`;
  costResult.classList.remove('hidden');

  console.log('Calculator result displayed successfully'); // Debug log
}

// 📅 Booking Form Handler
function handleBookingSubmit(event) {
  event.preventDefault();
  console.log('Booking form submitted'); // Debug log

  // Get form data
  const formData = new FormData(event.target);
  const bookingData = {
    fullName: formData.get('fullName'),
    phone: formData.get('phone'),
    email: formData.get('email'),
    preferredDate: formData.get('preferredDate'),
    phoneBrand: formData.get('phoneBrand'),
    phoneModel: formData.get('phoneModel'),
    repairType: formData.get('repairType'),
    urgency: formData.get('urgency'),
    problemDescription: formData.get('problemDescription'),
    additionalServices: {
      dataBackup: formData.get('dataBackup'),
      screenProtector: formData.get('screenProtector'),
      caseInstallation: formData.get('caseInstallation'),
      warrantyExtension: formData.get('warrantyExtension')
    }
  };

  console.log('Booking data:', bookingData); // Debug log

  // Validate required fields
  if (!bookingData.fullName || !bookingData.phone || !bookingData.phoneBrand ||
    !bookingData.phoneModel || !bookingData.repairType || !bookingData.problemDescription) {
    alert('Please fill in all required fields (marked with *)');
    return;
  }

  // Create WhatsApp message
  const whatsappMessage = createBookingMessage(bookingData);
  const whatsappUrl = `https://wa.me/2347075825080?text=${encodeURIComponent(whatsappMessage)}`;

  // Open WhatsApp
  window.open(whatsappUrl, '_blank');

  // Show success message
  alert('Thank you! Your booking request has been sent. We will contact you within 2 hours to confirm your appointment.');

  // Reset form
  event.target.reset();
}

// Create booking message for WhatsApp
function createBookingMessage(data) {
  let message = `🔧 *Repair Booking Request*\n\n`;
  message += `*Customer Information:*\n`;
  message += `Name: ${data.fullName}\n`;
  message += `Phone: ${data.phone}\n`;
  if (data.email) message += `Email: ${data.email}\n`;
  if (data.preferredDate) message += `Preferred Date: ${data.preferredDate}\n\n`;

  message += `*Device Information:*\n`;
  message += `Brand: ${data.phoneBrand}\n`;
  message += `Model: ${data.phoneModel}\n`;
  message += `Repair Type: ${data.repairType}\n`;
  message += `Urgency: ${data.urgency}\n\n`;

  message += `*Problem Description:*\n${data.problemDescription}\n\n`;

  // Add additional services if selected
  const additionalServices = [];
  if (data.additionalServices.dataBackup) additionalServices.push('Data Backup Service');
  if (data.additionalServices.screenProtector) additionalServices.push('Screen Protector Installation');
  if (data.additionalServices.caseInstallation) additionalServices.push('Case Installation');
  if (data.additionalServices.warrantyExtension) additionalServices.push('Extended Warranty');

  if (additionalServices.length > 0) {
    message += `*Additional Services:*\n${additionalServices.join(', ')}\n\n`;
  }

  message += `Please confirm this booking and provide an estimated cost. Thank you!`;

  return message;
}

// Make booking function globally accessible
window.handleBookingSubmit = handleBookingSubmit;

// 🎧 Customer Care Form Handler
function handleCustomerCareSubmit(event) {
  event.preventDefault();
  console.log('Customer care form submitted'); // Debug log

  // Get form data
  const formData = new FormData(event.target);
  const careData = {
    fullName: formData.get('fullName'),
    phone: formData.get('phone'),
    email: formData.get('email'),
    customerId: formData.get('customerId'),
    inquiryType: formData.get('inquiryType'),
    priority: formData.get('priority'),
    phoneBrand: formData.get('phoneBrand'),
    phoneModel: formData.get('phoneModel'),
    message: formData.get('message'),
    followUp: formData.get('followUp'),
    emailUpdates: formData.get('emailUpdates')
  };

  console.log('Customer care data:', careData); // Debug log

  // Validate required fields
  if (!careData.fullName || !careData.phone || !careData.email ||
    !careData.inquiryType || !careData.message) {
    alert('Please fill in all required fields (marked with *)');
    return;
  }

  // Create WhatsApp message
  const whatsappMessage = createCustomerCareMessage(careData);
  const whatsappUrl = `https://wa.me/2347075825080?text=${encodeURIComponent(whatsappMessage)}`;

  // Open WhatsApp
  window.open(whatsappUrl, '_blank');

  // Show success message
  alert('Thank you! Your customer care request has been submitted. We will get back to you within 24 hours.');

  // Reset form
  event.target.reset();
}

// Create customer care message for WhatsApp
function createCustomerCareMessage(data) {
  let message = `🎧 *Customer Care Request*\n\n`;
  message += `*Customer Information:*\n`;
  message += `Name: ${data.fullName}\n`;
  message += `Phone: ${data.phone}\n`;
  message += `Email: ${data.email}\n`;
  if (data.customerId) message += `Customer ID: ${data.customerId}\n\n`;

  message += `*Inquiry Details:*\n`;
  message += `Type: ${data.inquiryType}\n`;
  message += `Priority: ${data.priority}\n`;
  if (data.phoneBrand) message += `Device: ${data.phoneBrand} ${data.phoneModel || ''}\n\n`;

  message += `*Message:*\n${data.message}\n\n`;

  // Add preferences if selected
  const preferences = [];
  if (data.followUp) preferences.push('Follow-up call requested');
  if (data.emailUpdates) preferences.push('Email updates requested');

  if (preferences.length > 0) {
    message += `*Customer Preferences:*\n${preferences.join(', ')}\n\n`;
  }

  message += `Please address this customer care request. Thank you!`;

  return message;
}

// Make customer care function globally accessible
window.handleCustomerCareSubmit = handleCustomerCareSubmit;

// 📜 Scroll Functionality
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

// Scroll progress indicator
function updateScrollProgress() {
  const scrollProgress = document.getElementById('scroll-progress');
  const scrollToTopBtn = document.getElementById('scroll-to-top');

  if (!scrollProgress || !scrollToTopBtn) return;

  const scrollTop = window.pageYOffset;
  const docHeight = document.body.offsetHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;

  // Update progress bar
  scrollProgress.style.width = scrollPercent + '%';

  // Show/hide scroll to top button
  if (scrollTop > 300) {
    scrollToTopBtn.classList.add('visible');
  } else {
    scrollToTopBtn.classList.remove('visible');
  }
}

// Smooth scroll to sections
function smoothScrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
}

// Add scroll event listener
window.addEventListener('scroll', updateScrollProgress);

// Initialize scroll functionality
document.addEventListener('DOMContentLoaded', function () {
  updateScrollProgress();

  // Add smooth scroll to all internal links
  const internalLinks = document.querySelectorAll('a[href^="#"]');
  internalLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      smoothScrollToSection(targetId);
    });
  });
});

// Make scroll functions globally accessible
window.scrollToTop = scrollToTop;
window.smoothScrollToSection = smoothScrollToSection;
