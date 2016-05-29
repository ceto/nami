$(document).foundation();

$(document).ready(function() {
  var carousel = $('.owl-plakatok');

  carousel.owlCarousel({
      navigation : true,
      navigationText: ['<i class="icon icon--arrow-left"></i>','<i class="icon icon--arrow-right"></i>'],
      pagination: true,
      paginationSpeed : 400,
      singleItem:true,
      autoHeight: true,
  });

  if (window.location.hash) {
    $('.top-bar > .row').foundation('scrollToLoc', '#owl-plakatok');
    var no = window.location.hash.split('#');
    carousel.trigger('owl.jumpTo', no[1]-1);
    //alert(no[1]-1);
  }


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
