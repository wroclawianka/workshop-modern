class Picture {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.src = `./assets/gallery/${name}`;
    }
}

const pictures = Array(
    new Picture(1, 'IMG_7942.JPG'),
    new Picture(2, 'IMG_7960.JPG'),
    new Picture(3, 'IMG_7965.JPG'),
    new Picture(4, 'IMG_8050.JPG'),
    new Picture(5, 'IMG_0002.JPG'),
    new Picture(6, 'IMG_0004.JPG'),
    new Picture(7, 'IMG_0001.JPG'),
    new Picture(8, 'IMG_0003.JPG'),
    new Picture(9, 'IMG_7947.JPG'),
    new Picture(10, 'IMG_8037.JPG'),
)
const gallery = $('.gallery');
const images = gallery.find('.images');
let galleryItems = [];
let currentPictureId;

(function() {
    createGallery(pictures);
})();

function generateHTML(picture) {
    const html = `<img class="gallery_item" src="${picture.src}" alt="" picture_id="${picture.id}">`;
    galleryItems.push(html);
}

function createGallery(items) {
    pictures.forEach(picture => generateHTML(picture));
    images.html(galleryItems.join(""));
}

// smooth page scrolling
$('a[href*="#"]').click(function(event) {
    var target = $(this.hash)
    if (target.length) {
        event.preventDefault()
        $('html, body').animate({
            scrollTop: target.offset().top - 50
        }, 1500, function() {})
    }
})

// gallery scrolling
$('.scrollleft').click(function() {
    scrollGallery(this, '-=600')
})

$('.scrollright').click(function() {
    scrollGallery(this, '+=600')
})

function scrollGallery(element, value) {
    var gallery = $(element).parents('.gallery')
    var scrollGallery = gallery.children('.scroll-gallery')

    scrollGallery.animate({
        scrollLeft: value
    }, 500, 'easeOutQuad')
}

// gallery overlay
const overlay = $('.overlay')
const overlayImage = overlay.find('img')
const overlayClose = overlay.find('.close')

const items = $('.gallery_item');
items.bind('click', openOverlay);

overlayClose.on('click', closeOverlay)

$(document).keyup(function(e) {
    if (e.keyCode === 27) overlayClose.click();
});

function openOverlay() {
    currentPictureId = $(this).attr('picture_id');
    const src = $(this).attr('src')
    overlayImage.attr('src', src)
    overlay.addClass('open')
}

function closeOverlay() {
    overlay.removeClass('open')
}

//gallery overlay - next, prev picture
const prevPicture = overlay.find('.prev-picture');
const nextPicture = overlay.find('.next-picture');

prevPicture.on('click', showPrevPicture);
nextPicture.on('click', showNextPicture);
overlayImage.on('click', showNextPicture);

function showPrevPicture() {
    const id = (currentPictureId > 1) ? (parseInt(currentPictureId) - 1) : pictures.length;
    showPicture(id);
}

function showNextPicture() {
    const id = (currentPictureId < pictures.length) ? (parseInt(currentPictureId) + 1) : 1;
    showPicture(id);
}

function showPicture(id) {
    currentPictureId = id;
    let picture = pictures.find(pic => pic.id === currentPictureId);
    overlayImage.attr('src', picture.src);
}