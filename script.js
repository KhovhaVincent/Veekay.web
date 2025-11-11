// Smooth scroll for navigation links
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(e.target.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 70,
        behavior: 'smooth'
      });
    }
  });
});

// Simple contact form handler (no backend)
document.getElementById('contactForm').addEventListener('submit', e => {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (name && email && message) {
    alert(`Thank you, ${name}! Your message has been sent.`);
    e.target.reset();
  } else {
    alert('Please fill in all fields.');
  }
});
