// Open and closed menu funtions when clicking on the icon: Hambúrguer e x.

const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

//when clicking on the items menu, hide the menu.

const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

//HEAD SHADOW WHEN USING ROLLER
//form 1

const header = document.querySelector('#header')
const navheight = header.offsetHeight

function changeHeaderWhenScroll() {
  if (window.scrollY >= navheight) {
    //Scroll é maior que a altura do header
    header.classList.add('scroll')
  } else {
    //Menor que a altura do header
    header.classList.remove('scroll')
  }
}

window.addEventListener('scroll', function () {
  changeHeaderWhenScroll()
})

//TESTIMONIALS CAROUSEL SLIDER SWIPER
const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mouseWheel: true,
  keyboard: true,

  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
})

//SCROLLREVEAL=HIDE ELEMENTS
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 300,
  reset: true
})

scrollReveal.reveal(
  `#home .image, #home .text,
  #about .image, #about .text,
  #services header, #services .card,
  #testimonials header, #testimonials .testimonials,
  #contact .text, #contact .links,
  footer .brand, footer .social`,
  { interval: 100 }
)

//BUTTOM FOR THE TOP
//form 2

const backToTopButton = document.querySelector('.back-to-top')

window.addEventListener('scroll', function () {
  if (window.scrollY >= 560) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
})

//activate Menu Atual Current Section

const sections = document.querySelectorAll('main section[id]')
function activateMenuAtCurrentSection() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active')
    }
  }
}

window.addEventListener('scroll', function () {
  activateMenuAtCurrentSection()
})
