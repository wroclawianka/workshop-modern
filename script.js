const galleryPath = './assets/gallery/';
const gallery = $('.gallery');
const images = gallery.find('.images');
const pictures = [
    'IMG_7942.JPG',
    'IMG_7960.JPG',
    'IMG_7965.JPG',
    'IMG_8050.JPG',
    'IMG_0002.JPG',
    'IMG_0004.JPG',
    'IMG_0001.JPG',
    'IMG_0003.JPG',
    'IMG_7947.JPG',
    'IMG_8037.JPG'
];
let galleryItems = [];

(function () {
    createGallery(pictures);
})();

function generateHTML(element){
    const src = galleryPath + element
    const html = `<img class="gallery_item" src="${src}" alt="">`;
    galleryItems.push(html);
}

function createGallery(items){
    pictures.forEach(generateHTML);
    // galleryItems.join("");
    images.html(galleryItems.join(""));
}

// smooth page scrolling
$('a[href*="#"]').click(function (event) {
  var target = $(this.hash)
  if (target.length) {
    event.preventDefault()
    $('html, body').animate({
      scrollTop: target.offset().top - 50
    }, 1000, function () {})
  }
})

// gallery scrolling
$('.scrollleft').click(function () {
  scrollGallery(this, '-=400')
})

$('.scrollright').click(function () {
  scrollGallery(this, '+=400')
})

function scrollGallery (element, value) {
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

const items = $('.gallery_item')
$('.gallery_item').bind('click', openOverlay)

overlayClose.on('click', closeOverlay)

function openOverlay () {
  const src = $(this).attr('src')
  overlayImage.attr('src', src)
  overlay.addClass('open')
}

function closeOverlay () {
  overlay.removeClass('open')
}
