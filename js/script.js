/**
 * Professional Portfolio JavaScript
 * Implements modular, efficient code for portfolio functionality
 */

// DOM Elements
const navbar = document.querySelector('.navbar');
const navLinks = document.querySelector('.nav-links');
const navLinksItems = document.querySelectorAll('.nav-links li');
const hamburger = document.querySelector('.hamburger');
const header = document.querySelector('header');
const heroContent = document.querySelector('.hero-content');
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

// Project card animations
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
    // Remove hover animations
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
  initializeContent();
  
  // Hide loading overlay immediately
  hideLoadingOverlay();
  
  // Backup to ensure loading overlay is hidden
  window.addEventListener('load', hideLoadingOverlay);
});

// Load content and initialize features
function initializeContent() {
    // Initialize animations
    AOS.init({
        duration: 800,
        easing: 'ease-out',
        once: true,
        offset: 50
    });
    
    // Initialize custom cursor
    initializeCustomCursor();
    
    // Initialize vanilla tilt
    initializeVanillaTilt();
    
    // Initialize theme toggle
    initializeThemeToggle();
    
    // Initialize mobile navigation
    initializeMobileNav();
    
    // Initialize scroll effects
    initializeScrollEffects();
    
    // Initialize typing effect
    initializeTypingEffect();
    
    // Initialize GSAP animations
    initializeGSAP();
    
    // Initialize project interactions
    initializeProjectInteractions();
    
    // Initialize project filter
    initializeProjectFilter();
    
    // Initialize carousel if on homepage
    initializeCarousel();
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
    // Remove hover effects
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
          card.style.opacity = '1';
        } else {
          card.style.opacity = '0';
          setTimeout(() => {
            card.style.display = 'none';
          }, 300);
        }
      });
    });
  });
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
  
  // Initialize expertise cards
  initExpertiseCards();
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

// Apple-style carousel functionality
function initializeCarousel() {
  const carouselContainer = document.querySelector('.carousel-container');
  const carouselTrack = document.querySelector('.carousel-track');
  const slides = document.querySelectorAll('.carousel-slide');
  const navDots = document.querySelectorAll('.nav-dot');
  
  if (!carouselContainer || !slides.length) return;
  
  let currentSlide = 0;
  const slideWidth = slides[0].getBoundingClientRect().width;
  
  // Set up initial slide appearance
  slides.forEach((slide, index) => {
    if (index === currentSlide) {
      slide.style.transform = 'scale(1)';
      navDots[index].classList.add('active');
    } else {
      slide.style.transform = 'scale(0.9)';
      navDots[index].classList.remove('active');
    }
  });
  
  // Navigation dots functionality
  navDots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      scrollToSlide(index);
    });
  });
  
  // Smooth scroll to a specific slide
  function scrollToSlide(index) {
    if (index >= 0 && index < slides.length) {
      currentSlide = index;
      
      // Update navigation dots
      navDots.forEach((dot, i) => {
        if (i === currentSlide) {
          dot.classList.add('active');
        } else {
          dot.classList.remove('active');
        }
      });
      
      // Calculate scroll position
      const scrollPosition = slides[index].offsetLeft - (carouselContainer.clientWidth - slideWidth) / 2;
      
      // Scroll smoothly
      carouselContainer.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
      
      // Update slide scales
      slides.forEach((slide, i) => {
        if (i === currentSlide) {
          slide.style.transform = 'scale(1)';
        } else {
          slide.style.transform = 'scale(0.9)';
        }
      });
    }
  }
  
  // Detect when scrolling stops
  let scrollTimeout;
  carouselContainer.addEventListener('scroll', () => {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
      // Find the closest slide to the center
      const containerCenter = carouselContainer.scrollLeft + carouselContainer.clientWidth / 2;
      
      let minDistance = Number.MAX_VALUE;
      let closestSlideIndex = 0;
      
      slides.forEach((slide, index) => {
        const slideCenter = slide.offsetLeft + slideWidth / 2;
        const distance = Math.abs(containerCenter - slideCenter);
        
        if (distance < minDistance) {
          minDistance = distance;
          closestSlideIndex = index;
        }
      });
      
      // Update current slide
      if (closestSlideIndex !== currentSlide) {
        scrollToSlide(closestSlideIndex);
      }
    }, 100);
  });
  
  // Auto-advance slides every 5 seconds
  let autoAdvance = setInterval(() => {
    scrollToSlide((currentSlide + 1) % slides.length);
  }, 5000);
  
  // Pause auto-advance when user interacts with carousel
  carouselContainer.addEventListener('mouseenter', () => {
    clearInterval(autoAdvance);
  });
  
  carouselContainer.addEventListener('mouseleave', () => {
    autoAdvance = setInterval(() => {
      scrollToSlide((currentSlide + 1) % slides.length);
    }, 5000);
  });
  
  // Mobile swipe detection
  let startX;
  let startScrollLeft;
  
  carouselContainer.addEventListener('touchstart', (e) => {
    startX = e.touches[0].pageX;
    startScrollLeft = carouselContainer.scrollLeft;
    clearInterval(autoAdvance);
  }, { passive: true });
  
  carouselContainer.addEventListener('touchend', () => {
    autoAdvance = setInterval(() => {
      scrollToSlide((currentSlide + 1) % slides.length);
    }, 5000);
    
    // Find closest slide
    const containerCenter = carouselContainer.scrollLeft + carouselContainer.clientWidth / 2;
    
    let minDistance = Number.MAX_VALUE;
    let closestSlideIndex = 0;
    
    slides.forEach((slide, index) => {
      const slideCenter = slide.offsetLeft + slideWidth / 2;
      const distance = Math.abs(containerCenter - slideCenter);
      
      if (distance < minDistance) {
        minDistance = distance;
        closestSlideIndex = index;
      }
    });
    
    scrollToSlide(closestSlideIndex);
  }, { passive: true });
}

