// Simple behaviors: smooth scroll for About link + Proceed button navigation

document.addEventListener("DOMContentLoaded", () => {
  const proceedBtn = document.getElementById("proceedBtn");

  // Change this to wherever "Proceed" should go
  // Example: "form.html" or "/vote/" or "https://..."
  const PROCEED_URL = "form.html";

  if (proceedBtn) {
    proceedBtn.addEventListener("click", () => {
      window.location.href = PROCEED_URL;
    });
  }
});
