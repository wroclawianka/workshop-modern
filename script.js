    //smooth scrolling
    $('a[href*="#"]').click(function(event) {
        var target = $(this.hash);
        if (target.length) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top - 50
            }, 1000, function() {});
        }
    });
    //gallery buttons - uwaga, bedziesz miec dwie takie (parenty itd)
    $('.scrollleft').click(function() {
        console.log('to the left')
        $('#scrollbar').animate({
            scrollLeft: '-=400'
        }, 500, 'easeOutQuad');
    });
    $('.scrollright').click(function() {
        console.log('to the right')
        $('#scrollbar').animate({
            scrollLeft: '+=400'
        }, 500, 'easeOutQuad');
    });