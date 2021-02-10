// JS-функция определения поддержки WebP
function testWebP(callback) {

    var webP = new Image();
    webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }
    
    testWebP(function (support) {
    
    if (support == true) {
    document.querySelector('body').classList.add('webp');
    }else{
    document.querySelector('body').classList.add('no-webp');
    }
    });

$(document).ready(function() {
    $('.header__burger, .menu__list, .ovelay').click(function(event) {
        $('.header__burger, .menu__list, .overlay').toggleClass('active');
    });
});

$(document).ready(function(){
    $('.carousel').slick({
        prevArrow: '<button type="button" class="slick-prev"><img src="img/arrow_prev.png" alt=""></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/arrow_next.png" alt=""></button>',
        responsive: [
            {
              breakpoint: 993,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false
              }
            },
            {
              breakpoint: 577,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 320,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
    });
    $('.btn-price').each(function(i) {
      $(this).on('click', function(e) {
        e.preventDefault();
        $('.card-item__wrap_descr').eq(i).toggleClass('card-item__wrap_descr-active');
        $('.card-item__hover').eq(i).toggleClass('card-item__hover_active');
       });
    });
  });

 
  
 