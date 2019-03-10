let map, infoWindow;


    function initMap() {
        map = new google.maps.Map(document.querySelector('#map'), {


            // default cords 
            // Cracow cords 
          center: {lat: 50.049683, lng: 19.944544},
          zoom: 10
        });
        infoWindow = new google.maps.InfoWindow;

        
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {

            // if user share his location it will change map position
            let pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };
         

        // showing the user's location accurately
            infoWindow.setPosition(pos);
            infoWindow.setContent('Your Location');
            infoWindow.open(map);
            map.setCenter(pos);
          }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
          });
        } else {
          // Browser doesn't support Geolocation
          handleLocationError(false, infowindow, map.getCenter());
        }
      }

    
      function handleLocationError(browserHasGeolocation, infoWindow, pos) {
          // handle with situation when user did't share his location or his browser doesnt support geolocation
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
                              'You need to share your location otherwise it will show default location' :
                              'Change your browser');
        infoWindow.open(map);
      }

