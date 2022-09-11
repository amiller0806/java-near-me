var fetchButton = document.getElementById("fetch-button");
console.log(fetchButton);
var TmApiKey = "o6fBym3hSy1yQMvpswGVAbQ9Wha16tT8";

// user types in location & getCoffeeApi function is called when the fetchButton is clicked
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
      console.log(
        data._embedded.events[0]._embedded.venues[0].location.latitude
      );
      console.log(
        data._embedded.events[0]._embedded.venues[0].location.longitude
      );
      console.log(data._embedded.events[0].name);
      console.log(data._embedded.events[0]._embedded.venues[0].name);
      displayConcerts(data);
    });
}

// display concerts for city
function displayConcerts(data) {
  var concertContainer = document.querySelector(".concert-info");
  // for loop to call 10 concerts, and not all 20
  for (let i = 0; i < 10; i++) {
    var concertCard = document.createElement("div");
    concertCard.setAttribute("class", "concert-card");
    var concertItem = document.createElement("div");
    concertItem.setAttribute("class", "concert-item");
    var concertName = document.createElement("p");
    concertName.setAttribute("class", "concertEl");
    var venue = document.createElement("p");
    venue.setAttribute("class", "concertEl");
    var concertDate = document.createElement("p");
    var concertImg = document.createElement("img");
    concertImg.setAttribute(
      "src",
      "https://app.ticketmaster.com" +
        data._embedded.events[i].images[0].url +
        ".png"
    );
    console.log(concertImg);
    concertDate.setAttribute("class", "concertEl");
    concertName.textContent = `${data._embedded.events[i].name}`;
    venue.textContent = `Venue: ${data._embedded.events[i]._embedded.venues[0].name}`;
    concertDate.textContent = `Date: ${data._embedded.events[i].dates.start.localDate}`;
    concertItem.append(concertName, venue, concertDate);
    concertCard.append(concertItem);
    concertContainer.append(concertCard);
  }
}
// addEventListener activated when user clicks search button, will run the getConcerts function
fetchButton.addEventListener("click", getConcerts);
