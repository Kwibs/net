window.addEventListener('scroll', function() {
    let scrollPos = window.scrollY;
    let windowHeight = document.body.scrollHeight - window.innerHeight;
    let opacityFactor = 1 - (scrollPos / (windowHeight / 1.2));
    
    document.body.style.opacity = Math.max(opacityFactor, 0); 
  });
  
  
  document.getElementById('resetButton').addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    document.body.style.opacity = 10; 
  });
  