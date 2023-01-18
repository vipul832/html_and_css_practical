$(".owl-carousel").owlCarousel({
  loop: false,
  nav: true,
  dots: false,
  responsive: {
    0: {
      items: 1,
    },
    576: {
      items: 2,
      margin: 10,
    },
    768: {
      items: 3,
      autoWidth: true,
    },
    992: {
      items: 4,
    },
    1200: {
      items: 5,
    },
  },
});
