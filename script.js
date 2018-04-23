$(function() {
    adjustBodyToWidth();
    adjustNavigationToWidth();
});

window.onresize = function(event) {
    adjustBodyToWidth();
    adjustNavigationToWidth();
};

$('.scrollleft').click(function() {
    scrollGallery(this, '-=400')
});

$('.scrollright').click(function() {
    scrollGallery(this, '+=400')
});

// adjust element to width
function adjustElementToWidth(elementToChange, classToChange, widthOfChange) {
    (window.innerWidth <= widthOfChange) ?
    ($(elementToChange).addClass(classToChange)) :
    ($(elementToChange).removeClass(classToChange));
}

//adjusting elements to width of window
function adjustBodyToWidth() {
    adjustElementToWidth("body", "short", 760);
}

//ajust navigation
function adjustNavigationToWidth() {
    adjustElementToWidth(".service-items", "not-displayed", 1035);
    adjustElementToWidth(".contact-items", "not-displayed", 500);
}

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
    var scrollGallery = gallery.children(".scroll-gallery");

    scrollGallery.animate({
        scrollLeft: value
    }, 500, 'easeOutQuad');
}