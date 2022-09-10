var fetchButton = document.getElementById("fetch-button");

// user types in location & getCoffeeApi function is called when the fetchButton is clicked 
function getCoffee(){
    // use Yelp Fusion API key to get list of coffee shops nearby user's location
    var requestNearbyCoffee =
      "https://api.yelp.com/v3/businesses/search?term=coffee" + "&location=" + location + Authorization:"";
}

// addEventListener activated when user clicks search button, will run the getCoffeeApi function
fetchButton.addEventListener("click", (event)=>{
    event.preventDefault();
    var userInput = document.querySelector(".search-location").ariaValueMax;
    console(userInput);
    getCoffee(userInput);
});