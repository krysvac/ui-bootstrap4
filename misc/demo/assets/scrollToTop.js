$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {
        $('#scrollToTop').fadeIn(200);
    } else {
        $('#scrollToTop').fadeOut(200);
    }
});

$(document).ready(function() {
    $('#scrollToTop').click(function() {
        $('html, body').animate(
            {
                scrollTop: 0
            },
            500,
            'swing');
    });
});
