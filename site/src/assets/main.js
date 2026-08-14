(function () {
  "use strict";

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* -------- Mobile nav toggle -------- */
  var toggle = document.getElementById("navToggle");
  var mobileNav = document.getElementById("mobileNav");
  if (toggle && mobileNav) {
    var closeMobileNav = function (restoreFocus) {
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Menü öffnen");
      mobileNav.hidden = true;
      if (restoreFocus) toggle.focus();
    };

    var openMobileNav = function () {
      toggle.setAttribute("aria-expanded", "true");
      toggle.setAttribute("aria-label", "Menü schließen");
      mobileNav.hidden = false;
      var firstLink = mobileNav.querySelector("a");
      if (firstLink) firstLink.focus();
    };

    toggle.addEventListener("click", function () {
      var open = toggle.getAttribute("aria-expanded") === "true";
      if (open) closeMobileNav(false);
      else openMobileNav();
    });

    mobileNav.addEventListener("click", function (e) {
      if (e.target.closest("a")) closeMobileNav(false);
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
        closeMobileNav(true);
      }
    });

    var desktopQuery = window.matchMedia("(min-width: 981px)");
    var resetNavAtDesktop = function (e) {
      if (e.matches) closeMobileNav(false);
    };
    if (desktopQuery.addEventListener) desktopQuery.addEventListener("change", resetNavAtDesktop);
    else desktopQuery.addListener(resetNavAtDesktop);
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

  /* -------- Mobile quick-contact bar -------- */
  var mobileBar = document.querySelector(".mobile-bar");
  if (mobileBar) {
    var onMobileBarScroll = function () {
      mobileBar.classList.toggle("is-visible", window.scrollY > 420);
    };
    onMobileBarScroll();
    window.addEventListener("scroll", onMobileBarScroll, { passive: true });
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
    // The repeated ticker is decorative and must stay out of the accessibility tree.
    track.setAttribute("aria-hidden", "true");
  }

  /* Native browser scrolling is intentional. A smooth-scroll interception
     library previously made wheel and touch input feel delayed. */
})();
