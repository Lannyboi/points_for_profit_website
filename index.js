/* const menu = document.getElementById("menu");

function toggleMenu() {
    menu.style.display = (menu.style.display === "block") ? "none" : "block";
}

window.addEventListener("resize", () => {
    if (window.innerWidth >= 768) {
        menu.style.display = "none";
    }
}); */

/* Sponsor scroll wheel */
(function () {
  const viewport = document.querySelector("#sponsors-carousel");
  const track = viewport?.querySelector(".sponsor-track");
  const groupA = track?.querySelector(".sponsor-group");

  if (!viewport || !track || !groupA) return;

  let offset = 0;
  let lastTime = performance.now();
  const SPEED = 55; // px per second

  // Width of ONE group (A). We reset when we've scrolled this far.
  let groupWidth = 0;

  function measure() {
    groupWidth = groupA.getBoundingClientRect().width;
    // keep offset valid if something changes
    if (groupWidth > 0) offset = offset % groupWidth;
    lastTime = performance.now();
  }

  // Measure after layout + images load
  requestAnimationFrame(measure);
  window.addEventListener("load", measure);

  // IMPORTANT: fix “scroll causes resize” on mobile by only reacting to width changes
  let lastW = window.innerWidth;
  window.addEventListener("resize", () => {
    const w = window.innerWidth;
    if (w === lastW) return;
    lastW = w;
    measure();
  });

  function tick(now) {
    const dt = (now - lastTime) / 1000;
    lastTime = now;

    if (groupWidth > 0) {
      offset += SPEED * dt;

      // When we've moved one full group, snap back.
      // This is seamless because group B is identical and currently in view.
      if (offset >= groupWidth) offset -= groupWidth;

      track.style.transform = `translateX(${-offset}px)`;
    }

    requestAnimationFrame(tick);
  }

  requestAnimationFrame(tick);
})();