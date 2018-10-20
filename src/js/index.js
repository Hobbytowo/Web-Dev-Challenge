import $ from 'jquery'

// START smooth scroll

const smoothScroll = sectionTo => {
  const hash = `#${ sectionTo }`

  $('html, body').animate({
    scrollTop: $(hash).offset().top
  }, 600, () => {
    if (sectionTo === 'home') {
      window.location.hash = 0
    } else {
      window.location.hash = hash
    }
  })
}

$('.nav').on('click', e => {
  smoothScroll(e.target.href.split('#')[1])
})

$('.header__btn').on('click', () => {
  smoothScroll('portfolio')
})

// e/o smooth scroll

// START resize sticky nav

$(window).on('scroll', () => {
  if ($(window).scrollTop() > 50) {
    !$('.navbar').hasClass('navbar--resiezed') &&
    $('.navbar').addClass('navbar--resiezed')
  } else {
    $('.navbar').hasClass('navbar--resiezed') &&
    $('.navbar').removeClass('navbar--resiezed')
  }
})
// e/o resize sticky nav
