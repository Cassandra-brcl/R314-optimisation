(function(){
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadImages);
  } else {
    loadImages();
  }
  
  function loadImages() {
    const imgs = document.querySelectorAll('.card img');
    imgs.forEach(img => {
      if (img.complete) {
        img.classList.add('loaded');
      } else {
        img.addEventListener('load', () => img.classList.add('loaded'), { once: true });
      }
    });
  }
})();