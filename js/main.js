$(document).ready(function () { });
 // мобильное меню
var menuButton = $(".menu-btn");
menuButton.on('click', function () {
  
  $(".navbar-menu").toggleClass("navbar-menu--visible");
  $("body").toggleClass("no-scroll");
  $(".menu-btn").toggleClass("menu-btn--close");
    $(".navbar-top__menu-line").toggleClass("navbar-top__menu-line--invisible"); 
});


//модальное окно

var modalButton = $("[data-toggle=modal]");
  var closeModalButton = $(".modal__close");
  modalButton.on("click", openModal);
  closeModalButton.on("click", closeModal);

  function openModal() {
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.addClass("modal__overlay--visible");
    modalDialog.addClass("modal__dialog--visible");
    document.getElementsByTagName("body")[0].style.overflow = "hidden";
  
  }

  function closeModal(event) {
    event.preventDefault();
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.removeClass("modal__overlay--visible");
    modalDialog.removeClass("modal__dialog--visible");
    document.getElementsByTagName("body")[0].style.overflow = "auto";
   
  }

    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
  $(document).on('keydown', function (e) {
    if (e.keyCode === 27) {
      modalOverlay.removeClass("modal__overlay--visible");
      modalDialog.removeClass("modal__dialog--visible");
      document.getElementsByTagName("body")[0].style.overflow = "auto";
     
    }
  });
      $(document).click(function (e) {
    if ($(e.target).is('.modal__overlay', '.modal__dialog')) {
        modalOverlay.removeClass("modal__overlay--visible");
      modalDialog.removeClass("modal__dialog--visible");
      document.getElementsByTagName("body")[0].style.overflow = "auto";
    }
});
  
   $(".form").each(function () {
    $(this).validate({
      errorClass: "invalid",
      messages: {
        name: {
          required: "Пожалуйста, укажите Ваш логин",
          minlength: "Ваш логин должен быть не менее двух символов",
        },
        password: {
          required: "Пожалуйста, укажите Ваш пароль",
          minlength: "Ваш пароль должен быть не менее пяти символов",
        },
        email: {
          required: "Пожалуйста укажите адрес Вашей почты",
          email: "Ваша почта должна быть в формате name@domain.com",
        }, 
        emailNews: {
          required: "Пожалуйста укажите адрес Вашей почты",
          email: "Ваша почта должна быть в формате name@domain.com",
        },
        phone: {
          required: "Пожалуйста укажите свой телефон",
          phone: "Ваш телефон должен быть в формате of +7(999) 999-99-99",
          minlength: "Ваш телефон должен состоять из 10 цифр",
        },
      },
    });
    
  });
  $(function(){  
    $(".input__phone").mask("+7(999) 999-99-99", {
      } );
  }); 

 var tabsItem = $('.tabs__item');
 var contentItem = $('.content__item');

  tabsItem.on('click', function (event) {
    var activeContent = $(this).attr("data-target");
    tabsItem.removeClass("tabs__item--active");
    contentItem.removeClass("content__item--active");
  $(activeContent).addClass("content__item--active");
  $(this).addClass("tabs__item--active");
  });

   var reviewsSlider = new Swiper('.reviews-slider', {
    // Optional parameters
    loop: true,
    keyboard: {
      enabled: true,
     },
    spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 7000,
        disableOnInteraction: false, 
      }, 
      pagination: {
        el: '.swiper-pagination',
        clickable: true,       
     },
      navigation: {
      nextEl: '.reviews-slider__button-next',
      prevEl: '.reviews-slider__button-prev',
    },
    on: {
    init() {
      this.el.addEventListener('mouseenter', () => {
        this.autoplay.stop();
      });

      this.el.addEventListener('mouseleave', () => {
        this.autoplay.start();
      });
    }
  },
   });
  
   var reviewsSlider = new Swiper('.history-slider', {
    // Optional parameters
    loop: true,
    keyboard: {
      enabled: true,
    },
    // Navigation arrows
    navigation: {
      nextEl: '.history-info__button-next',
      prevEl: '.history-info__button-prev',
    },
   });
/* 
   var iconSVG = $('.history-info__button-prev');
  iconSVG.on('mouseover', function() {
  $(this).find('svg').children().css({
    'fill': 'none',
    'stroke': '#183B56'   
     
  });
});

iconSVG.on('mouseleave', function() {
  $(this).find('svg').children().css({
    'fill': 'none',
    'stroke': '#959EAD'
   
  });
});

  */