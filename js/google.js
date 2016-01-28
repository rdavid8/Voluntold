
  var googleObj = {};
  var map;

  var styleArray = [
    {
        "featureType": "all",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 13
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#000000"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#144b53"
            },
            {
                "lightness": 14
            },
            {
                "weight": 1.4
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "color": "#08304b"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#0c4152"
            },
            {
                "lightness": 5
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#000000"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#0b434f"
            },
            {
                "lightness": 25
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#000000"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#0b3d51"
            },
            {
                "lightness": 16
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "color": "#146474"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "color": "#021019"
            }
        ]
    }
]
  // {
  //     "featureType": "water",
  //     "elementType": "geometry",
  //     "stylers": [
  //         {
  //             "color": "#25004c"
  //         }
  //     ]
  // },
  // {
  //     "featureType": "landscape",
  //     "elementType": "geometry",
  //     "stylers": [
  //         {
  //             "color": "#2ecc71"
  //         }
  //     ]
  // },
  // {
  //     "featureType": "poi",
  //     "stylers": [
  //         {
  //             "color": "#2ecc71"
  //         },
  //         {
  //             "lightness": -7
  //         }
  //     ]
  // },
  // {
  //     "featureType": "road.highway",
  //     "elementType": "geometry",
  //     "stylers": [
  //         {
  //             "color": "#2ecc71"
  //         },
  //         {
  //             "lightness": -28
  //         }
  //     ]
  // },
  // {
  //     "featureType": "road.arterial",
  //     "elementType": "geometry",
  //     "stylers": [
  //         {
  //             "color": "#2ecc71"
  //         },
  //         {
  //             "visibility": "on"
  //         },
  //         {
  //             "lightness": -15
  //         }
  //     ]
  // },
  // {
  //     "featureType": "road.local",
  //     "elementType": "geometry",
  //     "stylers": [
  //         {
  //             "color": "#2ecc71"
  //         },
  //         {
  //             "lightness": -18
  //         }
  //     ]
  // },
  // {
  //     "elementType": "labels.text.fill",
  //     "stylers": [
  //         {
  //             "color": "#ffffff"
  //         }
  //     ]
  // },
  // {
  //     "elementType": "labels.text.stroke",
  //     "stylers": [
  //         {
  //             "visibility": "off"
  //         }
  //     ]
  // },
  // {
  //     "featureType": "transit",
  //     "elementType": "geometry",
  //     "stylers": [
  //         {
  //             "color": "#2ecc71"
  //         },
  //         {
  //             "lightness": -34
  //         }
  //     ]
  // },
  // {
  //     "featureType": "administrative",
  //     "elementType": "geometry",
  //     "stylers": [
  //         {
  //             "visibility": "on"
  //         },
  //         {
  //             "color": "#333739"
  //         },
  //         {
  //             "weight": 0.8
  //         }
  //     ]
  // },
  // {
  //     "featureType": "poi.park",
  //     "stylers": [
  //         {
  //             "color": "#2ecc71"
  //         }
  //     ]
  // },
  // {
  //     "featureType": "road",
  //     "elementType": "geometry.stroke",
  //     "stylers": [
  //         {
  //             "color": "#333739"
  //         },
  //         {
  //             "weight": 0.3
  //         },
  //         {
  //             "lightness": 10
  //         }
  //     ]
  // }
  // ];
  var initMap = function(center) {
    map = new google.maps.Map(document.getElementById('map'), {
      center: center,
      styles: styleArray,
      zoom: 12,
      disableDefaultUI: true
    });
  }

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
        // setTimeout(function(){marker.setAnimation(null); }, 1480);
      }
    }
    var infoBubble = new InfoBubble({
          map: map,
          content: contentString,
          // position: new google.maps.LatLng(-32.0, 149.0),
          shadowStyle: 1,
          padding: 0,
          backgroundColor: 'rgba(228, 78, 156, 0.9)',
          borderRadius: 5,
          arrowSize: 10,
          minWidth: 200,
          // maxWidth: 300,
          borderWidth: 1,
          borderColor: '#2c2c2c',
          disableAutoPan: true,
          hideCloseButton: true,
          arrowPosition: 30,
          backgroundClassName: 'transparent',
          arrowStyle: 2
        });

    marker.addListener('mouseover', function() {
      infoBubble.open(map, this);
      // marker.setAnimation(google.maps.Animation.BOUNCE);
    });

    marker.addListener('mouseout', function() {
      infoBubble.close();
      marker.setAnimation(null);
    });

  }
