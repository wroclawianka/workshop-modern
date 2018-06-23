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

// gallery overlay
const overlay = $('.overlay')
const overlayImage = $('.overlay').find('img')
const overlayClose = overlay.find('.close')
let picture

function openOverlay () {
  const src = $(this).attr('src')
  overlayImage.attr('src', src)
  overlay.addClass('open')
}

function closeOverlay () {
  overlay.removeClass('open')
}

const items = $('.gallery_item')
$('.gallery_item').bind('click', openOverlay)

overlayClose.on('click', closeOverlay)
