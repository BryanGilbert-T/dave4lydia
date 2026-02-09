// Simple behaviors: smooth scroll for About link + Proceed button navigation

const PROCEED_URL = "why.html";
const WHYPROCEED_URL = "testimoni.html";
const TESTIPROCEED_URL = "vote.html";
const VOTEPROCEED_URL = "thankyou.html";

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
  const proceedBtn = document.getElementById("whyproceedBtn");

  // Change this to wherever "Proceed" should go
  // Example: "form.html" or "/vote/" or "https://..."

  if (proceedBtn) {
    proceedBtn.addEventListener("click", () => {
      window.location.href = WHYPROCEED_URL;
    });
  }
});
document.addEventListener("DOMContentLoaded", () => {
  const proceedBtn = document.getElementById("testiproceedBtn");

  // Change this to wherever "Proceed" should go
  // Example: "form.html" or "/vote/" or "https://..."

  if (proceedBtn) {
    proceedBtn.addEventListener("click", () => {
      window.location.href = TESTIPROCEED_URL;
    });
  }
});
document.addEventListener("DOMContentLoaded", () => {
  const proceedBtn1 = document.getElementById("yesbutton-1");
  const proceedBtn2 = document.getElementById("yesbutton-2");

  // Change this to wherever "Proceed" should go
  // Example: "form.html" or "/vote/" or "https://..."

  if (proceedBtn1) {
    proceedBtn1.addEventListener("click", () => {
      window.location.href = VOTEPROCEED_URL;
    });
  }
  else if (proceedBtn2) {
    proceedBtn2.addEventListener("click", () => {
      window.location.href = VOTEPROCEED_URL;
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

