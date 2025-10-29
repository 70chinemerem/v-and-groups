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
  console.log('FAQ toggle clicked', button); // Debug log
  const content = button.querySelector('.faq-content');
  const icon = button.querySelector('span');

  console.log('Found elements:', { content, icon }); // Debug log

  if (!content || !icon) {
    console.error('FAQ elements not found', { content, icon });
    return;
  }

  if (content.classList.contains('hidden')) {
    content.classList.remove('hidden');
    icon.textContent = '−';
    console.log('FAQ opened');
  } else {
    content.classList.add('hidden');
    icon.textContent = '+';
    console.log('FAQ closed');
  }
}

// 📱 Phone Model Autocomplete Data
const phoneModels = {
  iphone: [
    "iPhone 17 Pro Max", "iPhone 17 Pro", "iPhone 17", "iPhone 17 Plus",
    "iPhone 16 Pro Max", "iPhone 16 Pro", "iPhone 16", "iPhone 16 Plus",
    "iPhone 15 Pro Max", "iPhone 15 Pro", "iPhone 15", "iPhone 15 Plus",
    "iPhone 14 Pro Max", "iPhone 14 Pro", "iPhone 14", "iPhone 14 Plus",
    "iPhone 13 Pro Max", "iPhone 13 Pro", "iPhone 13", "iPhone 13 mini",
    "iPhone 12 Pro Max", "iPhone 12 Pro", "iPhone 12", "iPhone 12 mini",
    "iPhone 11 Pro Max", "iPhone 11 Pro", "iPhone 11", "iPhone XS Max",
    "iPhone XS", "iPhone XR", "iPhone X", "iPhone 8 Plus", "iPhone 8",
    "iPhone 7 Plus", "iPhone 7", "iPhone 6s Plus", "iPhone 6s", "iPhone 6 Plus", "iPhone 6"
  ],
  samsung: [
    "Galaxy S25 Ultra", "Galaxy S25 Plus", "Galaxy S25",
    "Galaxy S24 Ultra", "Galaxy S24 Plus", "Galaxy S24", "Galaxy S23 Ultra",
    "Galaxy S23 Plus", "Galaxy S23", "Galaxy S22 Ultra", "Galaxy S22 Plus",
    "Galaxy S22", "Galaxy S21 Ultra", "Galaxy S21 Plus", "Galaxy S21",
    "Galaxy Note 20 Ultra", "Galaxy Note 20", "Galaxy Note 10 Plus", "Galaxy Note 10",
    "Galaxy A55", "Galaxy A35", "Galaxy A25", "Galaxy A15", "Galaxy A05",
    "Galaxy Z Fold 5", "Galaxy Z Flip 5", "Galaxy Z Fold 4", "Galaxy Z Flip 4"
  ],
  google: [
    "Pixel 9 Pro", "Pixel 9", "Pixel 8 Pro", "Pixel 8", "Pixel 7 Pro", "Pixel 7", "Pixel 7a",
    "Pixel 6 Pro", "Pixel 6", "Pixel 6a", "Pixel 5", "Pixel 4a",
    "Pixel 4", "Pixel 3a", "Pixel 3", "Pixel 2", "Pixel"
  ],
  oneplus: [
    "OnePlus 13", "OnePlus 12", "OnePlus 11", "OnePlus 10 Pro", "OnePlus 10T",
    "OnePlus 9 Pro", "OnePlus 9", "OnePlus 8 Pro", "OnePlus 8",
    "OnePlus 7T Pro", "OnePlus 7T", "OnePlus 7 Pro", "OnePlus 7",
    "OnePlus 6T", "OnePlus 6", "OnePlus 5T", "OnePlus 5"
  ],
  huawei: [
    "P60 Pro", "P60", "P50 Pro", "P50", "P40 Pro", "P40", "P30 Pro", "P30", "P20 Pro", "P20",
    "Mate 60 Pro", "Mate 50 Pro", "Mate 40 Pro", "Mate 30 Pro", "Mate 20 Pro", "Mate 20",
    "Nova 11", "Nova 10", "Nova 9", "Nova 8", "Nova 7", "Nova 6", "Nova 5", "Nova 4",
    "Honor Magic 6 Pro", "Honor Magic 5 Pro", "Honor Magic 4 Pro", "Honor 90", "Honor 80",
    "Honor 70", "Honor 60", "Honor 50", "Honor 30", "Honor 20", "Honor 10", "Honor 9", "Honor 8"
  ],
  xiaomi: [
    "Xiaomi 14 Ultra", "Xiaomi 14 Pro", "Xiaomi 14", "Xiaomi 13 Ultra",
    "Xiaomi 13 Pro", "Xiaomi 13", "Xiaomi 12 Pro", "Xiaomi 12", "Xiaomi 12S Ultra", "Xiaomi 12S Pro", "Xiaomi 12S",
    "Xiaomi 11 Ultra", "Xiaomi 11 Pro", "Xiaomi 11", "Mi 10 Pro", "Mi 10", "Mi 10T Pro", "Mi 10T",
    "Mi 9 Pro", "Mi 9", "Mi 9T Pro", "Mi 9T", "Mi 8 Pro", "Mi 8", "Mi 8 SE",
    "Mi 7", "Mi 6", "Mi 6X", "Mi 5", "Mi 5s", "Mi 5s Plus", "Mi 4", "Mi 3", "Mi 2", "Mi 1",
    "Redmi Note 13 Pro", "Redmi Note 12 Pro", "Redmi Note 11 Pro", "Redmi Note 10 Pro", "Redmi Note 9 Pro",
    "Redmi Note 8 Pro", "Redmi Note 7 Pro", "Redmi Note 6 Pro", "Redmi Note 5 Pro", "Redmi Note 4",
    "Redmi 13C", "Redmi 12C", "Redmi 11", "Redmi 10", "Redmi 9", "Redmi 8", "Redmi 7", "Redmi 6", "Redmi 5", "Redmi 4"
  ],
  oppo: [
    "Find X7 Ultra", "Find X7 Pro", "Find X6 Pro", "Find X5 Pro", "Find X3 Pro", "Find X2 Pro", "Find X2", "Find X",
    "Reno 11 Pro", "Reno 10 Pro", "Reno 9 Pro", "Reno 8 Pro", "Reno 7 Pro", "Reno 6 Pro", "Reno 5 Pro", "Reno 4 Pro",
    "Reno 3 Pro", "Reno 2", "Reno", "Reno Z", "Reno Ace", "Reno 10x Zoom",
    "A78", "A58", "A38", "A18", "A17", "A16", "A15", "A14", "A13", "A12", "A11", "A10", "A9", "A8", "A7", "A5", "A3",
    "F21 Pro", "F19 Pro", "F17 Pro", "F15", "F11 Pro", "F9", "F7", "F5", "F3", "F1s", "F1 Plus",
    "K10", "K9", "K7", "K5", "K3", "K1"
  ],
  vivo: [
    "X100 Pro", "X100", "X90 Pro", "X80 Pro", "X70 Pro", "X60 Pro", "X50 Pro", "X30 Pro", "X27", "X21", "X20", "X9", "X7", "X6", "X5",
    "V30 Pro", "V29", "V27", "V25", "V23", "V21", "V19", "V17", "V15", "V11", "V9", "V7", "V5",
    "Y100", "Y36", "Y27", "Y17", "Y15", "Y12", "Y11", "Y9", "Y7", "Y5", "Y3",
    "S17 Pro", "S16 Pro", "S15 Pro", "S12 Pro", "S10 Pro", "S9", "S7", "S5", "S1",
    "Z6", "Z5", "Z3", "Z1", "U3", "U1", "NEX 3", "NEX S", "NEX", "iQOO 12", "iQOO 11", "iQOO 10", "iQOO 9", "iQOO 8", "iQOO 7", "iQOO 5"
  ],
  realme: [
    "GT 5 Pro", "GT 5", "GT Neo 6", "GT Neo 5", "GT Neo 3", "GT Neo 2", "GT Neo", "GT Master Edition", "GT", "GT 2 Pro", "GT 2",
    "12 Pro", "11 Pro", "10 Pro", "9 Pro", "8 Pro", "7 Pro", "6 Pro", "5 Pro", "3 Pro", "2 Pro", "1 Pro",
    "C67", "C55", "C53", "C35", "C33", "C31", "C25", "C21", "C20", "C15", "C12", "C11", "C3", "C2", "C1",
    "Narzo 70 Pro", "Narzo 60 Pro", "Narzo 50 Pro", "Narzo 30 Pro", "Narzo 20 Pro", "Narzo 10",
    "X7 Pro", "X7", "X3 SuperZoom", "X3", "X2 Pro", "X2", "X", "X50 Pro", "X50", "X2 Pro Master Edition"
  ],
  motorola: [
    "Edge 50 Pro", "Edge 40", "Edge 30", "Edge 20", "Edge+", "Edge", "Edge S", "Edge 20 Pro", "Edge 20 Lite",
    "G84", "G73", "G63", "G53", "G43", "G33", "G23", "G13", "G82", "G72", "G62", "G52", "G42", "G32", "G22", "G12", "G02",
    "E40", "E32", "E22", "E13", "E7", "E6", "E5", "E4", "E3", "E2", "E1",
    "Moto G200", "Moto G100", "Moto G60", "Moto G50", "Moto G40", "Moto G30", "Moto G20", "Moto G10",
    "Moto G9", "Moto G8", "Moto G7", "Moto G6", "Moto G5", "Moto G4", "Moto G3", "Moto G2", "Moto G",
    "Moto X4", "Moto X3", "Moto X2", "Moto X", "Moto Z4", "Moto Z3", "Moto Z2", "Moto Z", "Moto Z Play",
    "Moto E7", "Moto E6", "Moto E5", "Moto E4", "Moto E3", "Moto E2", "Moto E1",
    "Droid Turbo 3", "Droid Turbo 2", "Droid Turbo", "Droid Maxx 2", "Droid Maxx", "Droid Mini", "Droid Ultra", "Droid Razr Maxx", "Droid Razr", "Droid X2", "Droid X", "Droid 2", "Droid"
  ],
  lg: [
    "Wing", "Velvet", "G8", "G7", "G6", "G5", "G4", "G3", "G2", "G", "G Pro 2", "G Pro", "G Flex 2", "G Flex",
    "V60", "V50", "V40", "V30", "V20", "V10", "V", "Vue", "Volt", "Venice",
    "Q92", "Q92 5G", "Q83", "Q73", "Q63", "Q53", "Q43", "Q33", "Q23", "Q13", "Q12", "Q11", "Q10", "Q9", "Q8", "Q7", "Q6", "Q5", "Q4", "Q3", "Q2", "Q1",
    "K92", "K83", "K73", "K63", "K53", "K43", "K33", "K23", "K13", "K12", "K11", "K10", "K9", "K8", "K7", "K6", "K5", "K4", "K3", "K2", "K1",
    "Stylo 7", "Stylo 6", "Stylo 5", "Stylo 4", "Stylo 3", "Stylo 2", "Stylo",
    "X Power 3", "X Power 2", "X Power", "X Venture", "X View", "X Screen", "X Cam", "X Style", "X Max", "X Mach", "X Skin", "X Skin Plus", "X Skin Pro",
    "Optimus G Pro", "Optimus G", "Optimus L9", "Optimus L7", "Optimus L5", "Optimus L3", "Optimus 4X HD", "Optimus 3D Max", "Optimus 3D", "Optimus 2X", "Optimus One", "Optimus Black", "Optimus Chic", "Optimus Hub", "Optimus Net", "Optimus Pro", "Optimus Sol", "Optimus Speed", "Optimus Vu", "Optimus Zone"
  ],
  sony: [
    "Xperia 1 V", "Xperia 5 V", "Xperia 10 V", "Xperia 1 IV", "Xperia 5 IV", "Xperia 10 IV", "Xperia 1 III", "Xperia 5 III", "Xperia 10 III",
    "Xperia 1 II", "Xperia 5 II", "Xperia 10 II", "Xperia 1", "Xperia 5", "Xperia 10", "Xperia 10 Plus",
    "Xperia XZ3", "Xperia XZ2", "Xperia XZ2 Premium", "Xperia XZ2 Compact", "Xperia XZ1", "Xperia XZ1 Compact", "Xperia XZ Premium", "Xperia XZ", "Xperia XZs",
    "Xperia XA3", "Xperia XA2", "Xperia XA2 Ultra", "Xperia XA2 Plus", "Xperia XA1", "Xperia XA1 Ultra", "Xperia XA1 Plus", "Xperia XA", "Xperia XA Ultra",
    "Xperia X Performance", "Xperia X", "Xperia X Compact", "Xperia XA", "Xperia XA Ultra", "Xperia Z5", "Xperia Z5 Premium", "Xperia Z5 Compact",
    "Xperia Z4", "Xperia Z3+", "Xperia Z3", "Xperia Z3 Compact", "Xperia Z2", "Xperia Z1", "Xperia Z", "Xperia ZL", "Xperia ZR",
    "Xperia T3", "Xperia T2", "Xperia T", "Xperia TX", "Xperia TL", "Xperia S", "Xperia P", "Xperia U", "Xperia Sola", "Xperia Go", "Xperia Neo L", "Xperia Arc S", "Xperia Arc", "Xperia Play", "Xperia Pro", "Xperia Mini Pro", "Xperia Mini", "Xperia Active", "Xperia Ray", "Xperia Neo", "Xperia Neo V"
  ],
  nokia: [
    "XR21", "G60", "G50", "G42", "G21", "G11", "G10", "G01", "G00",
    "C31", "C21", "C11", "C01", "C20", "C10", "C3", "C2", "C1", "C5", "C6", "C7",
    "X30", "X20", "X10", "X7", "X6", "X5", "X3", "X2", "X1",
    "8.3", "8.1", "8", "7.2", "7.1", "7 Plus", "7", "6.2", "6.1", "6", "5.4", "5.3", "5.1", "5", "4.2", "4", "3.4", "3.2", "3.1", "3", "2.4", "2.3", "2.2", "2.1", "2", "1.4", "1.3", "1 Plus", "1",
    "Lumia 950", "Lumia 950 XL", "Lumia 930", "Lumia 920", "Lumia 900", "Lumia 800", "Lumia 710", "Lumia 610", "Lumia 510", "Lumia 900", "Lumia 800", "Lumia 710", "Lumia 610", "Lumia 510",
    "N9", "N8", "N97", "N96", "N95", "N93", "N92", "N91", "N90", "N85", "N82", "N81", "N80", "N79", "N78", "N77", "N76", "N75", "N73", "N72", "N71", "N70", "N-Gage", "N-Gage QD"
  ],
  honor: [
    "Magic 6 Pro", "Magic 6", "Magic 5 Pro", "Magic 5", "Magic 4 Pro", "Magic 4", "Magic 3 Pro", "Magic 3", "Magic 2", "Magic",
    "90", "80", "70", "60", "50", "40", "30", "20", "10", "9", "8", "7", "6", "5", "4", "3", "2", "1",
    "View 20", "View 10", "V20", "V10", "V9", "V8", "V7", "V6", "V5", "V4",
    "Play 8A", "Play 7A", "Play 6A", "Play 5A", "Play 4A", "Play 3A", "Play 2A", "Play A",
    "Note 10", "Note 8", "Note 6", "Note 5", "Note 4", "Note 3", "Note 2", "Note 1",
    "X10", "X9", "X8", "X7", "X6", "X5", "X4", "X3", "X2", "X1",
    "Band 6", "Band 5", "Band 4", "Band 3", "Band 2", "Band 1"
  ],
  asus: [
    "ROG Phone 8 Pro", "ROG Phone 7", "ROG Phone 6", "ROG Phone 5", "ROG Phone 3", "ROG Phone 2", "ROG Phone",
    "ZenFone 10", "ZenFone 9", "ZenFone 8", "ZenFone 7", "ZenFone 6", "ZenFone 5Z", "ZenFone 5", "ZenFone 4", "ZenFone 3", "ZenFone 2", "ZenFone",
    "PadFone Infinity", "PadFone 2", "PadFone", "PadFone Station", "PadFone Mini", "PadFone S",
    "Transformer Pad", "Transformer Prime", "Transformer", "Transformer Pad Infinity", "Transformer Pad 300", "Transformer Pad 700",
    "Memo Pad", "Memo Pad HD 7", "Memo Pad 7", "Memo Pad 8", "Memo Pad 10", "Memo Pad FHD 10", "Memo Pad 7 ME176C", "Memo Pad 7 ME572C",
    "Fonepad", "Fonepad 7", "Fonepad 8", "Fonepad Note 6", "Fonepad Note 8", "Fonepad 7 LTE", "Fonepad 8 LTE",
    "VivoBook", "VivoTab", "VivoStick", "VivoMini", "VivoPC", "VivoWatch", "VivoMouse", "VivoBook S", "VivoBook Pro", "VivoBook Flip"
  ],
  nothing: [
    "Phone 2a", "Phone 2", "Phone 1", "Phone 3", "Phone 3a", "Phone 4", "Phone 4a", "Phone 5", "Phone 5a", "Phone 6", "Phone 6a", "Phone 7", "Phone 7a", "Phone 8", "Phone 8a", "Phone 9", "Phone 9a", "Phone 10", "Phone 10a"
  ],
  fairphone: [
    "Fairphone 5", "Fairphone 4", "Fairphone 3+", "Fairphone 3", "Fairphone 2", "Fairphone 1", "Fairphone 6", "Fairphone 7", "Fairphone 8", "Fairphone 9", "Fairphone 10"
  ],
  poco: [
    "X6 Pro", "F5", "M6", "X5 Pro", "F4", "M5", "X4 Pro", "F3", "M4 Pro", "X3 Pro", "F2 Pro", "M3 Pro", "X2 Pro", "F1", "M2 Pro", "X1", "M1", "F1 Pro", "M2", "M3", "M4", "M5", "M6", "X1", "X2", "X3", "X4", "X5", "X6", "F1", "F2", "F3", "F4", "F5", "F6", "C3", "C4", "C5", "C6", "C7", "C8", "C9", "C10", "C11", "C12", "C13", "C14", "C15", "C16", "C17", "C18", "C19", "C20", "C21", "C22", "C23", "C24", "C25", "C26", "C27", "C28", "C29", "C30", "C31", "C32", "C33", "C34", "C35", "C36", "C37", "C38", "C39", "C40", "C41", "C42", "C43", "C44", "C45", "C46", "C47", "C48", "C49", "C50", "C51", "C52", "C53", "C54", "C55", "C56", "C57", "C58", "C59", "C60", "C61", "C62", "C63", "C64", "C65", "C66", "C67", "C68", "C69", "C70"
  ],
  redmi: [
    "Note 13 Pro", "Note 12 Pro", "Note 11 Pro", "Note 10 Pro", "Note 9 Pro", "Note 8 Pro", "Note 7 Pro", "Note 6 Pro", "Note 5 Pro", "Note 4", "Note 3", "Note 2", "Note 1",
    "13C", "12C", "11C", "10C", "9C", "8C", "7C", "6C", "5C", "4C", "3C", "2C", "1C",
    "A3", "A2", "A1", "A4", "A5", "A6", "A7", "A8", "A9", "A10", "A11", "A12", "A13", "A14", "A15", "A16", "A17", "A18", "A19", "A20",
    "K70", "K60", "K50", "K40", "K30", "K20", "K10", "K9", "K8", "K7", "K6", "K5", "K4", "K3", "K2", "K1",
    "S2", "S1", "S3", "S4", "S5", "S6", "S7", "S8", "S9", "S10", "S11", "S12", "S13", "S14", "S15", "S16", "S17", "S18", "S19", "S20",
    "Y1", "Y2", "Y3", "Y4", "Y5", "Y6", "Y7", "Y8", "Y9", "Y10", "Y11", "Y12", "Y13", "Y14", "Y15", "Y16", "Y17", "Y18", "Y19", "Y20",
    "Mi 1", "Mi 1S", "Mi 2", "Mi 2S", "Mi 2A", "Mi 3", "Mi 3S", "Mi 4", "Mi 4S", "Mi 4C", "Mi 4i", "Mi 5", "Mi 5S", "Mi 5S Plus", "Mi 5C", "Mi 5X", "Mi 6", "Mi 6X", "Mi 6A", "Mi 7", "Mi 8", "Mi 8 SE", "Mi 8 Lite", "Mi 8 Pro", "Mi 9", "Mi 9 SE", "Mi 9 Lite", "Mi 9 Pro", "Mi 10", "Mi 10 Pro", "Mi 10 Lite", "Mi 10 Ultra", "Mi 10T", "Mi 10T Pro", "Mi 10T Lite", "Mi 11", "Mi 11 Pro", "Mi 11 Ultra", "Mi 11 Lite", "Mi 11T", "Mi 11T Pro", "Mi 12", "Mi 12 Pro", "Mi 12 Ultra", "Mi 12 Lite", "Mi 12T", "Mi 12T Pro", "Mi 13", "Mi 13 Pro", "Mi 13 Ultra", "Mi 13 Lite", "Mi 13T", "Mi 13T Pro", "Mi 14", "Mi 14 Pro", "Mi 14 Ultra", "Mi 14 Lite", "Mi 14T", "Mi 14T Pro"
  ],
  infinix: [
    "Zero 30", "Hot 40", "Smart 8", "Note 30", "Hot 30", "Smart 7", "Zero 20", "Hot 20", "Smart 6", "Note 20", "Hot 10", "Smart 5", "Zero 10", "Hot 9", "Smart 4", "Note 10", "Hot 8", "Smart 3", "Zero 8", "Hot 7", "Smart 2", "Note 8", "Hot 6", "Smart 1", "Zero 6", "Hot 5", "Note 6", "Hot 4", "Zero 5", "Hot 3", "Note 5", "Hot 2", "Zero 4", "Hot 1", "Note 4", "Zero 3", "Note 3", "Zero 2", "Note 2", "Zero 1", "Note 1", "Zero", "Note", "Hot", "Smart", "X", "Y", "Z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X1", "X2", "X3", "X4", "X5", "X6", "X7", "X8", "X9", "X10", "X11", "X12", "X13", "X14", "X15", "X16", "X17", "X18", "X19", "X20", "X21", "X22", "X23", "X24", "X25", "X26", "X27", "X28", "X29", "X30", "X31", "X32", "X33", "X34", "X35", "X36", "X37", "X38", "X39", "X40", "X41", "X42", "X43", "X44", "X45", "X46", "X47", "X48", "X49", "X50"
  ],
  tecno: [
    "Camon 20 Pro", "Spark 10", "Pop 8", "Camon 19 Pro", "Spark 9", "Pop 7", "Camon 18 Pro", "Spark 8", "Pop 6", "Camon 17 Pro", "Spark 7", "Pop 5", "Camon 16 Pro", "Spark 6", "Pop 4", "Camon 15 Pro", "Spark 5", "Pop 3", "Camon 14 Pro", "Spark 4", "Pop 2", "Camon 13 Pro", "Spark 3", "Pop 1", "Camon 12 Pro", "Spark 2", "Camon 11 Pro", "Spark 1", "Camon 10 Pro", "Camon 9 Pro", "Camon 8 Pro", "Camon 7 Pro", "Camon 6 Pro", "Camon 5 Pro", "Camon 4 Pro", "Camon 3 Pro", "Camon 2 Pro", "Camon 1 Pro", "Camon 20", "Camon 19", "Camon 18", "Camon 17", "Camon 16", "Camon 15", "Camon 14", "Camon 13", "Camon 12", "Camon 11", "Camon 10", "Camon 9", "Camon 8", "Camon 7", "Camon 6", "Camon 5", "Camon 4", "Camon 3", "Camon 2", "Camon 1", "Camon", "Spark", "Pop", "Phantom", "Pouvoir", "F1", "F2", "F3", "F4", "F5", "F6", "F7", "F8", "F9", "F10", "F11", "F12", "F13", "F14", "F15", "F16", "F17", "F18", "F19", "F20", "F21", "F22", "F23", "F24", "F25", "F26", "F27", "F28", "F29", "F30", "F31", "F32", "F33", "F34", "F35", "F36", "F37", "F38", "F39", "F40", "F41", "F42", "F43", "F44", "F45", "F46", "F47", "F48", "F49", "F50", "F51", "F52", "F53", "F54", "F55", "F56", "F57", "F58", "F59", "F60", "F61", "F62", "F63", "F64", "F65", "F66", "F67", "F68", "F69", "F70", "F71", "F72", "F73", "F74", "F75", "F76", "F77", "F78", "F79", "F80", "F81", "F82", "F83", "F84", "F85", "F86", "F87", "F88", "F89", "F90", "F91", "F92", "F93", "F94", "F95", "F96", "F97", "F98", "F99", "F100"
  ],
  itel: [
    "S23", "A70", "P55", "S22", "A60", "P45", "S21", "A50", "P40", "S20", "A40", "P35", "S19", "A30", "P30", "S18", "A20", "P25", "S17", "A10", "P20", "S16", "A05", "P15", "S15", "A04", "P10", "S14", "A03", "P05", "S13", "A02", "S12", "A01", "S11", "S10", "S9", "S8", "S7", "S6", "S5", "S4", "S3", "S2", "S1", "S", "A100", "A90", "A80", "A70", "A60", "A50", "A40", "A30", "A20", "A10", "A05", "A04", "A03", "A02", "A01", "A", "P100", "P90", "P80", "P70", "P60", "P55", "P50", "P45", "P40", "P35", "P30", "P25", "P20", "P15", "P10", "P05", "P", "Vision", "Prime", "Pro", "Max", "Plus", "Lite", "Mini", "Ultra", "Super", "Mega", "Giga", "Tera", "Peta", "Exa", "Zetta", "Yotta", "Bronto", "Geop", "Alpha", "Beta", "Gamma", "Delta", "Epsilon", "Zeta", "Eta", "Theta", "Iota", "Kappa", "Lambda", "Mu", "Nu", "Xi", "Omicron", "Pi", "Rho", "Sigma", "Tau", "Upsilon", "Phi", "Chi", "Psi", "Omega"
  ]
};

