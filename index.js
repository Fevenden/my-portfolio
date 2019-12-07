//handles scroll and scroll animation
function scrollTo(destination) {
  $('html, body').animate({
      scrollTop: $(destination).offset().top
    }, 1000);
}

//when user clicks a nav button screen will scroll to specified location.
function handleNavClick() {
  $('#aboutMeLink').click(function(e) {
    e.preventDefault();
    scrollTo('.aboutMe')
  });

  $('#myProjectsLink').click(function(e) {
    e.preventDefault();
    scrollTo('.projects-box')
  });

  $('.toTop').click(function(e) {
    e.preventDefault();
  });

  $('#skyrimLink').click(function(e) {
    e.preventDefault();
    scrollTo('#project1');
  });
}

//displays or hides dropdown menu when user taps hamburger
function handleHamburgerCLick() {
  $('.hamburger').click(function(e) {
    e.preventDefault();
    $('.hiddenMenu').toggleClass('expose');
  })
}

// when about me clicked will display or hide about me section
function handleAboutMeClick() {
  $('#aboutMeLink2').click(function(e) {
    e.preventDefault();
    $('.aboutMe').toggleClass('hide');
    $('main').toggleClass('center');
  });
}

function init() {
  handleAboutMeClick()
  handleNavClick();
  handleHamburgerCLick();
}

$(init)