// Tab switching functionality
document.addEventListener('DOMContentLoaded', () => {
  const tabButtons = document.querySelectorAll('.tab-btn');
  const skillsGrids = document.querySelectorAll('.skills-grid');

  if (tabButtons.length > 0) {
    tabButtons.forEach(button => {
      button.addEventListener('click', () => {
        const targetTab = button.getAttribute('data-tab');
        
        // Remove active class from all buttons
        tabButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');
        
        // Hide all skill grids
        skillsGrids.forEach(grid => {
          grid.classList.remove('active');
        });
        
        // Show target skill grid
        const targetGrid = document.querySelector(`[data-content="${targetTab}"]`);
        if (targetGrid) {
          targetGrid.classList.add('active');
        }
      });
    });
  }

  // Counter animation
  const animateCounter = (element, target) => {
    let current = 0;
    const increment = target / 50;
    const isPercentage = element.classList.contains('percentage');
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        element.textContent = target + (isPercentage ? '%' : '+');
        clearInterval(timer);
      } else {
        element.textContent = Math.floor(current) + (isPercentage ? '%' : '+');
      }
    }, 40);
  };

  // Intersection Observer for counters
  const counterObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target;
          const finalValue = parseInt(target.getAttribute('data-count'));
          animateCounter(target, finalValue);
          counterObserver.unobserve(target);
        }
      });
    },
    { threshold: 0.5 }
  );

  // Observe all stat counters
  document.querySelectorAll('.stat-count, .stat-number').forEach((counter) => {
    counterObserver.observe(counter);
  });

  // Smooth scroll for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
});

export const initializeInteractions = () => {
  // This function can be called from React components if needed
  console.log('Interactions initialized');
};