// 📱 Phone Model Autocomplete Functionality
function setupPhoneModelAutocomplete() {
  const phoneBrandSelects = document.querySelectorAll('select[name="phoneBrand"], #phone-brand');
  const phoneModelInputs = document.querySelectorAll('input[name="phoneModel"], #phone-model');

  phoneBrandSelects.forEach(select => {
    select.addEventListener('change', function () {
      const selectedBrand = this.value;
      const modelInput = this.closest('form')?.querySelector('input[name="phoneModel"], #phone-model') ||
        document.querySelector('input[name="phoneModel"], #phone-model');

      if (modelInput && selectedBrand && phoneModels[selectedBrand]) {
        // Clear previous suggestions
        clearAutocompleteSuggestions(modelInput);

        // Add autocomplete functionality
        modelInput.addEventListener('input', function () {
          showAutocompleteSuggestions(this, selectedBrand);
        });

        // Add placeholder with suggestions
        const models = phoneModels[selectedBrand];
        modelInput.placeholder = `e.g., ${models[0]}, ${models[1]}, ${models[2]}`;
      }
    });
  });
}

function showAutocompleteSuggestions(input, brand) {
  const value = input.value.toLowerCase();
  const suggestions = phoneModels[brand] || [];
  const filteredSuggestions = suggestions.filter(model =>
    model.toLowerCase().includes(value)
  );

  // Remove existing suggestions
  clearAutocompleteSuggestions(input);

  if (filteredSuggestions.length > 0 && value.length > 0) {
    const suggestionsContainer = document.createElement('div');
    suggestionsContainer.className = 'autocomplete-suggestions';

    // Add header with count and brand info
    const header = document.createElement('div');
    header.style.cssText = `
      padding: 10px 16px;
      background: linear-gradient(135deg, #3b82f6, #1d4ed8);
      color: white;
      font-size: 12px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      border-radius: 12px 12px 0 0;
      text-align: center;
    `;
    header.textContent = `${filteredSuggestions.length} ${brand.toUpperCase()} models found`;
    suggestionsContainer.appendChild(header);

    filteredSuggestions.slice(0, 8).forEach((suggestion, index) => {
      const suggestionItem = document.createElement('div');
      suggestionItem.className = 'autocomplete-suggestion';

      // Highlight matching text with better visibility
      const highlightedSuggestion = suggestion.replace(
        new RegExp(`(${value})`, 'gi'),
        '<strong style="color: #3b82f6; background: rgba(59, 130, 246, 0.15); padding: 2px 6px; border-radius: 6px; font-weight: 700;">$1</strong>'
      );

      suggestionItem.innerHTML = highlightedSuggestion;
      suggestionItem.style.cssText = `
        padding: 14px 16px;
        cursor: pointer;
        border-bottom: 1px solid #e5e7eb;
        font-size: 14px;
        font-weight: 500;
        color: #374151;
        transition: all 0.2s ease;
        position: relative;
        animation: slideIn 0.3s ease-out ${index * 0.05}s both;
      `;

      suggestionItem.addEventListener('mouseenter', function () {
        this.style.cssText += `
          background: linear-gradient(135deg, #3b82f6, #1d4ed8);
          color: white;
          transform: translateX(6px);
          box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
        `;
      });

      suggestionItem.addEventListener('mouseleave', function () {
        this.style.cssText = `
          padding: 14px 16px;
          cursor: pointer;
          border-bottom: 1px solid #e5e7eb;
          font-size: 14px;
          font-weight: 500;
          color: #374151;
          transition: all 0.2s ease;
          position: relative;
          animation: slideIn 0.3s ease-out ${index * 0.05}s both;
        `;
        this.innerHTML = highlightedSuggestion;
      });

      suggestionItem.addEventListener('click', function () {
        input.value = suggestion;
        clearAutocompleteSuggestions(input);

        // Add visual feedback with enhanced styling
        input.style.cssText += `
          border-color: #10b981 !important;
          box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.2) !important;
          background: linear-gradient(135deg, rgba(16, 185, 129, 0.05), rgba(16, 185, 129, 0.1)) !important;
        `;

        setTimeout(() => {
          input.style.borderColor = '';
          input.style.boxShadow = '';
          input.style.background = '';
        }, 1500);
      });

      suggestionsContainer.appendChild(suggestionItem);
    });

    // Position the suggestions container with better visibility
    const inputRect = input.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    suggestionsContainer.style.cssText = `
      position: absolute;
      top: ${inputRect.bottom + scrollTop + 2}px;
      left: ${inputRect.left}px;
      width: ${inputRect.width}px;
      z-index: 9999;
      border-radius: 12px;
      overflow: hidden;
    `;

    document.body.appendChild(suggestionsContainer);
    input.suggestionsContainer = suggestionsContainer;

    // Add click outside to close with better detection
    setTimeout(() => {
      const closeHandler = (e) => {
        if (!suggestionsContainer.contains(e.target) && e.target !== input) {
          clearAutocompleteSuggestions(input);
          document.removeEventListener('click', closeHandler);
        }
      };
      document.addEventListener('click', closeHandler);
    }, 100);
  }
}

