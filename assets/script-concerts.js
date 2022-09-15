var fetchButton = document.getElementById("fetch-button");
console.log(fetchButton);
var TmApiKey = "xmxhrLJvMZqBKtD916sfNNAvKoMgFHUv";
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

// user types in location & getCoffeeApi function is called when the fetchButton is clicked
function getCoffee(event) {
  saveHistory();
// [  event.preventDefault();
//   console.log("click");
//   var city = document.querySelector(".location-search").value;
//   // use Yelp Fusion API key to get list of coffee shops nearby user's location
//   var requestTicketUrl =
//     "https://app.ticketmaster.com/discovery/v2/events.json?segmentId=KZFzniwnSyZfZ7v7nJ&city=" +
//     city +
//     "&apikey=" +
//     TmApiKey;

//   fetch(requestTicketUrl)
//     .then((response) => {
//       console.log(response);
//       return response.json();
//     })
//     .then((data) => {
//       console.log(data);
//       console.log(
//         data._embedded.events[0]._embedded.venues[0].location.latitude
//       );
//     });]

//   // /* Method: GET 
//    Authorization: Bearer 
// */
}

// save search history
function saveHistory(){
  searchHistory3 = localStorage.getItem("key2");
  searchHistory2 = localStorage.getItem("key1");
  searchHistory1 = document.getElementById("location-search").value;
  localStorage.setItem("key1", searchHistory1);
  localStorage.setItem("key2", searchHistory2);
  localStorage.setItem("key3", searchHistory3);
  console.log(searchHistory1)
  console.log(searchHistory2)
  console.log(searchHistory3)
}

// addEventListener activated when user clicks search button, will run the getCoffeeApi function
fetchButton.addEventListener("click", getCoffee);
