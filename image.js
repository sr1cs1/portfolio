document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".zoom");

  images.forEach(img => {
    img.addEventListener("mouseenter", () => {
      img.style.transform = "scale(1.2)";
    });

    img.addEventListener("mouseleave", () => {
      img.style.transform = "scale(1)";
    });
  });
});