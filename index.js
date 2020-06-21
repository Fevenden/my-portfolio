//handles scroll and scroll animation
function scrollTo(destination) {
  $('html, body').animate({
      scrollTop: $(destination).offset().top
    }, 1000)
}

//when user clicks a nav button screen will scroll to specified location.
function handleNavClick() {
  $('#aboutMeLink').click(e => {
    e.preventDefault()
    scrollTo('.aboutMe')
  })

  $('#myProjectsLink').click(e => {
    e.preventDefault()
    scrollTo('.projects-box')
  })

  $('.toTop').click(e => {
    e.preventDefault()
  })

  $('#skyrimLink').click(e => {
    e.preventDefault()
    scrollTo('#project1')
  })

  $('#spaceyLink').click(e => {
    e.preventDefault()
    scrollTo('#project2')
  })

  $('#buildTechLink').click(e => {
    e.preventDefault()
    scrollTo('#project3')
  })

  $('#blogiumLink').click(e => {
    e.preventDefault()
    scrollTo('#project4')
  })
}

//displays or hides dropdown menu when user taps hamburger
function handleHamburgerCLick() {
  $('.hamburger').click(e => {
    e.preventDefault()
    $('.hiddenMenu').toggleClass('expose')
  })
}

// when about me clicked will display or hide about me section
function handleAboutMeClick() {
  $('#aboutMeLink2').click(e => {
    e.preventDefault()
    $('.aboutMe').toggleClass('hide')
    $('main').toggleClass('center')
  })
}

function init() {
  handleAboutMeClick()
  handleNavClick();
  handleHamburgerCLick();
}

$(init)