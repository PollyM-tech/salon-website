// ===== Mobile menu =====
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

menuBtn.addEventListener("click", () => {
  const open = mobileMenu.classList.toggle("show");
  menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
});

mobileMenu.querySelectorAll("a").forEach((a) => {
  a.addEventListener("click", () => mobileMenu.classList.remove("show"));
});

// ===== WhatsApp booking =====
const whatsappBtn = document.getElementById("whatsappBtn");
const waFloat = document.getElementById("waFloat");

const WHATSAPP_NUMBER = "254714660729"; 

function getValue(id, fallback) {
  const el = document.getElementById(id);
  if (!el) return fallback;
  const val = (el.value || "").trim();
  return val ? val : fallback;
}

function buildMessage() {
  const service = getValue("service", "Not specified");
  const date = getValue("date", "Not specified");
  const time = getValue("time", "Not specified");
  const location = getValue("location", "Not specified");
  const notes = getValue("notes", "None");

  const lines = [
    "Hello Mr Shave It,",
    "",
    "I want to book a mobile shaving appointment.",
    "",
    `Service: ${service}`,
    `Date: ${date}`,
    `Time: ${time}`,
    `Location: ${location}`,
    `Notes: ${notes}`,
    "",
    "Thank you.",
  ];

  return encodeURIComponent(lines.join("\n"));
}

function openWhatsApp(encodedMessage) {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
  window.open(url, "_blank", "noopener,noreferrer");
}

whatsappBtn.addEventListener("click", () => {
  openWhatsApp(buildMessage());
});

waFloat.addEventListener("click", (e) => {
  e.preventDefault();
  const msg = encodeURIComponent(
    "Hello Mr Shave It,\nI would like to book a mobile shaving appointment."
  );
  openWhatsApp(msg);
});

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();
