// DOM Elements
const langToggle = document.querySelector('.lang-toggle');
const body = document.body;
const mobileMenuIcon = document.querySelector('.mobile-menu-icon');
const nav = document.querySelector('nav');
const scrollBtn = document.getElementById('scrollToTop');
const readMoreBtns = document.querySelectorAll('.read-more-btn');

// Language Toggle
langToggle.addEventListener('click', () => {
  body.classList.toggle('lang-bn');
  langToggle.textContent = body.classList.contains('lang-bn') ? 'EN' : 'BN';
});

// Mobile Menu Toggle
mobileMenuIcon.addEventListener('click', () => {
  nav.classList.toggle('active');
});

// Close mobile menu when a link is clicked
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('active');
  });
});

// Scroll to Top Button
window.addEventListener('scroll', () => {
  if (window.scrollY > 500) {
    scrollBtn.style.display = 'flex';
  } else {
    scrollBtn.style.display = 'none';
  }
});

scrollBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Read More / Read Less functionality
readMoreBtns.forEach(btn => {
  btn.addEventListener('click', function() {
    const card = this.closest('.card') || this.closest('section') || this.parentElement;
    const shortContent = card.querySelector('.short-content');
    const fullContent = card.querySelector('.full-content');
    
    if (shortContent && fullContent) {
      shortContent.classList.toggle('hide');
      fullContent.classList.toggle('show');
      this.textContent = fullContent.classList.contains('show') ? 'Read Less' : 'Read More';
    }
  });
});

// Set active menu item based on current page
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('nav a').forEach(link => {
  const linkPage = link.getAttribute('href');
  if (linkPage === currentPage) {
    link.classList.add('active');
  }
});