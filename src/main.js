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

  // Enhanced pricing structure with specific models
  const pricing = {
    iphone: {
      // iPhone 15 series (latest)
      "iphone 15 pro max": { screen: { min: 180, max: 250, base: 220 }, battery: { min: 60, max: 90, base: 75 }, water: { min: 200, max: 400, base: 280 }, charging: { min: 40, max: 70, base: 55 }, camera: { min: 80, max: 150, base: 120 }, software: { min: 30, max: 60, base: 45 } },
      "iphone 15 pro": { screen: { min: 160, max: 220, base: 190 }, battery: { min: 55, max: 85, base: 70 }, water: { min: 180, max: 350, base: 260 }, charging: { min: 35, max: 65, base: 50 }, camera: { min: 75, max: 140, base: 110 }, software: { min: 30, max: 60, base: 45 } },
      "iphone 15": { screen: { min: 140, max: 200, base: 170 }, battery: { min: 50, max: 80, base: 65 }, water: { min: 160, max: 320, base: 240 }, charging: { min: 30, max: 60, base: 45 }, camera: { min: 70, max: 130, base: 100 }, software: { min: 30, max: 60, base: 45 } },
      // iPhone 14 series
      "iphone 14 pro max": { screen: { min: 150, max: 220, base: 185 }, battery: { min: 55, max: 85, base: 70 }, water: { min: 180, max: 350, base: 260 }, charging: { min: 35, max: 65, base: 50 }, camera: { min: 70, max: 130, base: 100 }, software: { min: 30, max: 60, base: 45 } },
      "iphone 14 pro": { screen: { min: 130, max: 190, base: 160 }, battery: { min: 50, max: 80, base: 65 }, water: { min: 160, max: 320, base: 240 }, charging: { min: 30, max: 60, base: 45 }, camera: { min: 65, max: 120, base: 95 }, software: { min: 30, max: 60, base: 45 } },
      "iphone 14": { screen: { min: 120, max: 180, base: 150 }, battery: { min: 45, max: 75, base: 60 }, water: { min: 140, max: 300, base: 220 }, charging: { min: 25, max: 55, base: 40 }, camera: { min: 60, max: 110, base: 85 }, software: { min: 30, max: 60, base: 45 } },
      // iPhone 13 series
      "iphone 13 pro max": { screen: { min: 130, max: 200, base: 165 }, battery: { min: 50, max: 80, base: 65 }, water: { min: 160, max: 320, base: 240 }, charging: { min: 30, max: 60, base: 45 }, camera: { min: 65, max: 120, base: 95 }, software: { min: 25, max: 55, base: 40 } },
      "iphone 13 pro": { screen: { min: 110, max: 170, base: 140 }, battery: { min: 45, max: 75, base: 60 }, water: { min: 140, max: 290, base: 220 }, charging: { min: 25, max: 55, base: 40 }, camera: { min: 60, max: 110, base: 85 }, software: { min: 25, max: 55, base: 40 } },
      "iphone 13": { screen: { min: 100, max: 160, base: 130 }, battery: { min: 40, max: 70, base: 55 }, water: { min: 120, max: 270, base: 200 }, charging: { min: 20, max: 50, base: 35 }, camera: { min: 55, max: 100, base: 80 }, software: { min: 25, max: 55, base: 40 } },
      // iPhone 12 series
      "iphone 12 pro max": { screen: { min: 100, max: 160, base: 130 }, battery: { min: 40, max: 70, base: 55 }, water: { min: 120, max: 250, base: 180 }, charging: { min: 20, max: 50, base: 35 }, camera: { min: 50, max: 100, base: 75 }, software: { min: 20, max: 50, base: 35 } },
      "iphone 12 pro": { screen: { min: 90, max: 150, base: 120 }, battery: { min: 35, max: 65, base: 50 }, water: { min: 110, max: 230, base: 170 }, charging: { min: 18, max: 45, base: 32 }, camera: { min: 45, max: 90, base: 70 }, software: { min: 20, max: 50, base: 35 } },
      "iphone 12": { screen: { min: 80, max: 140, base: 110 }, battery: { min: 30, max: 60, base: 45 }, water: { min: 100, max: 210, base: 160 }, charging: { min: 15, max: 40, base: 28 }, camera: { min: 40, max: 80, base: 60 }, software: { min: 20, max: 50, base: 35 } },
      // Older iPhones
      "iphone 11": { screen: { min: 70, max: 120, base: 95 }, battery: { min: 25, max: 50, base: 38 }, water: { min: 80, max: 180, base: 130 }, charging: { min: 12, max: 35, base: 24 }, camera: { min: 35, max: 70, base: 55 }, software: { min: 20, max: 50, base: 35 } },
      "iphone x": { screen: { min: 60, max: 110, base: 85 }, battery: { min: 20, max: 45, base: 32 }, water: { min: 70, max: 160, base: 115 }, charging: { min: 10, max: 30, base: 20 }, camera: { min: 30, max: 60, base: 45 }, software: { min: 20, max: 50, base: 35 } },
      // Default iPhone pricing
      default: { screen: { min: 80, max: 200, base: 120 }, battery: { min: 40, max: 80, base: 60 }, water: { min: 100, max: 300, base: 150 }, charging: { min: 30, max: 60, base: 45 }, camera: { min: 60, max: 120, base: 90 }, software: { min: 20, max: 50, base: 35 } }
    },
    samsung: {
      // Samsung Galaxy S24 series
      "galaxy s24 ultra": { screen: { min: 160, max: 220, base: 190 }, battery: { min: 55, max: 85, base: 70 }, water: { min: 180, max: 350, base: 260 }, charging: { min: 35, max: 65, base: 50 }, camera: { min: 70, max: 130, base: 100 }, software: { min: 30, max: 60, base: 45 } },
      "galaxy s24 plus": { screen: { min: 140, max: 200, base: 170 }, battery: { min: 50, max: 80, base: 65 }, water: { min: 160, max: 320, base: 240 }, charging: { min: 30, max: 60, base: 45 }, camera: { min: 65, max: 120, base: 95 }, software: { min: 30, max: 60, base: 45 } },
      "galaxy s24": { screen: { min: 120, max: 180, base: 150 }, battery: { min: 45, max: 75, base: 60 }, water: { min: 140, max: 300, base: 220 }, charging: { min: 25, max: 55, base: 40 }, camera: { min: 60, max: 110, base: 85 }, software: { min: 30, max: 60, base: 45 } },
      // Samsung Galaxy S23 series
      "galaxy s23 ultra": { screen: { min: 150, max: 210, base: 180 }, battery: { min: 50, max: 80, base: 65 }, water: { min: 170, max: 330, base: 250 }, charging: { min: 30, max: 60, base: 45 }, camera: { min: 65, max: 120, base: 95 }, software: { min: 25, max: 55, base: 40 } },
      "galaxy s23 plus": { screen: { min: 130, max: 190, base: 160 }, battery: { min: 45, max: 75, base: 60 }, water: { min: 150, max: 300, base: 230 }, charging: { min: 25, max: 55, base: 40 }, camera: { min: 60, max: 110, base: 85 }, software: { min: 25, max: 55, base: 40 } },
      "galaxy s23": { screen: { min: 110, max: 170, base: 140 }, battery: { min: 40, max: 70, base: 55 }, water: { min: 130, max: 280, base: 210 }, charging: { min: 20, max: 50, base: 35 }, camera: { min: 55, max: 100, base: 80 }, software: { min: 25, max: 55, base: 40 } },
      // Samsung Galaxy S22 series
      "galaxy s22 ultra": { screen: { min: 120, max: 180, base: 150 }, battery: { min: 40, max: 70, base: 55 }, water: { min: 140, max: 280, base: 210 }, charging: { min: 25, max: 55, base: 40 }, camera: { min: 55, max: 100, base: 80 }, software: { min: 20, max: 50, base: 35 } },
      "galaxy s22 plus": { screen: { min: 100, max: 160, base: 130 }, battery: { min: 35, max: 65, base: 50 }, water: { min: 120, max: 250, base: 190 }, charging: { min: 20, max: 45, base: 32 }, camera: { min: 50, max: 90, base: 70 }, software: { min: 20, max: 50, base: 35 } },
      "galaxy s22": { screen: { min: 90, max: 150, base: 120 }, battery: { min: 30, max: 60, base: 45 }, water: { min: 110, max: 230, base: 170 }, charging: { min: 18, max: 40, base: 29 }, camera: { min: 45, max: 85, base: 65 }, software: { min: 20, max: 50, base: 35 } },
      // Samsung Galaxy Note series
      "galaxy note 20": { screen: { min: 80, max: 140, base: 110 }, battery: { min: 25, max: 50, base: 38 }, water: { min: 100, max: 200, base: 150 }, charging: { min: 15, max: 35, base: 25 }, camera: { min: 40, max: 80, base: 60 }, software: { min: 20, max: 50, base: 35 } },
      // Default Samsung pricing
      default: { screen: { min: 70, max: 180, base: 110 }, battery: { min: 35, max: 70, base: 55 }, water: { min: 90, max: 280, base: 140 }, charging: { min: 25, max: 55, base: 40 }, camera: { min: 50, max: 110, base: 80 }, software: { min: 20, max: 50, base: 35 } }
    },
    google: {
      "pixel 8 pro": { screen: { min: 120, max: 180, base: 150 }, battery: { min: 45, max: 75, base: 60 }, water: { min: 140, max: 280, base: 210 }, charging: { min: 25, max: 55, base: 40 }, camera: { min: 60, max: 110, base: 85 }, software: { min: 25, max: 55, base: 40 } },
      "pixel 8": { screen: { min: 100, max: 160, base: 130 }, battery: { min: 40, max: 70, base: 55 }, water: { min: 120, max: 250, base: 190 }, charging: { min: 20, max: 50, base: 35 }, camera: { min: 55, max: 100, base: 80 }, software: { min: 25, max: 55, base: 40 } },
      "pixel 7 pro": { screen: { min: 90, max: 150, base: 120 }, battery: { min: 35, max: 65, base: 50 }, water: { min: 110, max: 230, base: 170 }, charging: { min: 18, max: 45, base: 32 }, camera: { min: 50, max: 90, base: 70 }, software: { min: 20, max: 50, base: 35 } },
      "pixel 7": { screen: { min: 80, max: 140, base: 110 }, battery: { min: 30, max: 60, base: 45 }, water: { min: 100, max: 210, base: 160 }, charging: { min: 15, max: 40, base: 28 }, camera: { min: 45, max: 80, base: 65 }, software: { min: 20, max: 50, base: 35 } },
      "pixel 6 pro": { screen: { min: 70, max: 130, base: 100 }, battery: { min: 25, max: 50, base: 38 }, water: { min: 90, max: 190, base: 140 }, charging: { min: 12, max: 35, base: 24 }, camera: { min: 40, max: 75, base: 60 }, software: { min: 20, max: 50, base: 35 } },
      "pixel 6": { screen: { min: 60, max: 120, base: 90 }, battery: { min: 20, max: 45, base: 32 }, water: { min: 80, max: 170, base: 125 }, charging: { min: 10, max: 30, base: 20 }, camera: { min: 35, max: 70, base: 55 }, software: { min: 20, max: 50, base: 35 } },
      default: { screen: { min: 60, max: 160, base: 100 }, battery: { min: 30, max: 60, base: 45 }, water: { min: 80, max: 250, base: 130 }, charging: { min: 25, max: 50, base: 35 }, camera: { min: 45, max: 100, base: 75 }, software: { min: 20, max: 50, base: 35 } }
    },
    oneplus: {
      "oneplus 12": { screen: { min: 100, max: 160, base: 130 }, battery: { min: 40, max: 70, base: 55 }, water: { min: 120, max: 240, base: 180 }, charging: { min: 25, max: 50, base: 38 }, camera: { min: 55, max: 100, base: 80 }, software: { min: 25, max: 55, base: 40 } },
      "oneplus 11": { screen: { min: 90, max: 150, base: 120 }, battery: { min: 35, max: 65, base: 50 }, water: { min: 110, max: 220, base: 165 }, charging: { min: 22, max: 45, base: 34 }, camera: { min: 50, max: 90, base: 75 }, software: { min: 20, max: 50, base: 35 } },
      "oneplus 10 pro": { screen: { min: 80, max: 140, base: 110 }, battery: { min: 30, max: 60, base: 45 }, water: { min: 100, max: 200, base: 150 }, charging: { min: 20, max: 40, base: 30 }, camera: { min: 45, max: 85, base: 70 }, software: { min: 20, max: 50, base: 35 } },
      default: { screen: { min: 65, max: 170, base: 105 }, battery: { min: 32, max: 65, base: 50 }, water: { min: 85, max: 260, base: 135 }, charging: { min: 28, max: 52, base: 38 }, camera: { min: 48, max: 105, base: 78 }, software: { min: 20, max: 50, base: 35 } }
    },
    huawei: {
      "p60 pro": { screen: { min: 80, max: 140, base: 110 }, battery: { min: 30, max: 60, base: 45 }, water: { min: 100, max: 200, base: 150 }, charging: { min: 20, max: 40, base: 30 }, camera: { min: 45, max: 85, base: 70 }, software: { min: 20, max: 50, base: 35 } },
      "p50 pro": { screen: { min: 70, max: 130, base: 100 }, battery: { min: 25, max: 50, base: 38 }, water: { min: 90, max: 180, base: 135 }, charging: { min: 18, max: 35, base: 27 }, camera: { min: 40, max: 75, base: 60 }, software: { min: 20, max: 50, base: 35 } },
      "mate 50 pro": { screen: { min: 75, max: 135, base: 105 }, battery: { min: 28, max: 55, base: 42 }, water: { min: 95, max: 190, base: 140 }, charging: { min: 20, max: 38, base: 29 }, camera: { min: 42, max: 78, base: 62 }, software: { min: 20, max: 50, base: 35 } },
      default: { screen: { min: 55, max: 150, base: 95 }, battery: { min: 28, max: 58, base: 42 }, water: { min: 75, max: 240, base: 125 }, charging: { min: 22, max: 48, base: 32 }, camera: { min: 40, max: 95, base: 70 }, software: { min: 20, max: 50, base: 35 } }
    },
    other: {
      default: { screen: { min: 50, max: 140, base: 90 }, battery: { min: 25, max: 55, base: 40 }, water: { min: 70, max: 220, base: 120 }, charging: { min: 20, max: 45, base: 30 }, camera: { min: 35, max: 90, base: 65 }, software: { min: 20, max: 50, base: 35 } }
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

  costAmount.textContent = `$${price.base}`;

  let modelText = model ? ` for ${model}` : '';
  costDetails.textContent = `Estimated range: $${price.min} - $${price.max}${modelText}. Final price may vary based on specific model and damage extent.`;
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
