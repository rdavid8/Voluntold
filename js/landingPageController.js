(function(module){

  var landingPageController = {};

  landingPageController.index = function(){
    $('#map').hide();
    $('#form').hide();



    $('body').on('click', function(){
      window.location.href = '/questions';
    })

  };

    module.landingPageController = landingPageController;
})(window);