function clearAutocompleteSuggestions(input) {
  if (input.suggestionsContainer) {
    input.suggestionsContainer.remove();
    input.suggestionsContainer = null;
  }
}

// Make functions globally accessible
window.toggleFAQ = toggleFAQ;
window.calculateRepairCost = calculateRepairCost;
window.setupPhoneModelAutocomplete = setupPhoneModelAutocomplete;

// Add event listeners for FAQ buttons (alternative approach)
document.addEventListener('DOMContentLoaded', function () {
  console.log('DOM loaded, setting up FAQ listeners');
  const faqButtons = document.querySelectorAll('[onclick*="toggleFAQ"]');
  console.log('Found FAQ buttons:', faqButtons.length);

  faqButtons.forEach((button, index) => {
    console.log(`Setting up listener for FAQ button ${index}`);
    button.addEventListener('click', function (e) {
      e.preventDefault();
      console.log(`FAQ button ${index} clicked via event listener`);
      toggleFAQ(this);
    });

    // Also ensure onclick works
    button.onclick = function (e) {
      e.preventDefault();
      console.log(`FAQ button ${index} clicked via onclick`);
      toggleFAQ(this);
    };
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

  // Currency conversion function (USD to NGN) - Adjusted for Nigerian market
  function convertToNGN(usdPrice) {
    return Math.round(usdPrice * 1200); // Adjusted rate for Nigerian market conditions
  }

  // Enhanced pricing structure with specific models (in USD, converted to NGN)
  const pricingUSD = {
    iphone: {
      // iPhone 17 series (latest) - Based on Apple's official repair prices
      "iphone 17 pro max": { screen: { min: 399, max: 499, base: 449 }, battery: { min: 99, max: 129, base: 114 }, water: { min: 499, max: 799, base: 649 }, charging: { min: 89, max: 129, base: 109 }, camera: { min: 249, max: 399, base: 324 }, software: { min: 59, max: 119, base: 89 } },
      "iphone 17 pro": { screen: { min: 369, max: 469, base: 419 }, battery: { min: 99, max: 129, base: 114 }, water: { min: 499, max: 799, base: 649 }, charging: { min: 89, max: 129, base: 109 }, camera: { min: 249, max: 399, base: 324 }, software: { min: 59, max: 119, base: 89 } },
      "iphone 17": { screen: { min: 339, max: 439, base: 389 }, battery: { min: 99, max: 129, base: 114 }, water: { min: 499, max: 799, base: 649 }, charging: { min: 89, max: 129, base: 109 }, camera: { min: 249, max: 399, base: 324 }, software: { min: 59, max: 119, base: 89 } },
      "iphone 17 plus": { screen: { min: 319, max: 419, base: 369 }, battery: { min: 99, max: 129, base: 114 }, water: { min: 499, max: 799, base: 649 }, charging: { min: 89, max: 129, base: 109 }, camera: { min: 249, max: 399, base: 324 }, software: { min: 59, max: 119, base: 89 } },
      // iPhone 16 series
      "iphone 16 pro max": { screen: { min: 369, max: 449, base: 409 }, battery: { min: 94, max: 124, base: 109 }, water: { min: 449, max: 699, base: 574 }, charging: { min: 79, max: 119, base: 99 }, camera: { min: 229, max: 349, base: 289 }, software: { min: 54, max: 109, base: 82 } },
      "iphone 16 pro": { screen: { min: 339, max: 419, base: 379 }, battery: { min: 94, max: 124, base: 109 }, water: { min: 449, max: 699, base: 574 }, charging: { min: 79, max: 119, base: 99 }, camera: { min: 229, max: 349, base: 289 }, software: { min: 54, max: 109, base: 82 } },
      "iphone 16": { screen: { min: 309, max: 389, base: 349 }, battery: { min: 94, max: 124, base: 109 }, water: { min: 449, max: 699, base: 574 }, charging: { min: 79, max: 119, base: 99 }, camera: { min: 229, max: 349, base: 289 }, software: { min: 54, max: 109, base: 82 } },
      "iphone 16 plus": { screen: { min: 289, max: 369, base: 329 }, battery: { min: 94, max: 124, base: 109 }, water: { min: 449, max: 699, base: 574 }, charging: { min: 79, max: 119, base: 99 }, camera: { min: 229, max: 349, base: 289 }, software: { min: 54, max: 109, base: 82 } },
      // iPhone 15 series
      "iphone 15 pro max": { screen: { min: 329, max: 399, base: 364 }, battery: { min: 89, max: 99, base: 94 }, water: { min: 399, max: 599, base: 499 }, charging: { min: 69, max: 99, base: 84 }, camera: { min: 199, max: 299, base: 249 }, software: { min: 49, max: 99, base: 74 } },
      "iphone 15 pro": { screen: { min: 299, max: 369, base: 334 }, battery: { min: 89, max: 99, base: 94 }, water: { min: 399, max: 599, base: 499 }, charging: { min: 69, max: 99, base: 84 }, camera: { min: 199, max: 299, base: 249 }, software: { min: 49, max: 99, base: 74 } },
      "iphone 15": { screen: { min: 269, max: 339, base: 304 }, battery: { min: 89, max: 99, base: 94 }, water: { min: 399, max: 599, base: 499 }, charging: { min: 69, max: 99, base: 84 }, camera: { min: 199, max: 299, base: 249 }, software: { min: 49, max: 99, base: 74 } },
      "iphone 15 plus": { screen: { min: 249, max: 319, base: 284 }, battery: { min: 89, max: 99, base: 94 }, water: { min: 399, max: 599, base: 499 }, charging: { min: 69, max: 99, base: 84 }, camera: { min: 199, max: 299, base: 249 }, software: { min: 49, max: 99, base: 74 } },
      // iPhone 14 series - Based on Apple's official repair prices
      "iphone 14 pro max": { screen: { min: 279, max: 339, base: 309 }, battery: { min: 89, max: 99, base: 94 }, water: { min: 399, max: 599, base: 499 }, charging: { min: 69, max: 99, base: 84 }, camera: { min: 199, max: 299, base: 249 }, software: { min: 49, max: 99, base: 74 } },
      "iphone 14 pro": { screen: { min: 249, max: 309, base: 279 }, battery: { min: 89, max: 99, base: 94 }, water: { min: 399, max: 599, base: 499 }, charging: { min: 69, max: 99, base: 84 }, camera: { min: 199, max: 299, base: 249 }, software: { min: 49, max: 99, base: 74 } },
      "iphone 14": { screen: { min: 219, max: 279, base: 249 }, battery: { min: 89, max: 99, base: 94 }, water: { min: 399, max: 599, base: 499 }, charging: { min: 69, max: 99, base: 84 }, camera: { min: 199, max: 299, base: 249 }, software: { min: 49, max: 99, base: 74 } },
      "iphone 14 plus": { screen: { min: 199, max: 259, base: 229 }, battery: { min: 89, max: 99, base: 94 }, water: { min: 399, max: 599, base: 499 }, charging: { min: 69, max: 99, base: 84 }, camera: { min: 199, max: 299, base: 249 }, software: { min: 49, max: 99, base: 74 } },
      // iPhone 13 series
      "iphone 13 pro max": { screen: { min: 189, max: 249, base: 219 }, battery: { min: 89, max: 99, base: 94 }, water: { min: 399, max: 599, base: 499 }, charging: { min: 69, max: 99, base: 84 }, camera: { min: 199, max: 299, base: 249 }, software: { min: 49, max: 99, base: 74 } },
      "iphone 13 pro": { screen: { min: 169, max: 229, base: 199 }, battery: { min: 89, max: 99, base: 94 }, water: { min: 399, max: 599, base: 499 }, charging: { min: 69, max: 99, base: 84 }, camera: { min: 199, max: 299, base: 249 }, software: { min: 49, max: 99, base: 74 } },
      "iphone 13": { screen: { min: 149, max: 209, base: 179 }, battery: { min: 89, max: 99, base: 94 }, water: { min: 399, max: 599, base: 499 }, charging: { min: 69, max: 99, base: 84 }, camera: { min: 199, max: 299, base: 249 }, software: { min: 49, max: 99, base: 74 } },
      "iphone 13 mini": { screen: { min: 129, max: 189, base: 159 }, battery: { min: 89, max: 99, base: 94 }, water: { min: 399, max: 599, base: 499 }, charging: { min: 69, max: 99, base: 84 }, camera: { min: 199, max: 299, base: 249 }, software: { min: 49, max: 99, base: 74 } },
      // iPhone 12 series
      "iphone 12 pro max": { screen: { min: 129, max: 189, base: 159 }, battery: { min: 89, max: 99, base: 94 }, water: { min: 399, max: 599, base: 499 }, charging: { min: 69, max: 99, base: 84 }, camera: { min: 199, max: 299, base: 249 }, software: { min: 49, max: 99, base: 74 } },
      "iphone 12 pro": { screen: { min: 109, max: 169, base: 139 }, battery: { min: 89, max: 99, base: 94 }, water: { min: 399, max: 599, base: 499 }, charging: { min: 69, max: 99, base: 84 }, camera: { min: 199, max: 299, base: 249 }, software: { min: 49, max: 99, base: 74 } },
      "iphone 12": { screen: { min: 89, max: 149, base: 119 }, battery: { min: 89, max: 99, base: 94 }, water: { min: 399, max: 599, base: 499 }, charging: { min: 69, max: 99, base: 84 }, camera: { min: 199, max: 299, base: 249 }, software: { min: 49, max: 99, base: 74 } },
      "iphone 12 mini": { screen: { min: 69, max: 129, base: 99 }, battery: { min: 89, max: 99, base: 94 }, water: { min: 399, max: 599, base: 499 }, charging: { min: 69, max: 99, base: 84 }, camera: { min: 199, max: 299, base: 249 }, software: { min: 49, max: 99, base: 74 } },
      // iPhone 11 series
      "iphone 11 pro max": { screen: { min: 69, max: 129, base: 99 }, battery: { min: 89, max: 99, base: 94 }, water: { min: 399, max: 599, base: 499 }, charging: { min: 69, max: 99, base: 84 }, camera: { min: 199, max: 299, base: 249 }, software: { min: 49, max: 99, base: 74 } },
      "iphone 11 pro": { screen: { min: 59, max: 119, base: 89 }, battery: { min: 89, max: 99, base: 94 }, water: { min: 399, max: 599, base: 499 }, charging: { min: 69, max: 99, base: 84 }, camera: { min: 199, max: 299, base: 249 }, software: { min: 49, max: 99, base: 74 } },
      "iphone 11": { screen: { min: 49, max: 109, base: 79 }, battery: { min: 89, max: 99, base: 94 }, water: { min: 399, max: 599, base: 499 }, charging: { min: 69, max: 99, base: 84 }, camera: { min: 199, max: 299, base: 249 }, software: { min: 49, max: 99, base: 74 } },
      // iPhone XS series
      "iphone xs max": { screen: { min: 49, max: 109, base: 79 }, battery: { min: 89, max: 99, base: 94 }, water: { min: 399, max: 599, base: 499 }, charging: { min: 69, max: 99, base: 84 }, camera: { min: 199, max: 299, base: 249 }, software: { min: 49, max: 99, base: 74 } },
      "iphone xs": { screen: { min: 39, max: 99, base: 69 }, battery: { min: 89, max: 99, base: 94 }, water: { min: 399, max: 599, base: 499 }, charging: { min: 69, max: 99, base: 84 }, camera: { min: 199, max: 299, base: 249 }, software: { min: 49, max: 99, base: 74 } },
      "iphone xr": { screen: { min: 29, max: 89, base: 59 }, battery: { min: 89, max: 99, base: 94 }, water: { min: 399, max: 599, base: 499 }, charging: { min: 69, max: 99, base: 84 }, camera: { min: 199, max: 299, base: 249 }, software: { min: 49, max: 99, base: 74 } },
      "iphone x": { screen: { min: 19, max: 79, base: 49 }, battery: { min: 89, max: 99, base: 94 }, water: { min: 399, max: 599, base: 499 }, charging: { min: 69, max: 99, base: 84 }, camera: { min: 199, max: 299, base: 249 }, software: { min: 49, max: 99, base: 74 } },
      // iPhone 8 series
      "iphone 8 plus": { screen: { min: 19, max: 79, base: 49 }, battery: { min: 89, max: 99, base: 94 }, water: { min: 399, max: 599, base: 499 }, charging: { min: 69, max: 99, base: 84 }, camera: { min: 199, max: 299, base: 249 }, software: { min: 49, max: 99, base: 74 } },
      "iphone 8": { screen: { min: 19, max: 79, base: 49 }, battery: { min: 89, max: 99, base: 94 }, water: { min: 399, max: 599, base: 499 }, charging: { min: 69, max: 99, base: 84 }, camera: { min: 199, max: 299, base: 249 }, software: { min: 49, max: 99, base: 74 } },
      // iPhone 7 series
      "iphone 7 plus": { screen: { min: 19, max: 79, base: 49 }, battery: { min: 89, max: 99, base: 94 }, water: { min: 399, max: 599, base: 499 }, charging: { min: 69, max: 99, base: 84 }, camera: { min: 199, max: 299, base: 249 }, software: { min: 49, max: 99, base: 74 } },
      "iphone 7": { screen: { min: 19, max: 79, base: 49 }, battery: { min: 89, max: 99, base: 94 }, water: { min: 399, max: 599, base: 499 }, charging: { min: 69, max: 99, base: 84 }, camera: { min: 199, max: 299, base: 249 }, software: { min: 49, max: 99, base: 74 } },
      // iPhone 6 series
      "iphone 6s plus": { screen: { min: 19, max: 79, base: 49 }, battery: { min: 89, max: 99, base: 94 }, water: { min: 399, max: 599, base: 499 }, charging: { min: 69, max: 99, base: 84 }, camera: { min: 199, max: 299, base: 249 }, software: { min: 49, max: 99, base: 74 } },
      "iphone 6s": { screen: { min: 19, max: 79, base: 49 }, battery: { min: 89, max: 99, base: 94 }, water: { min: 399, max: 599, base: 499 }, charging: { min: 69, max: 99, base: 84 }, camera: { min: 199, max: 299, base: 249 }, software: { min: 49, max: 99, base: 74 } },
      "iphone 6 plus": { screen: { min: 19, max: 79, base: 49 }, battery: { min: 89, max: 99, base: 94 }, water: { min: 399, max: 599, base: 499 }, charging: { min: 69, max: 99, base: 84 }, camera: { min: 199, max: 299, base: 249 }, software: { min: 49, max: 99, base: 74 } },
      "iphone 6": { screen: { min: 19, max: 79, base: 49 }, battery: { min: 89, max: 99, base: 94 }, water: { min: 399, max: 599, base: 499 }, charging: { min: 69, max: 99, base: 84 }, camera: { min: 199, max: 299, base: 249 }, software: { min: 49, max: 99, base: 74 } },
      // Default iPhone pricing
      default: { screen: { min: 80, max: 200, base: 120 }, battery: { min: 40, max: 80, base: 60 }, water: { min: 100, max: 300, base: 150 }, charging: { min: 30, max: 60, base: 45 }, camera: { min: 60, max: 120, base: 90 }, software: { min: 20, max: 50, base: 35 } }
    },
    samsung: {
      // Samsung Galaxy S25 series (latest) - Based on Samsung's official repair prices
      "galaxy s25 ultra": { screen: { min: 349, max: 449, base: 399 }, battery: { min: 99, max: 139, base: 119 }, water: { min: 499, max: 799, base: 649 }, charging: { min: 89, max: 159, base: 124 }, camera: { min: 229, max: 399, base: 314 }, software: { min: 59, max: 119, base: 89 } },
      "galaxy s25 plus": { screen: { min: 299, max: 399, base: 349 }, battery: { min: 89, max: 129, base: 109 }, water: { min: 449, max: 749, base: 599 }, charging: { min: 79, max: 149, base: 114 }, camera: { min: 209, max: 379, base: 294 }, software: { min: 59, max: 119, base: 89 } },
      "galaxy s25": { screen: { min: 249, max: 349, base: 299 }, battery: { min: 79, max: 119, base: 99 }, water: { min: 399, max: 699, base: 549 }, charging: { min: 69, max: 139, base: 104 }, camera: { min: 189, max: 359, base: 274 }, software: { min: 59, max: 119, base: 89 } },
      // Samsung Galaxy S24 series
      "galaxy s24 ultra": { screen: { min: 299, max: 399, base: 349 }, battery: { min: 89, max: 129, base: 109 }, water: { min: 399, max: 699, base: 549 }, charging: { min: 79, max: 149, base: 114 }, camera: { min: 199, max: 349, base: 274 }, software: { min: 49, max: 99, base: 74 } },
      "galaxy s24 plus": { screen: { min: 249, max: 349, base: 299 }, battery: { min: 79, max: 119, base: 99 }, water: { min: 349, max: 649, base: 499 }, charging: { min: 69, max: 129, base: 99 }, camera: { min: 179, max: 329, base: 254 }, software: { min: 49, max: 99, base: 74 } },
      "galaxy s24": { screen: { min: 199, max: 299, base: 249 }, battery: { min: 69, max: 109, base: 89 }, water: { min: 299, max: 599, base: 449 }, charging: { min: 59, max: 119, base: 89 }, camera: { min: 159, max: 309, base: 234 }, software: { min: 49, max: 99, base: 74 } },
      // Samsung Galaxy S23 series - Based on Samsung's official repair prices
      "galaxy s23 ultra": { screen: { min: 249, max: 349, base: 299 }, battery: { min: 79, max: 119, base: 99 }, water: { min: 349, max: 649, base: 499 }, charging: { min: 69, max: 129, base: 99 }, camera: { min: 179, max: 329, base: 254 }, software: { min: 49, max: 99, base: 74 } },
      "galaxy s23 plus": { screen: { min: 199, max: 299, base: 249 }, battery: { min: 69, max: 109, base: 89 }, water: { min: 299, max: 599, base: 449 }, charging: { min: 59, max: 119, base: 89 }, camera: { min: 159, max: 309, base: 234 }, software: { min: 49, max: 99, base: 74 } },
      "galaxy s23": { screen: { min: 149, max: 249, base: 199 }, battery: { min: 59, max: 99, base: 79 }, water: { min: 249, max: 549, base: 399 }, charging: { min: 49, max: 109, base: 79 }, camera: { min: 139, max: 289, base: 214 }, software: { min: 49, max: 99, base: 74 } },
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
      // Google Pixel 9 series (latest) - Based on Google's official repair prices
      "pixel 9 pro": { screen: { min: 229, max: 329, base: 279 }, battery: { min: 89, max: 129, base: 109 }, water: { min: 349, max: 649, base: 499 }, charging: { min: 79, max: 139, base: 109 }, camera: { min: 199, max: 349, base: 274 }, software: { min: 59, max: 119, base: 89 } },
      "pixel 9": { screen: { min: 179, max: 279, base: 229 }, battery: { min: 79, max: 119, base: 99 }, water: { min: 299, max: 599, base: 449 }, charging: { min: 69, max: 129, base: 99 }, camera: { min: 179, max: 329, base: 254 }, software: { min: 59, max: 119, base: 89 } },
      // Google Pixel 8 series
      "pixel 8 pro": { screen: { min: 199, max: 299, base: 249 }, battery: { min: 79, max: 119, base: 99 }, water: { min: 299, max: 599, base: 449 }, charging: { min: 69, max: 129, base: 99 }, camera: { min: 179, max: 329, base: 254 }, software: { min: 49, max: 99, base: 74 } },
      "pixel 8": { screen: { min: 149, max: 249, base: 199 }, battery: { min: 69, max: 109, base: 89 }, water: { min: 249, max: 549, base: 399 }, charging: { min: 59, max: 119, base: 89 }, camera: { min: 159, max: 309, base: 234 }, software: { min: 49, max: 99, base: 74 } },
      "pixel 7 pro": { screen: { min: 129, max: 229, base: 179 }, battery: { min: 59, max: 99, base: 79 }, water: { min: 229, max: 529, base: 379 }, charging: { min: 49, max: 109, base: 79 }, camera: { min: 139, max: 289, base: 214 }, software: { min: 49, max: 99, base: 74 } },
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
    // Xiaomi phones
    xiaomi: {
      "xiaomi 14 ultra": { screen: { min: 120, max: 180, base: 150 }, battery: { min: 45, max: 75, base: 60 }, water: { min: 140, max: 280, base: 210 }, charging: { min: 25, max: 55, base: 40 }, camera: { min: 60, max: 110, base: 85 }, software: { min: 25, max: 55, base: 40 } },
      "xiaomi 14 pro": { screen: { min: 100, max: 160, base: 130 }, battery: { min: 40, max: 70, base: 55 }, water: { min: 120, max: 250, base: 190 }, charging: { min: 20, max: 50, base: 35 }, camera: { min: 55, max: 100, base: 80 }, software: { min: 25, max: 55, base: 40 } },
      "xiaomi 14": { screen: { min: 90, max: 150, base: 120 }, battery: { min: 35, max: 65, base: 50 }, water: { min: 110, max: 230, base: 170 }, charging: { min: 18, max: 45, base: 32 }, camera: { min: 50, max: 90, base: 70 }, software: { min: 25, max: 55, base: 40 } },
      "xiaomi 13 ultra": { screen: { min: 90, max: 150, base: 120 }, battery: { min: 35, max: 65, base: 50 }, water: { min: 110, max: 230, base: 170 }, charging: { min: 18, max: 45, base: 32 }, camera: { min: 50, max: 90, base: 70 }, software: { min: 20, max: 50, base: 35 } },
      "xiaomi 13 pro": { screen: { min: 80, max: 140, base: 110 }, battery: { min: 30, max: 60, base: 45 }, water: { min: 100, max: 210, base: 160 }, charging: { min: 15, max: 40, base: 28 }, camera: { min: 45, max: 80, base: 65 }, software: { min: 20, max: 50, base: 35 } },
      "xiaomi 13": { screen: { min: 70, max: 130, base: 100 }, battery: { min: 25, max: 50, base: 38 }, water: { min: 90, max: 190, base: 140 }, charging: { min: 12, max: 35, base: 24 }, camera: { min: 40, max: 75, base: 60 }, software: { min: 20, max: 50, base: 35 } },
      "redmi note 13 pro": { screen: { min: 60, max: 120, base: 90 }, battery: { min: 20, max: 45, base: 32 }, water: { min: 80, max: 170, base: 125 }, charging: { min: 10, max: 30, base: 20 }, camera: { min: 35, max: 70, base: 55 }, software: { min: 20, max: 50, base: 35 } },
      "redmi note 12": { screen: { min: 50, max: 110, base: 80 }, battery: { min: 18, max: 40, base: 29 }, water: { min: 70, max: 150, base: 110 }, charging: { min: 8, max: 25, base: 17 }, camera: { min: 30, max: 60, base: 45 }, software: { min: 20, max: 50, base: 35 } },
      default: { screen: { min: 55, max: 150, base: 95 }, battery: { min: 28, max: 58, base: 42 }, water: { min: 75, max: 240, base: 125 }, charging: { min: 22, max: 48, base: 32 }, camera: { min: 40, max: 95, base: 70 }, software: { min: 20, max: 50, base: 35 } }
    },
    // OPPO phones
    oppo: {
      "oppo find x7 ultra": { screen: { min: 120, max: 180, base: 150 }, battery: { min: 45, max: 75, base: 60 }, water: { min: 140, max: 280, base: 210 }, charging: { min: 25, max: 55, base: 40 }, camera: { min: 60, max: 110, base: 85 }, software: { min: 25, max: 55, base: 40 } },
      "oppo find x7 pro": { screen: { min: 100, max: 160, base: 130 }, battery: { min: 40, max: 70, base: 55 }, water: { min: 120, max: 250, base: 190 }, charging: { min: 20, max: 50, base: 35 }, camera: { min: 55, max: 100, base: 80 }, software: { min: 25, max: 55, base: 40 } },
      "oppo find x6 pro": { screen: { min: 90, max: 150, base: 120 }, battery: { min: 35, max: 65, base: 50 }, water: { min: 110, max: 230, base: 170 }, charging: { min: 18, max: 45, base: 32 }, camera: { min: 50, max: 90, base: 70 }, software: { min: 20, max: 50, base: 35 } },
      "oppo reno 11 pro": { screen: { min: 80, max: 140, base: 110 }, battery: { min: 30, max: 60, base: 45 }, water: { min: 100, max: 200, base: 150 }, charging: { min: 20, max: 40, base: 30 }, camera: { min: 45, max: 85, base: 70 }, software: { min: 20, max: 50, base: 35 } },
      "oppo reno 10": { screen: { min: 70, max: 130, base: 100 }, battery: { min: 25, max: 50, base: 38 }, water: { min: 90, max: 180, base: 135 }, charging: { min: 18, max: 35, base: 27 }, camera: { min: 40, max: 75, base: 60 }, software: { min: 20, max: 50, base: 35 } },
      "oppo a78": { screen: { min: 50, max: 110, base: 80 }, battery: { min: 18, max: 40, base: 29 }, water: { min: 70, max: 150, base: 110 }, charging: { min: 8, max: 25, base: 17 }, camera: { min: 30, max: 60, base: 45 }, software: { min: 20, max: 50, base: 35 } },
      default: { screen: { min: 50, max: 140, base: 90 }, battery: { min: 25, max: 55, base: 40 }, water: { min: 70, max: 220, base: 120 }, charging: { min: 20, max: 45, base: 30 }, camera: { min: 35, max: 90, base: 65 }, software: { min: 20, max: 50, base: 35 } }
    },
    // Vivo phones
    vivo: {
      "vivo x100 pro": { screen: { min: 120, max: 180, base: 150 }, battery: { min: 45, max: 75, base: 60 }, water: { min: 140, max: 280, base: 210 }, charging: { min: 25, max: 55, base: 40 }, camera: { min: 60, max: 110, base: 85 }, software: { min: 25, max: 55, base: 40 } },
      "vivo x100": { screen: { min: 100, max: 160, base: 130 }, battery: { min: 40, max: 70, base: 55 }, water: { min: 120, max: 250, base: 190 }, charging: { min: 20, max: 50, base: 35 }, camera: { min: 55, max: 100, base: 80 }, software: { min: 25, max: 55, base: 40 } },
      "vivo x90 pro": { screen: { min: 90, max: 150, base: 120 }, battery: { min: 35, max: 65, base: 50 }, water: { min: 110, max: 230, base: 170 }, charging: { min: 18, max: 45, base: 32 }, camera: { min: 50, max: 90, base: 70 }, software: { min: 20, max: 50, base: 35 } },
      "vivo v30 pro": { screen: { min: 80, max: 140, base: 110 }, battery: { min: 30, max: 60, base: 45 }, water: { min: 100, max: 200, base: 150 }, charging: { min: 20, max: 40, base: 30 }, camera: { min: 45, max: 85, base: 70 }, software: { min: 20, max: 50, base: 35 } },
      "vivo y100": { screen: { min: 60, max: 120, base: 90 }, battery: { min: 20, max: 45, base: 32 }, water: { min: 80, max: 170, base: 125 }, charging: { min: 10, max: 30, base: 20 }, camera: { min: 35, max: 70, base: 55 }, software: { min: 20, max: 50, base: 35 } },
      default: { screen: { min: 50, max: 140, base: 90 }, battery: { min: 25, max: 55, base: 40 }, water: { min: 70, max: 220, base: 120 }, charging: { min: 20, max: 45, base: 30 }, camera: { min: 35, max: 90, base: 65 }, software: { min: 20, max: 50, base: 35 } }
    },
    // Realme phones
    realme: {
      "realme gt 5 pro": { screen: { min: 100, max: 160, base: 130 }, battery: { min: 40, max: 70, base: 55 }, water: { min: 120, max: 240, base: 180 }, charging: { min: 25, max: 50, base: 38 }, camera: { min: 55, max: 100, base: 80 }, software: { min: 25, max: 55, base: 40 } },
      "realme gt 5": { screen: { min: 90, max: 150, base: 120 }, battery: { min: 35, max: 65, base: 50 }, water: { min: 110, max: 220, base: 165 }, charging: { min: 22, max: 45, base: 34 }, camera: { min: 50, max: 90, base: 75 }, software: { min: 20, max: 50, base: 35 } },
      "realme 12 pro": { screen: { min: 80, max: 140, base: 110 }, battery: { min: 30, max: 60, base: 45 }, water: { min: 100, max: 200, base: 150 }, charging: { min: 20, max: 40, base: 30 }, camera: { min: 45, max: 85, base: 70 }, software: { min: 20, max: 50, base: 35 } },
      "realme c67": { screen: { min: 60, max: 120, base: 90 }, battery: { min: 20, max: 45, base: 32 }, water: { min: 80, max: 170, base: 125 }, charging: { min: 10, max: 30, base: 20 }, camera: { min: 35, max: 70, base: 55 }, software: { min: 20, max: 50, base: 35 } },
      default: { screen: { min: 50, max: 140, base: 90 }, battery: { min: 25, max: 55, base: 40 }, water: { min: 70, max: 220, base: 120 }, charging: { min: 20, max: 45, base: 30 }, camera: { min: 35, max: 90, base: 65 }, software: { min: 20, max: 50, base: 35 } }
    },
    // Motorola phones
    motorola: {
      "motorola edge 50 pro": { screen: { min: 100, max: 160, base: 130 }, battery: { min: 40, max: 70, base: 55 }, water: { min: 120, max: 240, base: 180 }, charging: { min: 25, max: 50, base: 38 }, camera: { min: 55, max: 100, base: 80 }, software: { min: 25, max: 55, base: 40 } },
      "motorola edge 40": { screen: { min: 80, max: 140, base: 110 }, battery: { min: 30, max: 60, base: 45 }, water: { min: 100, max: 200, base: 150 }, charging: { min: 20, max: 40, base: 30 }, camera: { min: 45, max: 85, base: 70 }, software: { min: 20, max: 50, base: 35 } },
      "motorola g84": { screen: { min: 70, max: 130, base: 100 }, battery: { min: 25, max: 50, base: 38 }, water: { min: 90, max: 180, base: 135 }, charging: { min: 18, max: 35, base: 27 }, camera: { min: 40, max: 75, base: 60 }, software: { min: 20, max: 50, base: 35 } },
      "motorola e40": { screen: { min: 50, max: 110, base: 80 }, battery: { min: 18, max: 40, base: 29 }, water: { min: 70, max: 150, base: 110 }, charging: { min: 8, max: 25, base: 17 }, camera: { min: 30, max: 60, base: 45 }, software: { min: 20, max: 50, base: 35 } },
      default: { screen: { min: 50, max: 140, base: 90 }, battery: { min: 25, max: 55, base: 40 }, water: { min: 70, max: 220, base: 120 }, charging: { min: 20, max: 45, base: 30 }, camera: { min: 35, max: 90, base: 65 }, software: { min: 20, max: 50, base: 35 } }
    },
    // LG phones
    lg: {
      "lg wing": { screen: { min: 80, max: 140, base: 110 }, battery: { min: 30, max: 60, base: 45 }, water: { min: 100, max: 200, base: 150 }, charging: { min: 20, max: 40, base: 30 }, camera: { min: 45, max: 85, base: 70 }, software: { min: 20, max: 50, base: 35 } },
      "lg velvet": { screen: { min: 70, max: 130, base: 100 }, battery: { min: 25, max: 50, base: 38 }, water: { min: 90, max: 180, base: 135 }, charging: { min: 18, max: 35, base: 27 }, camera: { min: 40, max: 75, base: 60 }, software: { min: 20, max: 50, base: 35 } },
      "lg g8": { screen: { min: 60, max: 120, base: 90 }, battery: { min: 20, max: 45, base: 32 }, water: { min: 80, max: 170, base: 125 }, charging: { min: 10, max: 30, base: 20 }, camera: { min: 35, max: 70, base: 55 }, software: { min: 20, max: 50, base: 35 } },
      default: { screen: { min: 50, max: 140, base: 90 }, battery: { min: 25, max: 55, base: 40 }, water: { min: 70, max: 220, base: 120 }, charging: { min: 20, max: 45, base: 30 }, camera: { min: 35, max: 90, base: 65 }, software: { min: 20, max: 50, base: 35 } }
    },
    // Sony Xperia phones
    sony: {
      "xperia 1 v": { screen: { min: 120, max: 180, base: 150 }, battery: { min: 45, max: 75, base: 60 }, water: { min: 140, max: 280, base: 210 }, charging: { min: 25, max: 55, base: 40 }, camera: { min: 60, max: 110, base: 85 }, software: { min: 25, max: 55, base: 40 } },
      "xperia 5 v": { screen: { min: 100, max: 160, base: 130 }, battery: { min: 40, max: 70, base: 55 }, water: { min: 120, max: 250, base: 190 }, charging: { min: 20, max: 50, base: 35 }, camera: { min: 55, max: 100, base: 80 }, software: { min: 25, max: 55, base: 40 } },
      "xperia 10 v": { screen: { min: 80, max: 140, base: 110 }, battery: { min: 30, max: 60, base: 45 }, water: { min: 100, max: 200, base: 150 }, charging: { min: 20, max: 40, base: 30 }, camera: { min: 45, max: 85, base: 70 }, software: { min: 20, max: 50, base: 35 } },
      default: { screen: { min: 50, max: 140, base: 90 }, battery: { min: 25, max: 55, base: 40 }, water: { min: 70, max: 220, base: 120 }, charging: { min: 20, max: 45, base: 30 }, camera: { min: 35, max: 90, base: 65 }, software: { min: 20, max: 50, base: 35 } }
    },
    // Nokia phones
    nokia: {
      "nokia xr21": { screen: { min: 80, max: 140, base: 110 }, battery: { min: 30, max: 60, base: 45 }, water: { min: 100, max: 200, base: 150 }, charging: { min: 20, max: 40, base: 30 }, camera: { min: 45, max: 85, base: 70 }, software: { min: 20, max: 50, base: 35 } },
      "nokia g60": { screen: { min: 70, max: 130, base: 100 }, battery: { min: 25, max: 50, base: 38 }, water: { min: 90, max: 180, base: 135 }, charging: { min: 18, max: 35, base: 27 }, camera: { min: 40, max: 75, base: 60 }, software: { min: 20, max: 50, base: 35 } },
      "nokia c31": { screen: { min: 50, max: 110, base: 80 }, battery: { min: 18, max: 40, base: 29 }, water: { min: 70, max: 150, base: 110 }, charging: { min: 8, max: 25, base: 17 }, camera: { min: 30, max: 60, base: 45 }, software: { min: 20, max: 50, base: 35 } },
      default: { screen: { min: 50, max: 140, base: 90 }, battery: { min: 25, max: 55, base: 40 }, water: { min: 70, max: 220, base: 120 }, charging: { min: 20, max: 45, base: 30 }, camera: { min: 35, max: 90, base: 65 }, software: { min: 20, max: 50, base: 35 } }
    },
    // Honor phones
    honor: {
      "honor magic 6 pro": { screen: { min: 120, max: 180, base: 150 }, battery: { min: 45, max: 75, base: 60 }, water: { min: 140, max: 280, base: 210 }, charging: { min: 25, max: 55, base: 40 }, camera: { min: 60, max: 110, base: 85 }, software: { min: 25, max: 55, base: 40 } },
      "honor magic 6": { screen: { min: 100, max: 160, base: 130 }, battery: { min: 40, max: 70, base: 55 }, water: { min: 120, max: 250, base: 190 }, charging: { min: 20, max: 50, base: 35 }, camera: { min: 55, max: 100, base: 80 }, software: { min: 25, max: 55, base: 40 } },
      "honor 90": { screen: { min: 80, max: 140, base: 110 }, battery: { min: 30, max: 60, base: 45 }, water: { min: 100, max: 200, base: 150 }, charging: { min: 20, max: 40, base: 30 }, camera: { min: 45, max: 85, base: 70 }, software: { min: 20, max: 50, base: 35 } },
      default: { screen: { min: 50, max: 140, base: 90 }, battery: { min: 25, max: 55, base: 40 }, water: { min: 70, max: 220, base: 120 }, charging: { min: 20, max: 45, base: 30 }, camera: { min: 35, max: 90, base: 65 }, software: { min: 20, max: 50, base: 35 } }
    },
    // ASUS ROG Phone
    asus: {
      "rog phone 8 pro": { screen: { min: 120, max: 180, base: 150 }, battery: { min: 45, max: 75, base: 60 }, water: { min: 140, max: 280, base: 210 }, charging: { min: 25, max: 55, base: 40 }, camera: { min: 60, max: 110, base: 85 }, software: { min: 25, max: 55, base: 40 } },
      "rog phone 7": { screen: { min: 100, max: 160, base: 130 }, battery: { min: 40, max: 70, base: 55 }, water: { min: 120, max: 250, base: 190 }, charging: { min: 20, max: 50, base: 35 }, camera: { min: 55, max: 100, base: 80 }, software: { min: 25, max: 55, base: 40 } },
      "rog phone 6": { screen: { min: 90, max: 150, base: 120 }, battery: { min: 35, max: 65, base: 50 }, water: { min: 110, max: 230, base: 170 }, charging: { min: 18, max: 45, base: 32 }, camera: { min: 50, max: 90, base: 70 }, software: { min: 20, max: 50, base: 35 } },
      default: { screen: { min: 50, max: 140, base: 90 }, battery: { min: 25, max: 55, base: 40 }, water: { min: 70, max: 220, base: 120 }, charging: { min: 20, max: 45, base: 30 }, camera: { min: 35, max: 90, base: 65 }, software: { min: 20, max: 50, base: 35 } }
    },
    // Nothing Phone
    nothing: {
      "nothing phone 2a": { screen: { min: 80, max: 140, base: 110 }, battery: { min: 30, max: 60, base: 45 }, water: { min: 100, max: 200, base: 150 }, charging: { min: 20, max: 40, base: 30 }, camera: { min: 45, max: 85, base: 70 }, software: { min: 20, max: 50, base: 35 } },
      "nothing phone 2": { screen: { min: 90, max: 150, base: 120 }, battery: { min: 35, max: 65, base: 50 }, water: { min: 110, max: 230, base: 170 }, charging: { min: 18, max: 45, base: 32 }, camera: { min: 50, max: 90, base: 70 }, software: { min: 20, max: 50, base: 35 } },
      "nothing phone 1": { screen: { min: 70, max: 130, base: 100 }, battery: { min: 25, max: 50, base: 38 }, water: { min: 90, max: 180, base: 135 }, charging: { min: 18, max: 35, base: 27 }, camera: { min: 40, max: 75, base: 60 }, software: { min: 20, max: 50, base: 35 } },
      default: { screen: { min: 50, max: 140, base: 90 }, battery: { min: 25, max: 55, base: 40 }, water: { min: 70, max: 220, base: 120 }, charging: { min: 20, max: 45, base: 30 }, camera: { min: 35, max: 90, base: 65 }, software: { min: 20, max: 50, base: 35 } }
    },
    // Fairphone
    fairphone: {
      "fairphone 5": { screen: { min: 80, max: 140, base: 110 }, battery: { min: 30, max: 60, base: 45 }, water: { min: 100, max: 200, base: 150 }, charging: { min: 20, max: 40, base: 30 }, camera: { min: 45, max: 85, base: 70 }, software: { min: 20, max: 50, base: 35 } },
      "fairphone 4": { screen: { min: 70, max: 130, base: 100 }, battery: { min: 25, max: 50, base: 38 }, water: { min: 90, max: 180, base: 135 }, charging: { min: 18, max: 35, base: 27 }, camera: { min: 40, max: 75, base: 60 }, software: { min: 20, max: 50, base: 35 } },
      default: { screen: { min: 50, max: 140, base: 90 }, battery: { min: 25, max: 55, base: 40 }, water: { min: 70, max: 220, base: 120 }, charging: { min: 20, max: 45, base: 30 }, camera: { min: 35, max: 90, base: 65 }, software: { min: 20, max: 50, base: 35 } }
    },
    // POCO phones
    poco: {
      "poco x6 pro": { screen: { min: 80, max: 140, base: 110 }, battery: { min: 30, max: 60, base: 45 }, water: { min: 100, max: 200, base: 150 }, charging: { min: 20, max: 40, base: 30 }, camera: { min: 45, max: 85, base: 70 }, software: { min: 20, max: 50, base: 35 } },
      "poco f5": { screen: { min: 70, max: 130, base: 100 }, battery: { min: 25, max: 50, base: 38 }, water: { min: 90, max: 180, base: 135 }, charging: { min: 18, max: 35, base: 27 }, camera: { min: 40, max: 75, base: 60 }, software: { min: 20, max: 50, base: 35 } },
      "poco m6": { screen: { min: 60, max: 120, base: 90 }, battery: { min: 20, max: 45, base: 32 }, water: { min: 80, max: 170, base: 125 }, charging: { min: 10, max: 30, base: 20 }, camera: { min: 35, max: 70, base: 55 }, software: { min: 20, max: 50, base: 35 } },
      default: { screen: { min: 50, max: 140, base: 90 }, battery: { min: 25, max: 55, base: 40 }, water: { min: 70, max: 220, base: 120 }, charging: { min: 20, max: 45, base: 30 }, camera: { min: 35, max: 90, base: 65 }, software: { min: 20, max: 50, base: 35 } }
    },
    // Redmi phones
    redmi: {
      "redmi note 13 pro": { screen: { min: 70, max: 130, base: 100 }, battery: { min: 25, max: 50, base: 38 }, water: { min: 90, max: 180, base: 135 }, charging: { min: 18, max: 35, base: 27 }, camera: { min: 40, max: 75, base: 60 }, software: { min: 20, max: 50, base: 35 } },
      "redmi 13c": { screen: { min: 60, max: 120, base: 90 }, battery: { min: 20, max: 45, base: 32 }, water: { min: 80, max: 170, base: 125 }, charging: { min: 10, max: 30, base: 20 }, camera: { min: 35, max: 70, base: 55 }, software: { min: 20, max: 50, base: 35 } },
      "redmi a3": { screen: { min: 50, max: 110, base: 80 }, battery: { min: 18, max: 40, base: 29 }, water: { min: 70, max: 150, base: 110 }, charging: { min: 8, max: 25, base: 17 }, camera: { min: 30, max: 60, base: 45 }, software: { min: 20, max: 50, base: 35 } },
      default: { screen: { min: 50, max: 140, base: 90 }, battery: { min: 25, max: 55, base: 40 }, water: { min: 70, max: 220, base: 120 }, charging: { min: 20, max: 45, base: 30 }, camera: { min: 35, max: 90, base: 65 }, software: { min: 20, max: 50, base: 35 } }
    },
    // Infinix phones
    infinix: {
      "infinix zero 30": { screen: { min: 70, max: 130, base: 100 }, battery: { min: 25, max: 50, base: 38 }, water: { min: 90, max: 180, base: 135 }, charging: { min: 18, max: 35, base: 27 }, camera: { min: 40, max: 75, base: 60 }, software: { min: 20, max: 50, base: 35 } },
      "infinix hot 40": { screen: { min: 60, max: 120, base: 90 }, battery: { min: 20, max: 45, base: 32 }, water: { min: 80, max: 170, base: 125 }, charging: { min: 10, max: 30, base: 20 }, camera: { min: 35, max: 70, base: 55 }, software: { min: 20, max: 50, base: 35 } },
      "infinix smart 8": { screen: { min: 50, max: 110, base: 80 }, battery: { min: 18, max: 40, base: 29 }, water: { min: 70, max: 150, base: 110 }, charging: { min: 8, max: 25, base: 17 }, camera: { min: 30, max: 60, base: 45 }, software: { min: 20, max: 50, base: 35 } },
      default: { screen: { min: 50, max: 140, base: 90 }, battery: { min: 25, max: 55, base: 40 }, water: { min: 70, max: 220, base: 120 }, charging: { min: 20, max: 45, base: 30 }, camera: { min: 35, max: 90, base: 65 }, software: { min: 20, max: 50, base: 35 } }
    },
    // TECNO phones
    tecno: {
      "tecno camon 20 pro": { screen: { min: 70, max: 130, base: 100 }, battery: { min: 25, max: 50, base: 38 }, water: { min: 90, max: 180, base: 135 }, charging: { min: 18, max: 35, base: 27 }, camera: { min: 40, max: 75, base: 60 }, software: { min: 20, max: 50, base: 35 } },
      "tecno spark 10": { screen: { min: 60, max: 120, base: 90 }, battery: { min: 20, max: 45, base: 32 }, water: { min: 80, max: 170, base: 125 }, charging: { min: 10, max: 30, base: 20 }, camera: { min: 35, max: 70, base: 55 }, software: { min: 20, max: 50, base: 35 } },
      "tecno pop 8": { screen: { min: 50, max: 110, base: 80 }, battery: { min: 18, max: 40, base: 29 }, water: { min: 70, max: 150, base: 110 }, charging: { min: 8, max: 25, base: 17 }, camera: { min: 30, max: 60, base: 45 }, software: { min: 20, max: 50, base: 35 } },
      default: { screen: { min: 50, max: 140, base: 90 }, battery: { min: 25, max: 55, base: 40 }, water: { min: 70, max: 220, base: 120 }, charging: { min: 20, max: 45, base: 30 }, camera: { min: 35, max: 90, base: 65 }, software: { min: 20, max: 50, base: 35 } }
    },
    // Itel phones
    itel: {
      "itel s23": { screen: { min: 60, max: 120, base: 90 }, battery: { min: 20, max: 45, base: 32 }, water: { min: 80, max: 170, base: 125 }, charging: { min: 10, max: 30, base: 20 }, camera: { min: 35, max: 70, base: 55 }, software: { min: 20, max: 50, base: 35 } },
      "itel a70": { screen: { min: 50, max: 110, base: 80 }, battery: { min: 18, max: 40, base: 29 }, water: { min: 70, max: 150, base: 110 }, charging: { min: 8, max: 25, base: 17 }, camera: { min: 30, max: 60, base: 45 }, software: { min: 20, max: 50, base: 35 } },
      "itel p55": { screen: { min: 45, max: 100, base: 75 }, battery: { min: 15, max: 35, base: 25 }, water: { min: 60, max: 130, base: 95 }, charging: { min: 6, max: 20, base: 13 }, camera: { min: 25, max: 50, base: 38 }, software: { min: 20, max: 50, base: 35 } },
      default: { screen: { min: 45, max: 120, base: 80 }, battery: { min: 20, max: 45, base: 32 }, water: { min: 60, max: 180, base: 110 }, charging: { min: 15, max: 35, base: 25 }, camera: { min: 30, max: 70, base: 50 }, software: { min: 20, max: 50, base: 35 } }
    },
    // Other brands fallback
    other: {
      default: { screen: { min: 50, max: 140, base: 90 }, battery: { min: 25, max: 55, base: 40 }, water: { min: 70, max: 220, base: 120 }, charging: { min: 20, max: 45, base: 30 }, camera: { min: 35, max: 90, base: 65 }, software: { min: 20, max: 50, base: 35 } }
    }
  };

  // Convert USD pricing to NGN
  const pricing = {};
  Object.keys(pricingUSD).forEach(brandKey => {
    pricing[brandKey] = {};
    Object.keys(pricingUSD[brandKey]).forEach(modelKey => {
      pricing[brandKey][modelKey] = {};
      Object.keys(pricingUSD[brandKey][modelKey]).forEach(repairKey => {
        pricing[brandKey][modelKey][repairKey] = {
          min: convertToNGN(pricingUSD[brandKey][modelKey][repairKey].min),
          max: convertToNGN(pricingUSD[brandKey][modelKey][repairKey].max),
          base: convertToNGN(pricingUSD[brandKey][modelKey][repairKey].base)
        };
      });
    });
  });

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

  // Initialize phone model autocomplete
  setupPhoneModelAutocomplete();
});

// Make scroll functions globally accessible
window.scrollToTop = scrollToTop;
window.smoothScrollToSection = smoothScrollToSection;
