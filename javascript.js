let map;
let infoWindow;
let icon;
let marker;

    function initMap() {






        //  Add map
        map = new google.maps.Map(document.querySelector('#map'), {


            // default cords 
            // Cracow cords 
          center: {lat: 50.049683, lng: 19.944544},
          zoom: 10
        });

      
       
        //add icon 
         icon = {
        url: "5.png", 
        scaledSize: new google.maps.Size(50, 50), 
 
        };

        // Add marker
         marker = new google.maps.Marker({
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
            
           
            map.setCenter(pos);
          }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
          });
        } else {
          // Browser doesn't support Geolocation
          handleLocationError(false, infowindow, map.getCenter());
        }

      

     
       

    }


    // move marker using keyboard arrows
    window.addEventListener("keydown", function (e) {

      let cordLat = marker.position.lat()
      let cordLng = marker.position.lng()
      let newPos;
     
      switch (e.keyCode) {
        // left arrow
        case 37:
        newPos = new google.maps.LatLng(cordLat , cordLng - 0.01)
        // set position and center map on marker 
      marker.setPosition(newPos)
       map.setCenter(newPos)
          break;
          // up arrow
        case 38:
        newPos = new google.maps.LatLng(cordLat+ 0.01 , cordLng )
        marker.setPosition(newPos)
         map.setCenter(newPos)
        // down arrow
          break;
        case 40:
        newPos = new google.maps.LatLng(cordLat- 0.01, cordLng )
        marker.setPosition(newPos)
         map.setCenter(newPos)
          
          break;
          // right arrow
        case 39:
        newPos = new google.maps.LatLng(cordLat, cordLng + 0.01)
        
        marker.setPosition(newPos)
         map.setCenter(newPos)
          
          break;
}
})


   


    

     

    // handle with situation when user did't share his location or his browser doesnt support geolocation
      function handleLocationError(browserHasGeolocation, infoWindow, pos) {
          
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
                              'You need to share your location otherwise it will show default location' :
                              'Change your browser');
        infoWindow.open(map);
      }

