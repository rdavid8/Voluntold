(function(module){

  var landingPageController = {};

  landingPageController.index = function(){
    $('#logo').addClass('animated fadeInLogo');
    $('#wrapper').one('click', function(){
      $('#qtrigger').trigger('click');
    })
    $('#f1').addClass('animated fadeInUp');
    $('#f2').addClass('animated fadeInDownBig');
    $('#bg').addClass('animated fadeIn');
    $('#shade').addClass('animated fadeIn');
  };

    module.landingPageController = landingPageController;
})(window);
