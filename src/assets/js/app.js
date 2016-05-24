$(document).foundation();

$(document).ready(function() {
  $('.owl-plakatok').owlCarousel({
      navigation : true,
      // navigationText: ['<i class="icon icon--chevron-left"></i>','<i class="icon icon--chevron-right"></i>'],
      pagination: false,
      paginationSpeed : 400,
      singleItem:true,
      autoHeight: true,
  });


$('.owl-plakatok').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
      titleSrc: function(item) {
        return item.el.find('img').attr('alt') + '<small>by nami 2017</small>';
      }
    }
  });
});