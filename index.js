function scrollTo(destination) {
    $('html, body').animate({
        scrollTop: $(destination).offset().top
     }, 1000);
}

function handleClickContact() {
$('.contactLink').click(function(e) {
    e.preventDefault()
    scrollTo("header")
})
}

function init() {
    handleClickContact()
}

$(init)