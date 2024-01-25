$('.multiple-items').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        infinite: true
      }
    }
  ]
});

// Mantenha a classe e os estilos para .slick-slide
$('.slick-slide').addClass('my-custom-class').css({'margin-left': '15px', 'margin-right': '15px'});



$('.autoplay').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  centerMode: true,
  centerPadding: '0px',
  responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true
      }
    },
    
  ],
});

$('.autoplay2').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  centerMode: true,
  centerPadding: '0px',
  responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 3,
        infinite: true
      }
    },
    
  ],
});


