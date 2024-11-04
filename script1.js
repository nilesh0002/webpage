// JavaScript to play/pause video trailers on hover
document.querySelectorAll('.movie-card').forEach(card => {
    const video = card.querySelector('.movie-trailer');
  
    // Play video on mouseenter
    card.addEventListener('mouseenter', () => {
      video.play();
    });
  
    // Pause video on mouseleave
    card.addEventListener('mouseleave', () => {
      video.pause();
      video.currentTime = 0; // Reset video to the beginning
    });
  });
  