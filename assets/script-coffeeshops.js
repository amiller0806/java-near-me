var fetchButton = document.getElementById("fetch-button");
console.log(fetchButton);
var TmApiKey = "xmxhrLJvMZqBKtD916sfNNAvKoMgFHUv";

// user types in location & getCoffeeApi function is called when the fetchButton is clicked
function getCoffee(event) {
  event.preventDefault();
  console.log("click");
  var city = document.querySelector(".location-search").value;
  // use Yelp Fusion API key to get list of coffee shops nearby user's location
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
    });

  /* Method: GET 
   Authorization: Bearer 
*/
}

// addEventListener activated when user clicks search button, will run the getCoffeeApi function
fetchButton.addEventListener("click", getCoffee);
