document.addEventListener("DOMContentLoaded", () => {
  const img = document.getElementById("myImage");

  img.addEventListener("mouseenter", () => {
    img.style.transform = "scale(1.2)";
  });

  img.addEventListener("mouseleave", () => {
    img.style.transform = "scale(1)";
  });
});