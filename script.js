window.addEventListener('scroll', function() {
  let scrollPos = window.scrollY;
  let windowHeight = document.body.scrollHeight - window.innerHeight;
  let opacityFactor = 1 - (scrollPos / (windowHeight / 1.2));
  
 
  let contentBlocks = document.querySelectorAll('.image-block'); 
  contentBlocks.forEach(block => {
      block.style.opacity = Math.max(opacityFactor, 0); 
  });

  
  document.getElementById('resetButton').style.opacity = '1'; 
});

document.getElementById('resetButton').addEventListener('click', function() {
  window.scrollTo({
      top: 0,
      behavior: 'smooth'
  });
  
  
  let contentBlocks = document.querySelectorAll('.image-block');
  contentBlocks.forEach(block => {
      block.style.opacity = '1'; 
  });
});
