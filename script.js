// Change background color button
document.addEventListener("DOMContentLoaded", () => {
  const colorBtn = document.getElementById("colorBtn");
  if (colorBtn) {
    colorBtn.addEventListener("click", () => {
      document.body.style.backgroundColor =
        "#" + Math.floor(Math.random()*16777215).toString(16);
    });
  }

  // Contact form validation and thank-you message
  const contactForm = document.getElementById("contactForm");
  const thankYou = document.getElementById("thankYouMessage");

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      if (name && email.includes("@") && message) {
        contactForm.style.display = "none";
        thankYou.style.display = "block";
      } else {
        alert("Please fill in all fields with valid information.");
      }
    });
  }
});
