/**
 * Professional Portfolio JavaScript
 * Implements modular, efficient code for portfolio functionality
 */

// DOM Elements
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navLinksItems = document.querySelectorAll('.nav-links li');
const header = document.querySelector('header');
const sections = document.querySelectorAll('section');
const contactForm = document.querySelector('.contact-form');

// Toggle mobile navigation
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinksItems.forEach(item => {
    item.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Header scroll effect
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    
    if (scrollPosition > 50) {
        header.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
        header.style.height = '70px';
    } else {
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        header.style.height = 'auto';
    }
    
    // Highlight active section in navigation
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            document.querySelector('.nav-links a[href="#' + sectionId + '"]').classList.add('active');
        } else {
            document.querySelector('.nav-links a[href="#' + sectionId + '"]').classList.remove('active');
        }
    });
});

// Form submission (prevent default for demo)
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        // In a real implementation, you would send this data to a server
        console.log('Form submitted:', { name, email, message });
        
        // Show success message (for demo purposes)
        const formElements = contactForm.elements;
        const submitButton = contactForm.querySelector('button[type="submit"]');
        
        // Disable form
        Array.from(formElements).forEach(element => {
            element.disabled = true;
        });
        
        // Change button text
        submitButton.textContent = 'Message Sent!';
        submitButton.classList.add('success');
        
        // Reset form after delay
        setTimeout(() => {
            contactForm.reset();
            submitButton.textContent = 'Send Message';
            submitButton.classList.remove('success');
            
            Array.from(formElements).forEach(element => {
                element.disabled = false;
            });
        }, 3000);
    });
}

// Project card animations
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
});

// Page load animations
document.addEventListener('DOMContentLoaded', () => {
    // Fade in hero content
    const heroContent = document.querySelector('.hero-content');
    setTimeout(() => {
        heroContent.style.opacity = '1';
        heroContent.style.transform = 'translateY(0)';
    }, 300);
    
    // Initialize AOS for scroll animations if library is present
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true
        });
    }
});

// Create directory structure for image placeholders
console.log('Portfolio site initialized');

// Execute when DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Initialize all functionality
  initializeCore();
  
  // Hide loading overlay immediately
  hideLoadingOverlay();
  
  // Backup to ensure loading overlay is hidden
  window.addEventListener('load', hideLoadingOverlay);
});

// Core initialization function
function initializeCore() {
  // Navigation and UI components
  initializeNavigation();
  initializeThemeToggle();
  
  // Project functionality
  initializeProjectFilter();
  initializeProjectInteractions();
  
  // Content and form management
  initializeContactForm();
  
  // Animations and visual effects
  initializeAnimations();
}

// Navigation functionality
function initializeNavigation() {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  const header = document.querySelector('header');
  
  // Mobile menu toggle
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', function() {
      this.classList.toggle('active');
      navLinks.classList.toggle('active');
      document.body.classList.toggle('menu-open');
    });
    
    // Close menu when clicking links
    document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', function() {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
        document.body.classList.remove('menu-open');
      });
    });
  }
  
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Get target element
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (!targetElement) return;
      
      // Calculate scroll position with offset for header
      const headerHeight = header ? header.offsetHeight : 0;
      const targetPosition = targetElement.getBoundingClientRect().top + 
                            window.pageYOffset - headerHeight - 20;
      
      // Perform scroll animation
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    });
  });
  
  // Update header on scroll
  window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    
    if (header) {
      if (scrollPosition > 20) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }
    
    // Update active nav link based on scroll position
    updateActiveNavLink();
  });
  
  // Initial active nav link check
  updateActiveNavLink();
}

// Update active navigation link based on scroll position
function updateActiveNavLink() {
  const sections = document.querySelectorAll('section[id]');
  const scrollPosition = window.scrollY;
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');
    const navLink = document.querySelector(`.nav-links a[href="#${sectionId}"]`);
    
    if (navLink && scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      document.querySelectorAll('.nav-links a').forEach(link => link.classList.remove('active'));
      navLink.classList.add('active');
    }
  });
}

// Theme toggle functionality
function initializeThemeToggle() {
  const themeToggle = document.getElementById('theme-toggle');
  
  if (!themeToggle) return;
  
  themeToggle.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark-mode');
    
    // Save theme preference
    const isDarkMode = document.documentElement.classList.contains('dark-mode');
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  });
}

