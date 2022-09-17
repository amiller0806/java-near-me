// Note: This example requires that you consent to location sharing when
// prompted by your browser. If you see the error "The Geolocation service
// failed.", it means you probably did not give permission for the browser to
// locate you.
// Note: This example requires that you consent to location sharing when
// prompted by your browser. If you see the error "The Geolocation service
// failed.", it means you probably did not give permission for the browser to
// locate you.

let map, infoWindow;

function initMap(latValue, lonValue, locations) {

  if (latValue === undefined) {
    latValue = "40.7128";
    lonValue = "-74.0060";
  }

  var myLatLng = { lat: parseFloat(latValue), lng: parseFloat(lonValue) };
  map = new google.maps.Map(document.getElementById("map"), {
    center: myLatLng,
    zoom: 12,
  });
  infoWindow = new google.maps.InfoWindow();

  if (locations) {
    for (let i = 0; i < locations.length; i++) {
      myLatLng = { lat: parseFloat(locations[i].lat), lng: parseFloat(locations[i].lng) };
      new google.maps.Marker({
        position: myLatLng,
        map,
        title: locations[i].name,
      });
    } 
  }


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

          new google.maps.Marker({
            position: pos,
            map,
            title: "My Location"
          });

          map.setZoom(15);

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