window.addEventListener('scroll', function() {
    let scrollPos = window.scrollY; // Get the current scroll position
    let windowHeight = document.body.scrollHeight - window.innerHeight;
    let opacityFactor = 1 - (scrollPos / (windowHeight / 1.2)); // Divide the fade effect over 15 images
  
    // Set the opacity of the body as user scrolls down
    document.body.style.opacity = Math.max(opacityFactor, 0); // Ensure opacity doesn't go below 0
  });
  
  // Reset button functionality
  document.getElementById('resetButton').addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    document.body.style.opacity = 1; // Reset opacity back to full
  });
  