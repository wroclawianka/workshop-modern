$('.scrollleft').click(function () {
  scrollGallery(this, '-=400')
})

$('.scrollright').click(function () {
  scrollGallery(this, '+=400')
})

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
function scrollGallery (element, value) {
  var gallery = $(element).parents('.gallery')
  var scrollGallery = gallery.children('.scroll-gallery')

  scrollGallery.animate({
    scrollLeft: value
  }, 500, 'easeOutQuad')
}

// gallery
const overlay = document.querySelector('.overlay');
const overlayImage = overlay.querySelector('img');
const overlayClose = overlay.querySelector('.close');

function handleClick (e) {
  const src = e.currentTarget.src
  overlayImage.src = src
  overlay.classList.add('open')
}

function close () {
  overlay.classList.remove('open')
}

const items = document.querySelectorAll('.gallery_item');

items.forEach(item => item.addEventListener('click', handleClick));

overlayClose.addEventListener('click', close);