// Project card hover effects and interactions
function initializeProjectInteractions() {
  const projectCards = document.querySelectorAll('.project-card');
  
  projectCards.forEach(card => {
    // Add subtle hover effect
    card.addEventListener('mouseenter', () => {
      gsapFallback(() => {
        card.style.transform = 'translateY(-5px)';
        card.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.1)';
      });
    });
    
    card.addEventListener('mouseleave', () => {
      gsapFallback(() => {
        card.style.transform = 'translateY(0)';
        card.style.boxShadow = '';
      });
    });
  });
}

// Project filter functionality
function initializeProjectFilter() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');
  
  if (!filterButtons.length || !projectCards.length) return;
  
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Update active button
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      
      const filterValue = button.getAttribute('data-filter');
      
      // Show/hide projects based on filter
      projectCards.forEach(card => {
        const categories = card.getAttribute('data-category');
        
        if (!categories) return;
        
        const isVisible = filterValue === 'all' || categories.includes(filterValue);
        
        if (isVisible) {
          card.style.display = 'block';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 10);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(10px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 300);
        }
      });
    });
  });
}

// Contact form functionality
function initializeContactForm() {
  const form = document.querySelector('.contact-form');
  if (!form) return;
  
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    
    // Form validation
    if (!name || !email || !message) {
      showFormMessage('Please fill in all fields', 'error');
      return;
    }
    
    if (!isValidEmail(email)) {
      showFormMessage('Please enter a valid email address', 'error');
      return;
    }
    
    // Simulate form submission (replace with actual implementation)
    showFormMessage('Sending message...', 'info');
    
    // In a real implementation, you would send this data to a server
    setTimeout(() => {
      showFormMessage('Message sent successfully!', 'success');
      form.reset();
    }, 2000);
  });
}

// Display form feedback messages
function showFormMessage(text, type) {
  const form = document.querySelector('.contact-form');
  if (!form) return;
  
  // Create or get message element
  let messageElement = document.querySelector('.form-message');
  if (!messageElement) {
    messageElement = document.createElement('div');
    messageElement.className = 'form-message';
    form.appendChild(messageElement);
  }
  
  // Update message content and style
  messageElement.textContent = text;
  messageElement.className = `form-message ${type}`;
  
  // Automatically hide success messages after delay
  if (type === 'success') {
    setTimeout(() => {
      messageElement.style.opacity = '0';
      setTimeout(() => {
        messageElement.remove();
      }, 500);
    }, 3000);
  }
}

// Validate email format
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Initialize all animation-related features
function initializeAnimations() {
  // Check if animation libraries are available
  if (typeof AOS !== 'undefined') {
    initializeAOS();
  }
  
  if (typeof VanillaTilt !== 'undefined') {
    initializeVanillaTilt();
  }
  
  if (typeof gsap !== 'undefined') {
    initializeGSAP();
  }
  
  // Initialize custom cursor
  initializeCustomCursor();
  
  // Initialize typing effect
  initializeTypingEffect();
  
  // Handle page transitions
  initializePageTransitions();
}

// AOS (Animate On Scroll) initialization
function initializeAOS() {
  AOS.init({
    duration: 800,
    easing: 'ease-out',
    once: true,
    offset: 100,
    disable: window.innerWidth < 768 ? true : false
  });
}

// Custom cursor functionality
function initializeCustomCursor() {
  const cursorDot = document.querySelector('.cursor-dot');
  const cursorOutline = document.querySelector('.cursor-dot-outline');
  
  if (!cursorDot || !cursorOutline) return;
  
  // Only enable custom cursor on desktop
  if (window.innerWidth > 768 && !isTouchDevice()) {
    document.body.style.cursor = 'none';
    
    window.addEventListener('mousemove', (e) => {
      const posX = e.clientX;
      const posY = e.clientY;
      
      cursorDot.style.left = `${posX}px`;
      cursorDot.style.top = `${posY}px`;
      
      // Delayed movement for the outline for a trailing effect
      cursorOutline.animate({
        left: `${posX}px`,
        top: `${posY}px`
      }, { duration: 500, fill: 'forwards' });
    });
    
    // Apply hover effects on interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .btn, .project-card, input, textarea, .interactive-vector');
    
    interactiveElements.forEach(element => {
      element.addEventListener('mouseenter', () => {
        cursorDot.style.transform = 'translate(-50%, -50%) scale(1.5)';
        cursorOutline.style.transform = 'translate(-50%, -50%) scale(1.5)';
        cursorOutline.style.backgroundColor = 'rgba(37, 99, 235, 0.3)';
      });
      
      element.addEventListener('mouseleave', () => {
        cursorDot.style.transform = 'translate(-50%, -50%) scale(1)';
        cursorOutline.style.transform = 'translate(-50%, -50%) scale(1)';
        cursorOutline.style.backgroundColor = 'rgba(37, 99, 235, 0.2)';
      });
    });
  } else {
    // Hide custom cursor on mobile/tablet
    if (cursorDot) cursorDot.style.display = 'none';
    if (cursorOutline) cursorOutline.style.display = 'none';
  }
}

