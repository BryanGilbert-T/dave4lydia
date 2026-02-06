// Simple behaviors: smooth scroll for About link + Proceed button navigation

const PROCEED_URL = "about.html";

document.addEventListener("DOMContentLoaded", () => {
  const proceedBtn = document.getElementById("proceedBtn");

  // Change this to wherever "Proceed" should go
  // Example: "form.html" or "/vote/" or "https://..."

  if (proceedBtn) {
    proceedBtn.addEventListener("click", () => {
      window.location.href = PROCEED_URL;
    });
  }
});
