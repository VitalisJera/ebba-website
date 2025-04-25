
  function sendOrderEmail(button, productName) {
    const quantity = button.parentElement.querySelector('.quantity-input').value;
    const subject = encodeURIComponent("New Order Request");
    const body = encodeURIComponent(`Hi, I would like to order:\n\nProduct: ${productName}\nQuantity: ${quantity}\n\nThank you.`);
    const email = "elevatedbeyondbuildingafrica@gmail.com";
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  }

  document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent default form submission
  
    // Validate Fields (optional enhancement)
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();
  
    if (!name || !email || !subject || !message) {
      alert("Please fill in all fields.");
      return;
    }
  
    // Simulate success confirmation
    this.style.display = "none";
    document.getElementById("confirmationMessage").style.display = "block";
  });
  document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const button = form.querySelector("button");
    const originalButtonText = button.innerHTML;
  
    form.addEventListener("submit", (e) => {
      // Fancy button loading animation
      button.disabled = true;
      button.innerHTML = `
        <i class="fas fa-spinner fa-spin"></i> Sending...
      `;
  
      // Optional: visual feedback (color animation)
      form.style.opacity = "0.8";
  
      // Optional: delay visual reset after submit
      setTimeout(() => {
        form.style.opacity = "1";
        button.innerHTML = originalButtonText;
        button.disabled = false;
      }, 5000); // Just in case user stays on page
    });
  
    // Instant field glow effect on focus
    const inputs = form.querySelectorAll("input, textarea");
    inputs.forEach(input => {
      input.addEventListener("focus", () => {
        input.style.boxShadow = "0 0 10px 2px gold";
      });
      input.addEventListener("blur", () => {
        input.style.boxShadow = "none";
      });
    });
  });
  document.querySelectorAll('.dropdown > a').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const menu = link.nextElementSibling;
      menu.classList.toggle('show');
    });
  });

  const toggleButton = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('nav-links');

  toggleButton.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });


