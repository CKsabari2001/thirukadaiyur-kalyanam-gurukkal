// Custom JavaScript Start

// Banner Carousel JavaScript Control START
const nextIcon = '<i class="fa-solid fa-arrow-right"></i>';
const preIcon = '<i class="fa-solid fa-arrow-left"></i>';

$(".home-banner-carousel").owlCarousel({
  loop: true,
  autoplay: true,
  autoplayTimeout: 2500,
  autoplayHoverPause: true,
  margin: 10,
  nav: true,
  dots: false,
  navText: [preIcon, nextIcon],
  responsive: {
    0: {
      items: 1,
      nav: false,
    },
    768: {
      items: 1,
      nav: true,
    },
  },
});
// Banner Carousel JavaScript Control END

// Gallery Carousel JavaScript Control START
$(".gallery-carouserl").owlCarousel({
  loop: true,
  autoplay: true,
  autoplayTimeout: 2500,
  autoplayHoverPause: true,
  margin: 10,
  nav: false,
  dots: false,
  navText: [preIcon, nextIcon],
  responsive: {
    0: {
      items: 1,
      nav: false,
    },
    768: {
      items: 1,
      nav: false,
    },
  },
});
// Gallery Carousel JavaScript Control END

// Accommodation Carousel JavaScript Control START
$(".accommodation-carousel").owlCarousel({
  loop: true,
  autoplay: true,
  autoplayTimeout: 2500,
  autoplayHoverPause: true,
  margin: 0,
  nav: false,
  dots: false,
  navText: [preIcon, nextIcon],
  responsive: {
    0: {
      items: 1,
      nav: false,
    },
    576: {
      items: 2,
      nav: false,
    },
    768: {
      items: 4,
      nav: false,
    },
    1200: {
      items: 5,
      nav: false,
    },
  },
});
// Accommodation Carousel JavaScript Control END

// All page Marquee (Loop Text in under banner) JavaScript Control START
$(".marquee_text").marquee({
  direction: "left",
  duration: 50000,
  gap: 50,
  delayBeforeStart: 100,
  duplicated: true,
  startVisible: true,
});
// All page Marquee (Loop Text in under banner) JavaScript Control END

// Custom JavaScript End
