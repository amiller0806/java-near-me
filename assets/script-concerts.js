var fetchButton = document.getElementById("fetch-button");
var TmApiKey = "o6fBym3hSy1yQMvpswGVAbQ9Wha16tT8";
var searchHistory1 = ""
var searchHistory2 = ""
var searchHistory3 = ""

// bring saved history data from localstorage and write text on the web page
$(function(){ 
  for (i=1; i<4; i++){ 
      if (localStorage.getItem("key"+(i).toString()) != "null"){
        document.getElementById("searchHistory-row" + (i).toString()).innerHTML = localStorage.getItem("key"+(i).toString()); 
      } 
  }
  // window.localStorage.clear();
})

// user types in location & getConcerts function is called when the fetchButton is clicked
function getConcerts(event) {
  saveHistory();
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


      displayConcerts(data);
    });
    updateHistory();
  }

//update search history
function updateHistory(){
  for (i=1; i<4; i++){ 
    if (localStorage.getItem("key"+(i).toString()) != "null"){
      document.getElementById("searchHistory-row" + (i).toString()).innerHTML = localStorage.getItem("key"+(i).toString()); 
    } 
  }
}

// display concerts for city
function displayConcerts(data) {
  var concertContainer = document.querySelector("#concert-info");
  concertContainer.textContent = "";
  var coordinatesArr = [];
  // for loop to call 10 concerts, and not all 20
  for (let i = 0; i < 10; i++) {
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

    var locationData = {
      lat: data._embedded.events[i]._embedded.venues[0].location.latitude,
      lng: data._embedded.events[i]._embedded.venues[0].location.longitude,
      name: data._embedded.events[i]._embedded.venues[0].name,
    }

    coordinatesArr.push(locationData);
  }
  initMap(coordinatesArr[0].lat, coordinatesArr[0].lng, coordinatesArr);
}

function saveHistory(){
  searchHistory3 = localStorage.getItem("key2");
  searchHistory2 = localStorage.getItem("key1");
  searchHistory1 = document.getElementById("location-search").value;
  localStorage.setItem("key1", searchHistory1);
  localStorage.setItem("key2", searchHistory2);
  localStorage.setItem("key3", searchHistory3);
}


// addEventListener activated when user clicks search button, will run the getConcerts function
fetchButton.addEventListener("click", getConcerts);

