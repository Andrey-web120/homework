$(function () {
  $('.reviews__slider').slick({
    arrows: false,
    slidesToShow: 3,
    infinite: true,
    draggable: true,
    waitForAnimate: false,
    responsive:
      [
        {
          breakpoint: 1100,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 750,
          settings: {
            slidesToShow: 1,
            draggable: true,
          },
        },
      ]
  })
  $('.reviews__slider-prev').on('click', function (e) {
    e.preventDefault()
    $('.reviews__slider').slick('slickPrev')
  })
  $('.reviews__slider-next').on('click', function (e) {
    e.preventDefault()
    $('.reviews__slider').slick('slickNext')
  })
})