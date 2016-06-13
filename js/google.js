
  var googleObj = {};
  var map;
  var styleArray = [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#306166"}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#2ecc71"}]},{"featureType":"poi","stylers":[{"color":"#2ecc71"},{"lightness":-7}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#2ecc71"},{"lightness":-28}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#2ecc71"},{"visibility":"on"},{"lightness":-15}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#2ecc71"},{"lightness":-18}]},{"elementType":"labels.text.fill","stylers":[{"color":"#ffffff"}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#2ecc71"},{"lightness":-34}]},{"featureType":"administrative","elementType":"geometry","stylers":[{"visibility":"on"},{"color":"#333739"},{"weight":0.8}]},{"featureType":"poi.park","stylers":[{"color":"#2ecc71"}]},{"featureType":"road","elementType":"geometry.stroke","stylers":[{"color":"#333739"},{"weight":0.3},{"lightness":10}]}];

  var initMap = function(center) {
    map = new google.maps.Map(document.getElementById('map'), {
      center: center,
      styles: styleArray,
      zoom: 12,
      disableDefaultUI: true
    });
  };

  var createMarkers = function(obj) {
    var markerImg = 'img/marker.png';
    var marker = new google.maps.Marker({
      position: {lat: obj.latitude, lng: obj.longitude},
      map: map,
      title: obj.name,
      icon: markerImg,
      animation: google.maps.Animation.DROP,
    });
    console.log(obj);
    var contentString = '<div id="content">'+
      '<h3 id="markerName" class="firstHeading">' + obj.name + '</h3>' +
      '<div id="imgArea">'+ '<img src=' + obj.image_url + '>' +'</div>'+
      '<h3>' + obj.address + '</h3>' + '<h4>' + obj.display_phone + '</h4>' + '</div>';

    function toggleBounce() {
      if (marker.getAnimation() !== null) {
        marker.setAnimation(null);
      }
    }

    var infoBubble = new InfoBubble({
      map: map,
      content: contentString,
      shadowStyle: 1,
      paddingTop: 0,
      paddingBottom: 0,
      paddingLeft: 15,
      paddingRight: 15,
      marginTop: 0,
      backgroundColor: 'rgba(228, 78, 156, 0.7)',
      borderRadius: 0,
      arrowSize: 10,
      minWidth: 50,
      maxWidth: 150,
      maxHeight: 225,
      borderWidth: 1,
      borderColor: '#2c2c2c',
      disableAutoPan: true,
      hideCloseButton: true,
      arrowPosition: 30,
      backgroundClassName: 'transparent',
      arrowStyle: 2,
      overflow: false
    });

    marker.addListener('mouseover', function() {
      infoBubble.open(map, this);
    });

    marker.addListener('mouseout', function() {
      infoBubble.close();
      marker.setAnimation(null);
    });
  };
