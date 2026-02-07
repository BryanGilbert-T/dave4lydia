// Simple behaviors: smooth scroll for About link + Proceed button navigation

const PROCEED_URL = "why.html";

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

document.addEventListener("DOMContentLoaded", () => {
  const envelopeBtn = document.querySelector(".thanks-envelope");
  const modal = document.getElementById("rewardModal");

  if (envelopeBtn && modal) {
    const open = () => {
      modal.classList.add("is-open");
      modal.setAttribute("aria-hidden", "false");
    };

    const close = () => {
      modal.classList.remove("is-open");
      modal.setAttribute("aria-hidden", "true");
    };

    envelopeBtn.addEventListener("click", open);

    // click outside image closes
    modal.addEventListener("click", (e) => {
      if (e.target.dataset.close === "true") close();
    });

    // ESC closes
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") close();
    });
  }
});

