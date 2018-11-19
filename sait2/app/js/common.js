$(document).ready(function() {
  $('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  dots: true,
  asNavFor: '.slider-nav',
  responsive: [
    {
      breakpoint: 768,
//сообщает, при какой ширине экрана нужно включать настройки
      settings: {
        dots: false,
      }
    }
  ]

});
$('.slider-nav').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  focusOnSelect: true,
  responsive: [
    {
      breakpoint: 768,
//сообщает, при какой ширине экрана нужно включать настройки
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
      }
    }
]
});

menu.onclick=function myFunction(){
  var x= document.getElementById('myTopnav');
  if(x.className === "topnav") {
    x.className += " responsive";
  }else {
    x.className = "topnav";
  }
}
$('.slider_otziv').slick({
  slidesToShow: 1,
  prevArrow: "<button type='button' class='owl-prev pull-left'></button>",
  nextArrow: "<button type='button' class='owl-next pull-right'></button>",
  dots: true,
   responsive: [
    {
      breakpoint: 768,
//сообщает, при какой ширине экрана нужно включать настройки
      settings: {
        dots: false,
      }
    }
  ],
  responsive: [
    {
      breakpoint: 400,
//сообщает, при какой ширине экрана нужно включать настройки
      settings: {
        dots: false,
      }
    }
  ]
});
$('.popup').magnificPopup({
  removalDelay: 450,
  mainClass: 'mfp-fade'
 }); 

$(".menu").on("click","a", function (event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();

    //забираем идентификатор бока с атрибута href
    var id  = $(this).attr('href'),

    //узнаем высоту от начала страницы до блока на который ссылается якорь
      top = $(id).offset().top;
    
    //анимируем переход на расстояние - top за 1500 мс
    $('body,html').animate({scrollTop: top}, 777);
  });


});
