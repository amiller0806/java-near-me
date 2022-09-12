// Note: This example requires that you consent to location sharing when
// prompted by your browser. If you see the error "The Geolocation service
// failed.", it means you probably did not give permission for the browser to
// locate you.
// Note: This example requires that you consent to location sharing when
// prompted by your browser. If you see the error "The Geolocation service
// failed.", it means you probably did not give permission for the browser to
// locate you.

let map, infoWindow;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 6,
  });
  infoWindow = new google.maps.InfoWindow();

  const locationButton = document.createElement("button");

  locationButton.textContent = "Pan to Current Location";
  locationButton.classList.add("custom-map-control-button");
  map.controls[google.maps.ControlPosition.TOP_CENTER].push(locationButton);
  locationButton.addEventListener("click", () => {
    // Try HTML5 geolocation.
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };

          infoWindow.setPosition(pos);
          infoWindow.setContent("Location found.");
          infoWindow.open(map);
          map.setCenter(pos);
        },
        () => {
          handleLocationError(true, infoWindow, map.getCenter());
        }
      );
    } else {
      // Browser doesn't support Geolocation
      handleLocationError(false, infoWindow, map.getCenter());
    }
  });
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(
    browserHasGeolocation
      ? "Error: The Geolocation service failed."
      : "Error: Your browser doesn't support geolocation."
  );
  infoWindow.open(map);
}

window.initMap = initMap;


//-------------------------------------------------------------------------------------------------------------


// FOR THE CALL:
// <script
//                         src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAVWPzGgLDuTd7W3azkDzNwO9Jckk348_4&callback=initMap&v=weekly"
//       defer> 
//     </script> 

// fetch 

















// 




// window.initMap = initMap;

// let map, infoWindow;

// function initGeolocation() {
//   map = new google.maps.Map(document.getElementById("map"), {

//   });
//   infoWindow = new google.maps.InfoWindow();



// async getConcertLocations{ commit } {
//   const res_concerts = await fetch(
// "https://app.ticketmaster.com/discovery/v2/events.json?segmentId=KZFzniwnSyZfZ7v7nJ&city=" +
// city +
// "&apikey=" +
// TmApiKey;


//   const { results } = await resConcertLocations.json();
//   commit('updatePlaces', results); 

//   // Fetch geolocation and display
//   const res_ConcertLocations = await fetch(
// https://maps.googleapis.com/maps/api/geocode/json?latlng=40.7128,74.0060&key=AIzaSyAVWPzGgLDuTd7W3azkDzNwO9Jckk348_4 

//   );
//   const { map } = await res_map.json();

//   const mapWithconcertlocations = results.map( ({map_ids, ...rest}) => ({...rest, map_ids: map_ids.map(id => map.find(map => map.id === id).name )}) )

//   console.log(mapWithconcertlocations);
// },



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
    // browserHasGeolocation
    //   ? "Error: The Geolocation service failed.
//       : "Error: Your browser doesn't support geolocation."
//   );
//   infoWindow.open(map);
// }

// window.initMap = initMap;

