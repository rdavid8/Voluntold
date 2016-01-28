var logo = $('#logo');
logo.on('click', function(){
  if($('.logopullout').attr('id') == 'logopulloutStart') {
    $('.logopullout').attr('id', 'logopulloutEnd');
    $('.home').attr('id', 'homeEnd');
    $('.about').attr('id', 'aboutEnd');
  } else if ($('.logopullout').attr('id') == 'logopulloutEnd') { //now we clear and assign close ID
    $('.logopullout').attr('id', 'logopulloutStart');
    $('.home').attr('id', 'homeStart');
    $('.about').attr('id', 'aboutStart');
  }
});

$('.home').on('click', function(){
  window.location = '/';
});

$('.about').on('click',function(){
  $('#about').addClass('animated bounceIn').show();
});

$('#x').on('click', function(){
  $('#about').removeClass('animated bounceIn').hide();
});