// GSAP animations
function initializeGSAP() {
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
  
  // Register ScrollTrigger plugin
  gsap.registerPlugin(ScrollTrigger);
  
  // Hero section parallax effect
  gsap.to(".hero-visual", {
    y: 80,
    scrollTrigger: {
      trigger: ".hero",
      start: "top top",
      end: "bottom top",
      scrub: true
    }
  });
  
  // Staggered entrance for project cards
  gsap.from(".project-card", {
    y: 30,
    opacity: 0,
    stagger: 0.15,
    duration: 0.8,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".projects",
      start: "top 80%"
    }
  });
  
  // Reveal animation for sections
  const sections = document.querySelectorAll("section:not(.hero)");
  sections.forEach(section => {
    gsap.from(section, {
      opacity: 0,
      y: 20,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: section,
        start: "top 85%"
      }
    });
  });
}

// VanillaTilt initialization
function initializeVanillaTilt() {
  if (typeof VanillaTilt === 'undefined') return;
  
  // Only apply on desktop
  if (window.innerWidth > 768 && !isTouchDevice()) {
    VanillaTilt.init(document.querySelectorAll("[data-tilt]"), {
      max: 8,
      speed: 400,
      glare: true,
      "max-glare": 0.2,
    });
  }
}

// Typing effect for hero text
function initializeTypingEffect() {
  const typingText = document.querySelector('.typing-text');
  if (!typingText) return;
  
  // Get text content and store it
  const text = typingText.textContent;
  typingText.textContent = '';
  
  // Start typing after a delay
  setTimeout(() => {
    let charIndex = 0;
    
    const typeInterval = setInterval(() => {
      if (charIndex < text.length) {
        typingText.textContent += text.charAt(charIndex);
        charIndex++;
      } else {
        clearInterval(typeInterval);
      }
    }, 80);
  }, 500);
}

// Page transitions
function initializePageTransitions() {
  const pageTransition = document.querySelector('.page-transition');
  if (!pageTransition) return;
  
  // Links to other pages (not anchors or external links)
  const pageLinks = document.querySelectorAll('a:not([href^="#"]):not([target="_blank"])');
  
  pageLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      // Only apply to links to other pages in the site
      if (this.hostname !== window.location.hostname) return;
      
      e.preventDefault();
      const href = this.getAttribute('href');
      
      // Animation with GSAP if available, otherwise use fallback
      if (typeof gsap !== 'undefined') {
        gsap.to(pageTransition, {
          y: 0,
          duration: 0.5,
          ease: "power2.inOut",
          onComplete: () => {
            window.location.href = href;
          }
        });
      } else {
        // Fallback animation
        pageTransition.style.transform = 'translateY(0)';
        pageTransition.style.transition = 'transform 0.5s ease-in-out';
        
        setTimeout(() => {
          window.location.href = href;
        }, 500);
      }
    });
  });
  
  // Animate the transition out when page loads
  if (typeof gsap !== 'undefined') {
    gsap.to(pageTransition, {
      y: '-100%',
      duration: 0.5,
      ease: "power2.inOut",
      delay: 0.1
    });
  } else {
    // Fallback animation
    setTimeout(() => {
      pageTransition.style.transform = 'translateY(-100%)';
      pageTransition.style.transition = 'transform 0.5s ease-in-out';
    }, 100);
  }
}

// Function to hide loading overlay
function hideLoadingOverlay() {
  const loadingOverlay = document.querySelector('.loading-overlay');
  if (loadingOverlay) {
    loadingOverlay.style.opacity = '0';
    setTimeout(() => {
      loadingOverlay.style.visibility = 'hidden';
    }, 500);
  }
}

// Helper function to check if device is touch-enabled
function isTouchDevice() {
  return (('ontouchstart' in window) ||
     (navigator.maxTouchPoints > 0) ||
     (navigator.msMaxTouchPoints > 0));
}

// Fallback for GSAP animations
function gsapFallback(fallbackFn) {
  if (typeof gsap === 'undefined') {
    fallbackFn();
  } else {
    // Use GSAP if available
    try {
      fallbackFn();
    } catch (error) {
      console.warn('GSAP error:', error);
      fallbackFn();
    }
  }
}

// Utility function for generating random numbers
function random(min, max) {
  return Math.random() * (max - min) + min;
} 