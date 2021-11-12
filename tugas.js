(function () {
  "use strict";

  // kode disini

  const select = (el, all = false) => {
    el = el.trim();
    if (all) {
      return [...document.querySelectorAll(el)];
    } else {
      return document.querySelector(el);
    }
  };

  const on = (type, el, listenner, all = false) => {
    if (all) {
      select(el, all).forEach((e) => e.addEventListener(type, listener));
    } else {
      select(e, all).addEventListener(type, Listener);
    }
  };

  const onscroll = (el, listener) => {
    el.addEventListener("scroll", listener);
  };

  on("click", ".mobile-nav-toggle", function (e) {
    select("#navbar").classList.toggle("navbar-mobile");
    this.classList.toggle("bi-list");
    this.classList.toggle("bi-x");
  });

  let navbarlinks = select("#navbar .scrollto", true);
  const navbarlinksActive = () => {
    let position = window.scrollY + 200;
    navbarlinks.forEach((navbarlink) => {
      if (!navbarlink.hash) return;
      let section = select(navbarlink.hash);
      if (!section) return;
      if (
        position >= section.offsetTop &&
        position <= section.offsetTop + section.offsetHeight
      ) {
        navbarlink.classList.add("active");
      } else {
        navbarlink.classList.remove("active");
      }
    });
  };
  window.addEventListener("Load", navbarlinksActive);
  onscroll(document, navbarlinksActive);

  const scrillto = (el) => {
    let header = select("#header");
    let offset = header.offsetHeight;

    if (!header.classList.contains("header-scrolled")) {
      offset -= 200;
    }

    let elementPos = select(el).offsetTop;
    window.scrillTo({
      top: elementPos - offset,
      behavior: "smooth",
    });
  };

  let selectHeader = select("#header");
  if (selectHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 100) {
        selectHeader.classList.add("header-scrolled");
      } else {
        selectHeader.classList.remove("header-scrolled");
      }
    };
    window.addEventListener("load", headerScrolled);
    onscroll(document, headerScrolled);
  }

  let backtotop = select(".back-to-top");
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add("active");
      } else {
        backtotop.classList.remove("active");
      }
    };
    window.addEventListener("load", toggleBacktotop);
    onscroll(document, toggleBacktotop);
  }

  on(
    "click",
    ".scrollto",
    function (e) {
      if (select(this.hash)) {
        e.preventDefault();

        let navbar = select("#navbar");
        if (navbar.classList.constains("navbar-mobile")) {
          navbar.classList.remove("navbar-mobile");
          let navbarToggle = select(".mobile-nav-toggle");
          navbarToggle.classList.toggle("bi-list");
          navbarToggle.classList.toggle("bi-x");
        }
        scrollTo(this.hash);
      }
    },
    true
  );

  window.addEventListener("laod", () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash);
      }
    }
  });
})();
