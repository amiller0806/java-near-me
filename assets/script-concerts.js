var fetchButton = document.getElementById("fetch-button");
console.log(fetchButton);
var TmApiKey = "o6fBym3hSy1yQMvpswGVAbQ9Wha16tT8";

// user types in location & getConcerts function is called when the fetchButton is clicked
function getConcerts(event) {
  event.preventDefault();
  console.log("click");
  var city = document.querySelector(".location-search").value;
  // use Ticket Master API key to get list of concerts nearby user's location
  var requestTicketUrl =
    "https://app.ticketmaster.com/discovery/v2/events.json?segmentId=KZFzniwnSyZfZ7v7nJ&city=" +
    city +
    "&apikey=" +
    TmApiKey;

  fetch(requestTicketUrl)
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((data) => {
      console.log(data);
      lat = data._embedded.events[0]._embedded.venues[0].location.latitude
      lon = data._embedded.events[0]._embedded.venues[0].location.longitude
      console.log("Lat",
        data._embedded.events[0]._embedded.venues[0].location.latitude
      );
      console.log("lon",
        data._embedded.events[0]._embedded.venues[0].location.longitude
      );
      console.log(data._embedded.events[0].name);
      console.log(data._embedded.events[0]._embedded.venues[0].name);
      displayConcerts(data);
      
      initMap(lat,lon); 
      displayConcerts(data);
    });
}

// display concerts for city
function displayConcerts(data) {
  // for loop to call 10 concerts, and not all 20
  for (let i = 0; i < 10; i++) {
    var concertContainer = document.querySelector(".concert-info");
    var concertCard = document.createElement("div");
    concertCard.setAttribute("class", "concert-card");
    var concertList = document.createElement("ol");
    concertList.className = "concert-list";
    var concertItem = document.createElement("li");
    concertItem.className = "concert-item";
    var concertName = document.createElement("p");
    concertName.setAttribute("class", "concertEl");
    var venue = document.createElement("p");
    venue.setAttribute("class", "concertEl");
    var concertDate = document.createElement("p");
    // var concertImg = document.createElement("img");
    // concertImg.setAttribute("src", "concert-image");
    concertDate.setAttribute("class", "concertEl");
    concertName.textContent = `${data._embedded.events[i].name}`;
    venue.textContent = `Venue: ${data._embedded.events[i]._embedded.venues[0].name}`;
    concertDate.textContent = `Date: ${data._embedded.events[i].dates.start.localDate}`;
    concertItem.append(concertName, venue, concertDate);
    // concertList.append(concertItem);
    concertCard.append(concertItem);
    concertContainer.append(concertCard);
  }
}
// addEventListener activated when user clicks search button, will run the getConcerts function
fetchButton.addEventListener("click", getConcerts);