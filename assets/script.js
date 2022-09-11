// FOR GOOGLE MAPS API 

// FOR THE CALL:
// <script
//                         src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAVWPzGgLDuTd7W3azkDzNwO9Jckk348_4&callback=initMap&v=weekly"
//       defer> 
//     </script> 



// GET CURRENT LOCATION
window.initMap = initMap;

let map, infoWindow;

function initGeolocation() {
  map = new google.maps.Map(document.getElementById("map"), {

  });
  infoWindow = new google.maps.InfoWindow();




//     // Try HTML5 geolocation.
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           const place = {
//             lat: position.coords.latitude,
//             lng: position.coords.longitude,
        //   };

//           infoWindow.setPosition(pos);
//           infoWindow.setContent("Location found.");
//           infoWindow.open(map);
//           map.setCenter(pos);
//         },
//         () => {
//           handleLocationError(true, infoWindow, map.getCenter());
//         }
//       );
//     } else {
//       // Browser doesn't support Geolocation
//       handleLocationError(false, infoWindow, map.getCenter());
//     }
//   });
// }

// function handleLocationError(browserHasGeolocation, infoWindow, pos) {
//   infoWindow.setPosition(pos);
//   infoWindow.setContent(
//     browserHasGeolocation
    //   ? "Error: The Geolocation service failed.
//       : "Error: Your browser doesn't support geolocation."
//   );
//   infoWindow.open(map);
// }

// window.initMap = initMap;

