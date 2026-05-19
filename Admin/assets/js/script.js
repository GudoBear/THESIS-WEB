// =========================================
// MOBILE SIDEBAR
// =========================================

const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
const sidebar = document.querySelector(".sidebar");
const mobileBackdrop = document.querySelector(".mobile-backdrop");

if (mobileMenuBtn && sidebar && mobileBackdrop) {

  mobileMenuBtn.addEventListener("click", () => {
    sidebar.classList.toggle("show-sidebar");
    mobileBackdrop.classList.toggle("show");
    document.body.classList.toggle("no-scroll");
  });

  mobileBackdrop.addEventListener("click", () => {
    sidebar.classList.remove("show-sidebar");
    mobileBackdrop.classList.remove("show");
    document.body.classList.remove("no-scroll");
  });

}

// =========================================
// NOTIFICATION ANIMATION
// =========================================

const notificationBtn = document.querySelector(".notification-btn");

if (notificationBtn) {
  notificationBtn.addEventListener("click", () => {
    notificationBtn.classList.add("pulse");

    setTimeout(() => {
      notificationBtn.classList.remove("pulse");
    }, 1000);
  });
}

// =========================================
// DARK MODE (FIXED)
// =========================================

const darkModeBtn = document.querySelector(".dark-mode-btn");

if (darkModeBtn) {

  darkModeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    // optional icon change
    if (document.body.classList.contains("dark-mode")) {
      darkModeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
    } else {
      darkModeBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
    }

  });

}

// =========================================
// SAVE BUTTON EFFECT
// =========================================

const saveButtons = document.querySelectorAll(".save-btn");

saveButtons.forEach((button) => {
  button.addEventListener("click", () => {

    const originalText = button.innerHTML;

    button.innerHTML = '<i class="fa-solid fa-check"></i> Saved Successfully';

    setTimeout(() => {
      button.innerHTML = originalText;
    }, 2000);

  });
});

// =========================================
// STATUS COLOR CHANGE
// =========================================

const statusSelects = document.querySelectorAll(".status-select");

statusSelects.forEach((select) => {

  function updateStatus() {

    const value = select.value.toLowerCase();

    select.classList.remove(
      "pending-status",
      "confirmed-status",
      "review-status"
    );

    if (value.includes("pending")) {
      select.classList.add("pending-status");
    } 
    else if (
      value.includes("confirmed") ||
      value.includes("delivered") ||
      value.includes("in transit")
    ) {
      select.classList.add("confirmed-status");
    } 
    else {
      select.classList.add("review-status");
    }

  }

  select.addEventListener("change", updateStatus);
  updateStatus();

});