// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 20,
        behavior: 'smooth'
      });
    }
  });
});

// Contact button interaction
document.getElementById("contactBtn").addEventListener("click", () => {
  const button = document.getElementById("contactBtn");
  button.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
  button.style.backgroundColor = '#2ecc71';
  
  setTimeout(() => {
    button.innerHTML = '<i class="fas fa-paper-plane"></i> Say Hello';
    button.style.backgroundColor = '';
    window.location.href = "mailto:mrudhvikadamaraju@gmail.com";
  }, 2000);
});

// Scroll progress indicator
const scrollIndicator = document.querySelector('.scroll-indicator');
window.addEventListener('scroll', () => {
  const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = (winScroll / height) * 100;
  if (scrollIndicator) {
    scrollIndicator.style.width = scrolled + '%';
  }
});

// Intersection Observer for fade-in animations
const observerOptions = {
  root: null,
  threshold: 0.1,
  rootMargin: '0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      
      // Add specific animations for skill categories
      if (entry.target.classList.contains('skill-category')) {
        entry.target.style.transform = 'translateY(0)';
        entry.target.style.opacity = '1';
      }
      
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe all sections and skill categories
document.querySelectorAll('section, .skill-category').forEach(element => {
  element.classList.add('fade-in');
  observer.observe(element);
});

// Parallax effect for header
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  const scrolled = window.pageYOffset;
  header.style.backgroundPositionY = scrolled * 0.5 + 'px';
});

// Animate scroll down arrow
const scrollDownArrow = document.querySelector('.scroll-down');
if (scrollDownArrow) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      scrollDownArrow.style.opacity = '0';
    } else {
      scrollDownArrow.style.opacity = '0.8';
    }
  });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  // Add active class to current section in navigation
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('nav a');
  
  const highlightNavigation = () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (window.pageYOffset >= sectionTop - 60) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').slice(1) === current) {
        link.classList.add('active');
      }
    });
  };

  window.addEventListener('scroll', highlightNavigation);
  highlightNavigation(); // Run once on load
  
  // Add hover animations for skill categories
  const skillCategories = document.querySelectorAll('.skill-category');
  skillCategories.forEach(skill => {
    skill.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-5px) scale(1.02)';
    });
    
    skill.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0) scale(1)';
    });
  });
  
  // Animate publication items on hover
  const publicationItems = document.querySelectorAll('.publication-item');
  publicationItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-5px)';
      this.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
    });
    
    item.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
      this.style.boxShadow = '';
    });
  });
});
