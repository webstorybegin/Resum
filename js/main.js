
// <SLIDER ====================================================================================
$('.portfolio__slider').slick({
  arrows: false,
  slidesToShow: 1,
  dots: true,
  infinite: false,
  speed: 800,
  touchThreshold: 10,
  waitForAnimate: false,
  responsive: [
    {
      breakpoint: 769,
      settings: {
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        infinite: true
      }
    }
  ]
});
// </SLIDER ===================================================================================


// <BURGER ====================================================================================
let burger = document.querySelector('.burger')
let burgerMenu = document.querySelector('.burger__menu')
let logo = document.querySelector('.header__nav_logo')
let burgerMenuClickOut = $('.burger__menu, .burger')
let burgerMenuActive = $('.burger__menu-active')

burger.addEventListener('click', function () {
  burger.classList.toggle('burger__active')
  burgerMenu.classList.toggle('burger__menu-active')
  document.body.classList.toggle('lock')
})
document.addEventListener('click', function (e) {
  if (!burgerMenuClickOut.is(e.target) && burgerMenuClickOut.has(e.target).length === 0 &&
    !burgerMenuActive.is(e.target) && burgerMenuActive.has(e.target).length === 0) {
    document.body.classList.remove('lock')
    burger.classList.remove('burger__active')
    burgerMenu.classList.remove('burger__menu-active')
    logo.classList.add('animateLogo')
    setTimeout(function () {
      logo.classList.remove('animateLogo')
    }, 700)
  }
})
// </BURGER ===================================================================================


// <ENABLE WOW ANIMATION ======================================================================
new WOW().init();
// </ENABLE WOW ANIMATION =====================================================================


// <SLIDER LINKS ANIMATION ====================================================================
$('.slider_item-btn').on('mouseover', function () {
  $('.slider_item-btn').removeClass('wow animate__animated animate__headShake')
})
$('.slider_item-btn').on('mouseout', function () {
  $('.slider_item-btn').addClass('wow animate__animated animate__headShake')
})
// </SLIDER LINKS ANIMATION ===================================================================


// <GLOBAL LINES ANIMATION ====================================================================
$(window).on('scroll', function () {
  let scroll = $(window).scrollTop()
  if (scroll > 1268) {
    $('.one').addClass('wow animate__animated animate__zoomOutLeft')
    if (scroll > 1485) {
      $('.two').addClass('wow animate__animated animate__zoomOutRight')
    }
  }
})
// </GLOBAL LINES ANIMATION ===================================================================



// <ANIMATION MAIN WINDOW ====================================================================
$('.play__svg').on('click', function () {
  $('.play__svg, .main__human_svg').addClass('hideHumanSvg')
  $('.main__info').addClass('visibleMainInfo')
  $('.main__photo').addClass('visibleMainPhoto')
  $('.header__nav').addClass('header__navVisible')
})
$('.header__nav_logo').on('click', function () {
  $('.main__human_svg, .play__svg').removeClass('hideHumanSvg')
  $('.main__info').removeClass('visibleMainInfo')
  $('.main__photo').removeClass('visibleMainPhoto')
  $('.burger__menu').removeClass('burger__menu-active')
  $('.burger').removeClass("burger__active")
})
// </ANIMATION MAIN WINDOW ====================================================================


// <CLICK LINKS ANIMATION LOGO ================================================================
$('#about-me, #skills, #portfolio, #contact, #about-me-burger, #skills-burger, #portfolio-burger, #contact-burger, .burger').on('click', function () {
  $('.header__nav_logo').addClass('animateLogo')
  setTimeout(function () {
    $('.header__nav_logo').removeClass('animateLogo')
  }, 700)
})
// </CLICK LINKS ANIMATION LOGO ================================================================


// <CLICK LOGO SCROLL TOP ======================================================================
$('.header__nav_logo').on('click', function () {
  $('html, body').animate({ scrollTop: 0 }, 800)
})
// </CLICK LOGO SCROLL TOP =====================================================================


// <HEADER FIXED ===============================================================================
$(window).on('scroll', function () {
  let scroll = $(window).scrollTop()
  if (scroll > 1) {
    $('.header').addClass('scroll')
    $('.header__nav').addClass('header__navVisible')
  } else {
    $('.header__nav').removeClass('header__navVisible')
  }
})
$('#about-me-burger, #skills-burger, #portfolio-burger, #contact-burger').on('click', function () {
  $('.header__nav').removeClass('header__navVisible')
})
// </HEADER FIXED ==============================================================================


// <SCROLL NAVIGATION ABOUT ====================================================================
$('#about-me-burger, #skills-burger, #portfolio-burger, #contact-burger').on('click', function () {
  $('.burger__menu').removeClass('burger__menu-active')
  $('body').removeClass('lock')
})


$('#about-me, #about-me-burger').on('click', function () {
  $('html, body').animate({
    scrollTop: $('.about').offset().top
  }, 800)
  $('.burger').removeClass('burger__active')
})
// </SCROLL NAVIGATION ABOUT ====================================================================


// <SCROLL NAVIGATION SKILLS ====================================================================
$('#skills, #skills-burger').on('click', function () {
  $('html, body').animate({
    scrollTop: $('.skills').offset().top
  }, 800)
  $('.burger').removeClass('burger__active')
  $('.burger__menu ').removeClass('burger__menu-active')
})
// </SCROLL NAVIGATION SKILLS ====================================================================


// <SCROLL NAVIGATION PORTFOLIO ==================================================================
$('#portfolio, #portfolio-burger').on('click', function () {
  $('html, body').animate({
    scrollTop: $('.portfolio').offset().top
  }, 800)
  $('.burger').removeClass('burger__active')
  $('.burger__menu').removeClass('burger__menu-active')
})
// </SCROLL NAVIGATION PORTFOLIO =================================================================


// <SCROLL NAVIGATION CONTACT ====================================================================
$('#contact, #contact-burger').on('click', function () {
  $('html, body').animate({
    scrollTop: $('.contact').offset().top
  }, 800)
  $('.burger').removeClass('burger__active')
  $('.burger__menu').removeClass('burger__menu-active')
})
// </SCROLL NAVIGATION CONTACT ===================================================================


// <INPUT MASK & VALIDATE FORM ===================================================================
let selector = document.querySelectorAll('input[type="tel"]')
let im = new Inputmask('(999) 999-99-99')
im.mask(selector)

let validateForms = function (selector, rules, successModal, yaGoal) {
  new window.JustValidate(selector, {
    rules: rules,
    submitHandler: function (form) {
      let formData = new FormData(form)
      let xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            console.log('send')
          }
        }
      }
      xhr.open('POST', true)
      xhr.send(formData)
      form.reset()
    }
  })
}

validateForms('.contact__form', {
  email: { required: true, email: true },
  tel: { required: true }
}, '.thanks-popup', '.send-goal')

function InvalidMsg(textbox) {

  if (textbox.validity.patternMismatch) {
    textbox.setCustomValidity('please enter 10 numeric value.');
  }
  else {
    textbox.setCustomValidity('');
  }
  return true;
}

$('input').on('input invalid', function () {
  this.setCustomValidity('')
  if (this.validity.valueMissing) {
    this.setCustomValidity("Нет значения")
  }
  if (this.validity.typeMismatch) {
    this.setCustomValidity("Не соответствует типу")
  }
  if (this.validity.patternMismatch) {
    this.setCustomValidity("Не соответствует паттерну")
  }
})
// </INPUT MASK & VALIDATE FORM ===================================================================