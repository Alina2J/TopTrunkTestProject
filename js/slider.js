$(".single-item").slick({
  infinite: true,
  slidesToShow: 2,
  dots: true,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});
