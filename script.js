// script.js
document.addEventListener("DOMContentLoaded", () => {
    const collapsibles = document.querySelectorAll(".collapsible");
  
    collapsibles.forEach(collapsible => {
      collapsible.addEventListener("click", () => {
        collapsible.classList.toggle("active");
  
        const section = collapsible.nextElementSibling;
  
        section.classList.toggle("open");
      });
    });
  });
document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll('a[href^="#"]');
  
    links.forEach(link => {
      link.addEventListener("click", (event) => {
        event.preventDefault(); 
  
        const targetId = link.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
  
        if (targetElement) {
          const targetPosition = targetElement.offsetTop; 
          const startPosition = window.pageYOffset;
          const distance = targetPosition - startPosition;
          const duration = 1000; 
          let startTimestamp = null;
  
          const easeInOutQuad = (t) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  
          const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const elapsed = timestamp - startTimestamp;
            const progress = Math.min(elapsed / duration, 1);
            const easing = easeInOutQuad(progress);
  
            window.scrollTo(0, startPosition + distance * easing);
  
            if (elapsed < duration) {
              requestAnimationFrame(step); 
            }
          };
  
          requestAnimationFrame(step); 
        }
      });
    });
  });