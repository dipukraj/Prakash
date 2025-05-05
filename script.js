// Mobile Menu Toggle
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

menuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
  if (!menuBtn.contains(e.target) && !navLinks.contains(e.target)) {
    navLinks.classList.remove('active');
  }
});

// Close menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});

// Create stars for the night sky effect
function createStars() {
  const starsContainer = document.querySelector('.stars');
  const starCount = 200; // Number of stars

  for (let i = 0; i < starCount; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    
    // Random position
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    
    // Random size
    const size = Math.random() * 2;
    
    // Random animation duration
    const duration = Math.random() * 3 + 2;
    
    // Set star styles
    star.style.cssText = `
      position: absolute;
      left: ${x}%;
      top: ${y}%;
      width: ${size}px;
      height: ${size}px;
      background: white;
      border-radius: 50%;
      animation: twinkle ${duration}s infinite;
      opacity: ${Math.random()};
    `;
    
    starsContainer.appendChild(star);
  }
}

// Add star animation to CSS
const style = document.createElement('style');
style.textContent = `
  @keyframes twinkle {
    0%, 100% { opacity: 0.2; }
    50% { opacity: 1; }
  }
`;
document.head.appendChild(style);

// Create stars when the page loads
window.addEventListener('load', createStars);

// Basic form submission feedback
document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thank you! Your message has been sent.");
    this.reset();
  });
  