// Initialize expertise card animations
function initExpertiseCards() {
  const cards = document.querySelectorAll('.feature-highlight .product-card');
  
  cards.forEach(card => {
    // Add subtle movement on mousemove
    card.addEventListener('mousemove', function(e) {
      const rect = this.getBoundingClientRect();
      const x = e.clientX - rect.left; // x position within the element
      const y = e.clientY - rect.top;  // y position within the element
      
      // Calculate rotation based on mouse position
      // Max rotation of 3 degrees
      const rotateY = ((x / rect.width) - 0.5) * 6;
      const rotateX = ((y / rect.height) - 0.5) * -6;
      
      // Apply subtle transform - modified for light theme
      this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
      this.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.1)';
    });
    
    // Reset on mouse leave
    card.addEventListener('mouseleave', function() {
      this.style.transform = '';
      this.style.boxShadow = '';
    });
    
    // Add subtle feature highlight on hover
    const features = card.querySelectorAll('.product-feature');
    features.forEach(feature => {
      feature.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-4px) scale(1.05)';
        this.style.backgroundColor = 'rgba(37, 99, 235, 0.2)';
        this.style.color = 'rgba(37, 99, 235, 1)';
      });
      
      feature.addEventListener('mouseleave', function() {
        this.style.transform = '';
        this.style.backgroundColor = '';
        this.style.color = '';
      });
    });
  });
}

// Initialize card animations on page load
document.addEventListener('DOMContentLoaded', function() {
  // Initialize AOS
  AOS.init({
      duration: 800,
      easing: 'ease-out',
      once: true
  });
  
  // Initialize custom cursor if supported
  if ('ontouchstart' in window === false) {
      initializeCustomCursor();
  }
  
  // Initialize Vanilla Tilt
  initializeVanillaTilt();
  
  // Initialize Theme Toggle
  initializeThemeToggle();
  
  // Initialize Mobile Navigation
  initializeMobileNavigation();
  
  // Initialize Scroll Effects
  initializeScrollEffects();
  
  // Initialize Typing Effect
  initializeTypingEffect();
  
  // Initialize GSAP
  initializeGSAP();
  
  // Initialize Project Interactions
  initializeProjectInteractions();
  
  // Initialize Project Filter
  initializeProjectFilter();
  
  // Initialize Apple-style carousel
  initializeCarousel();
  
  // Initialize expertise cards
  initExpertiseCards();
}); 