const iconHeart = document.querySelectorAll(".icon-heart");

iconHeart.forEach((icon) => {
  icon.onclick = () => {
    icon.classList.toggle("filled");
  };
});
document.addEventListener("DOMContentLoaded", function () {
  ScrollReveal().reveal("#posts", { delay: 200, reset: true });
  ScrollReveal().reveal("#posts .date", { delay: 300, reset: true });
  ScrollReveal().reveal("#posts h3", { delay: 400, reset: true });
  ScrollReveal().reveal("#posts p", { delay: 500, reset: true });
  ScrollReveal().reveal("footer", { delay: 500, reset: true });
});
