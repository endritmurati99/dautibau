(function () {
  "use strict";

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* -------- Mobile nav toggle -------- */
  var toggle = document.getElementById("navToggle");
  var mobileNav = document.getElementById("mobileNav");
  if (toggle && mobileNav) {
    toggle.addEventListener("click", function () {
      var open = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!open));
      toggle.setAttribute("aria-label", open ? "Menü öffnen" : "Menü schließen");
      if (open) {
        mobileNav.hidden = true;
      } else {
        mobileNav.hidden = false;
      }
    });
    mobileNav.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        toggle.setAttribute("aria-expanded", "false");
        toggle.setAttribute("aria-label", "Menü öffnen");
        mobileNav.hidden = true;
      }
    });
  }

  /* -------- Sticky header compacting -------- */
  var header = document.querySelector("[data-header]");
  if (header) {
    var onScroll = function () {
      if (window.scrollY > 40) header.classList.add("is-compact");
      else header.classList.remove("is-compact");
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* -------- Scroll reveal -------- */
  var revealEls = document.querySelectorAll("[data-reveal]");
  if (revealEls.length) {
    if (reduceMotion || !("IntersectionObserver" in window)) {
      // No animation: leave content plainly visible (CSS hides only under .js-reveal).
      revealEls.forEach(function (el) { el.classList.add("is-in"); });
    } else {
      // Opt into the hidden-until-revealed state only now that we can reveal.
      document.documentElement.classList.add("js-reveal");
      var reveal = function (el) {
        var delay = el.getAttribute("data-reveal-delay");
        if (delay) el.style.transitionDelay = delay + "ms";
        el.classList.add("is-in");
      };
      var io = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              reveal(entry.target);
              io.unobserve(entry.target);
            }
          });
        },
        { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
      );
      revealEls.forEach(function (el) { io.observe(el); });

      // Safety net: if anything is still hidden after 2.5s (e.g. observer never
      // fired, print/screenshot context), reveal it so content is never lost.
      window.setTimeout(function () {
        revealEls.forEach(function (el) {
          if (!el.classList.contains("is-in")) {
            el.style.transitionDelay = "0ms";
            el.classList.add("is-in");
          }
        });
      }, 2500);
    }
  }

  /* -------- Marquee: duplicate content for seamless loop -------- */
  var track = document.querySelector(".marquee-track");
  if (track && !reduceMotion) {
    track.innerHTML = track.innerHTML + track.innerHTML;
    track.setAttribute("aria-hidden", "false");
  }

  /* -------- Lenis smooth scroll (gated) -------- */
  if (!reduceMotion && typeof window.Lenis === "function") {
    var lenis = new window.Lenis({
      duration: 1.05,
      easing: function (t) { return Math.min(1, 1.001 - Math.pow(2, -10 * t)); },
      smoothWheel: true,
    });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    document.querySelectorAll('a[href^="#"]').forEach(function (a) {
      a.addEventListener("click", function (e) {
        var id = a.getAttribute("href");
        if (id.length > 1) {
          var target = document.querySelector(id);
          if (target) {
            e.preventDefault();
            lenis.scrollTo(target, { offset: -90 });
          }
        }
      });
    });
  }
})();
