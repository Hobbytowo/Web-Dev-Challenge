import $ from 'jquery'

// START smooth scroll

const smoothScroll = sectionTo => {
  const hash = `#${ sectionTo }`

  if (sectionTo === 'home') {
    $('html, body').animate({
      scrollTop: 0
    }, 600)
  } else {
    $('html, body').animate({
      scrollTop: ($(hash).offset().top - $('.navbar').height())
    }, 600)
  }

  window.location.hash = hash
}

$('.nav').on('click', e => {
  e.target.href &&
  smoothScroll(e.target.href.split('#')[1])
})

$('.header__btn').on('click', () => {
  smoothScroll('portfolio')
})

$('.contact__btn').on('click', () => {
  smoothScroll('contact')
})

// e/o smooth scroll

// START scroll events

const topStartAnimante = $('.blog').offset().top - $(window).height()
const topStopAnimante = $('.blog').offset().top + 2 * $(window).height()
const gear = $('.blog__img')
let lastScrollTop = 0
let rotateDeg = 0

$(window).on('scroll', () => {
  // START resize sticky nav
  if ($(window).scrollTop() > 50) {
    !$('.navbar').hasClass('navbar--resiezed') &&
    $('.navbar').addClass('navbar--resiezed')
  } else {
    $('.navbar').hasClass('navbar--resiezed') &&
    $('.navbar').removeClass('navbar--resiezed')
  }
  // e/o resize sticky nav

  // START gear animation

  if ($(window).scrollTop() > topStartAnimante && $(window).scrollTop() < topStopAnimante) {
    let currentScrollTop = $(window).scrollTop()

    if (currentScrollTop > lastScrollTop) { // on downscroll
      rotateDeg -= 3
      gear.css({
        'transform': `
          rotate3d(0, 0, 1, ${ rotateDeg }deg)
          translate3d(50%, 0, 0)
          `
      })
    } else { // on upscroll
      rotateDeg += 3
      gear.css({
        'transform': `
          rotate3d(0, 0, 1, ${ rotateDeg }deg)
          translate3d(50%, 0, 0)
          `
      })
    }

    lastScrollTop = currentScrollTop
  }

  // e/o gear animation
})

// e/o scroll events

// START hamburger menu

$('.nav__icon').on('click', () => {
  $('.nav').toggleClass('nav--close')
})

$('.nav__listItem').on('click', e => {
  !$('.nav').hasClass('nav--close') &&
  $('.nav').addClass('nav--close')
})

// e/o hamburger menu
