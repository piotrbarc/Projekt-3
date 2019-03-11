let map, infoWindow;









    function initMap() {






        //  Add map
        map = new google.maps.Map(document.querySelector('#map'), {


            // default cords 
            // Cracow cords 
          center: {lat: 50.049683, lng: 19.944544},
          zoom: 10
        });

      
       
        //add icon 
        let icon = {
        url: "5.png", 
        scaledSize: new google.maps.Size(50, 50), 
 
        };

        // Add marker
        let marker = new google.maps.Marker({
            position:{lat: 50.049683, lng: 19.944544},
            map:map,
            icon: icon,
            
            
        });

        


        infoWindow = new google.maps.InfoWindow;

        // if user share his location it will change marker cords
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {

            
            let pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };
         

        // showing the user's location accurately
            marker.setPosition(pos);
            
            marker.open(map);
            map.setCenter(pos);
          }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
          });
        } else {
          // Browser doesn't support Geolocation
          handleLocationError(false, infowindow, map.getCenter());
        }
      }


     

    // handle with situation when user did't share his location or his browser doesnt support geolocation
      function handleLocationError(browserHasGeolocation, infoWindow, pos) {
          
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
                              'You need to share your location otherwise it will show default location' :
                              'Change your browser');
        infoWindow.open(map);
      }

