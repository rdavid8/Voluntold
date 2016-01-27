(function(module){

  var questionsController = {};

  questionsController.index = function(){
    // $('#sidebar').hide();
    // $('#map').hide();
    $('#shade').addClass('blue');;
    $('#f1').addClass('animated fadeOutRightBig');
    $('#f2').addClass('animated fadeOutLeftBig');
    $('#bg').addClass('animated fadeOut');
    $('#bg2').addClass('animated fadeIn').show();
    $('#q1').addClass('animated fadeInDown').show().siblings().hide();
    $('#form').show();


    $('form').on('click', 'li.cs-selected span', function(){
        questionsController.term = $("#term").val();
        console.log(questionsController.term);
        $('#shade').addClass('purp');
        $('#q1').addClass('animated fadeOutUp');
        $('#q2').addClass('animated fadeInUp').show();
        $('#bg2').addClass('animated fadeOut');
        $('#bg3').addClass('animated fadeIn').show();
        $('#submit2').hide();
    });


    $('#submit2').on('click', function(e){
      e.preventDefault();
      questionsController.location = $("#location").val();
      console.log(questionsController.location);
      $('#form').hide();
      yelp.ajaxCall(Location.prepResults); //This will be our new function call to trigger page.js
    });

  };

    module.questionsController = questionsController;
})(window);
