/* const menu = document.getElementById("menu");

function toggleMenu() {
    menu.style.display = (menu.style.display === "block") ? "none" : "block";
}

window.addEventListener("resize", () => {
    if (window.innerWidth >= 768) {
        menu.style.display = "none";
    }
}); */

// Infinite sponsor carousel (duplicating items so it loops seamlessly)
(function () {
  const carousel = document.querySelector("#sponsors-carousel");
  const track = carousel?.querySelector(".carousel-track");
  if (!carousel || !track) return;

  // Duplicate items to allow seamless looping
  const items = Array.from(track.children);
  items.forEach((item) => {
    const clone = item.cloneNode(true);
    clone.setAttribute("aria-hidden", "true");
    track.appendChild(clone);
  });

  // After duplication, we scroll half the track width then reset
  let offset = 0;
  let lastTime = performance.now();

  // Speed in pixels per second (tweak this)
  const SPEED = 55;

  function tick(now) {
    const dt = (now - lastTime) / 1000;
    lastTime = now;

    const halfWidth = track.scrollWidth / 2;

    // pause on hover
    const isHovering = false /*If hover is wanted "carousel.matches(":hover")"" */

    if (!isHovering) {
      offset += SPEED * dt;
      if (offset >= halfWidth) offset = 0;
      track.style.transform = `translateX(${-offset}px)`;
    }

    requestAnimationFrame(tick);
  }

  requestAnimationFrame(tick);

  // Recalc/reset on resize so it stays smooth
  window.addEventListener("resize", () => {
    offset = 0;
    track.style.transform = `translateX(0px)`;
  });
})();