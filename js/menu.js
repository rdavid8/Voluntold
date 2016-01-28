var logo = $('#logo');

  logo.on('click', function(){
  if($('.logopullout').attr('id') == 'logopulloutStart') {
    console.log("pulling out");
    $('.logopullout').attr('id', 'logopulloutEnd');
    $('.home').attr('id', 'homeEnd');
    $('.about').attr('id', 'aboutEnd');
    logo.css('opacity', '1');
  } else if ($('.logopullout').attr('id') == 'logopulloutEnd') { //now we clear and assign close ID
      console.log("pulling in");
      $('.logopullout').attr('id', 'logopulloutStart');
      $('.home').attr('id', 'homeStart');
      $('.about').attr('id', 'aboutStart');
      logo.css('opacity', '0');
    }
});

$('.home').on('click', function(){
  window.location = '/';
})
