
  var googleObj = {};
  var map;

  var styleArray = [
    {
      'featureType': 'all',
      'elementType': 'labels.text.fill',
      'stylers': [
        {
          'color': '#ffffff'
        }
      ]
    },
    {
      'featureType': 'all',
      'elementType': 'labels.text.stroke',
      'stylers': [
        {
          'color': '#000000'
        },
        {
          'lightness': 13
        }
      ]
    },
    {
      'featureType': 'administrative',
      'elementType': 'geometry.fill',
      'stylers': [
        {
          'color': '#000000'
        }
      ]
    },
    {
      'featureType': 'administrative',
      'elementType': 'geometry.stroke',
      'stylers': [
        {
          'color': '#144b53'
        },
        {
          'lightness': 14
        },
        {
          'weight': 1.4
        }
      ]
    },
    {
      'featureType': 'landscape',
      'elementType': 'all',
      'stylers': [
        {
          'color': '#08304b'
        }
      ]
    },
    {
      'featureType': 'poi',
      'elementType': 'geometry',
      'stylers': [
        {
          'color': '#0c4152'
        },
        {
          'lightness': 5
        }
      ]
    },
    {
      'featureType': 'road.highway',
      'elementType': 'geometry.fill',
      'stylers': [
        {
          'color': '#000000'
        }
      ]
    },
    {
      'featureType': 'road.highway',
      'elementType': 'geometry.stroke',
      'stylers': [
        {
          'color': '#0b434f'
        },
        {
          'lightness': 25
        }
      ]
    },
    {
      'featureType': 'road.arterial',
      'elementType': 'geometry.fill',
      'stylers': [
        {
          'color': '#000000'
        }
      ]
    },
    {
      'featureType': 'road.arterial',
      'elementType': 'geometry.stroke',
      'stylers': [
        {
          'color': '#0b3d51'
        },
        {
          'lightness': 16
        }
      ]
    },
    {
      'featureType': 'road.local',
      'elementType': 'geometry',
      'stylers': [
        {
          'color': '#000000'
        }
      ]
    },
    {
      'featureType': 'transit',
      'elementType': 'all',
      'stylers': [
        {
          'color': '#146474'
        }
      ]
    },
    {
      'featureType': 'water',
      'elementType': 'all',
      'stylers': [
        {
          'color': '#021019'
        }
      ]
    }
  ];

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

    var contentString = '<div id="content">'+
      '<h3 id="markerName" class="firstHeading">' + obj.name + '</h3>' +
      '<div id="imgArea">'+ '<img src=' + obj.image_url + '>' +'</div>'+
      '</div>';

    function toggleBounce() {
      if (marker.getAnimation() !== null) {
        marker.setAnimation(null);
      } else {
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
      // maxHeight: 170,
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
      // marker.setAnimation(google.maps.Animation.BOUNCE);
    });

    marker.addListener('mouseout', function() {
      infoBubble.close();
      marker.setAnimation(null);
    });

  };
