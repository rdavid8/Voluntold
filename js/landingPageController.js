(function(module){

  var landingPageController = {};

  landingPageController.index = function(){
    $('#map').hide();
    $('#form').hide();
    $('#sidebar').hide();
    $('body').on('click', function(){
      window.location.href = '/questions';
    })

    $('#f1').addClass('animated slideInRight');
    $('#f2').addClass('animated slideInLeft');
    $('#bg').addClass('animated fadeIn');

  };

    module.landingPageController = landingPageController;
})(window);
