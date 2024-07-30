document.addEventListener("DOMContentLoaded", function() {
    const projectImageWrapper = document.querySelector(".project-wrapper__image1");
    if (!projectImageWrapper) return;
  
    const thumbnails = projectImageWrapper.querySelectorAll(".thumbnail");
    let currentIndex = 0;
  
    function showNextImage() {
      thumbnails[currentIndex].classList.remove("active");
      currentIndex = (currentIndex + 1) % thumbnails.length;
      thumbnails[currentIndex].classList.add("active");
    }
  
    setInterval(showNextImage, 1000); // Change image every 1 seconds
  });