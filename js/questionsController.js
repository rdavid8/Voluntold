(function(module){

  var questionsController = {};

  questionsController.index = function(){
    // $('#sidebar').hide();
    // $('#map').hide();
    $('#shade').addClass('animated fadeOut');
    $('#f1').addClass('animated fadeOutRightBig');
    $('#f2').addClass('animated fadeOutLeftBig');
    $('#bg').addClass('animated fadeOut');
    $('#q1').show().siblings().hide();
    $('#form').show();


    $('form').on('click', 'li.cs-selected span', function(){
        questionsController.term = $("#term").val();
        console.log(questionsController.term);
        $('#q1').addClass('animated fadeOutUp');
        $('#q2').addClass('animated fadeInDown').show();
        $('#submit2').hide();
    });


    $('#submit2').on('click', function(e){
      e.preventDefault();
      questionsController.location = $("#location").val();
      console.log(questionsController.location);
      $('#form').hide();
      yelp.ajaxCall(Location.loadAll);
      $('#map').addClass('animated fadeIn').show();
      $('#sidebar').addClass('animated fadeInRight').show();
    });

  };

    module.questionsController = questionsController;
})(window);
