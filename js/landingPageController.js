(function(module){

  var landingPageController = {};

  landingPageController.index = function(){
    // $('#map').hide();
    // $('#form').hide();
    // $('#sidebar').hide();
    $('body').on('click', function(){
      window.location = '/questions';
    })
    $('#f1').addClass('animated fadeInUp');
    $('#f2').addClass('animated fadeInDownBig');
    $('#bg').addClass('animated fadeIn');
    $('#shade').addClass('animated fadeIn');
  };

    module.landingPageController = landingPageController;
})(window);
