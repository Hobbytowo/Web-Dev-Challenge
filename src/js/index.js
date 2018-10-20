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
