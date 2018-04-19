//smooth page scrolling
$('a[href*="#"]').click(function(event) {
    var target = $(this.hash);
    if (target.length) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top - 50
        }, 1000, function() {});
    }
});

//gallery scrolling
function scrollGallery(element, value) {
    var gallery = $(element).parents(".gallery");
    var scrollGallery = gallery.children(".scroll-gallery")

    scrollGallery.animate({
        scrollLeft: value
    }, 500, 'easeOutQuad');
}

$('.scrollleft').click(function() {
    scrollGallery(this, '-=400')
});

$('.scrollright').click(function() {
    scrollGallery(this, '+=400')
});