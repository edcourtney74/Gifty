// GLOBAL VARIABLES

// FUNCTIONS
$(document).ready(function () {


// CLICK FUNCTIONS
    // Retrieve values from search on search.html
    $("#search-search").on("click", function(event) {
        // event.preventDefault() prevents the form from trying to submit itself.
        event.preventDefault();

        // Create variable containing user keywords
        var keywords = $("#keyword-index").val().trim();

        // Create variable containing user min price
        var minPrice = $("#minprice-index").val().trim();

        // Create variable containing user max price
        var maxPrice = $("#maxprice-index").val().trim(); 

        // Create Etsy queryURL for API requests
        queryURL = "https://openapi.etsy.com/v2/listings/active?api_key=jydjjl78x1gb73jboqntx9o1&keywords=" + keywords + "&min_price=" + minPrice + "&max_price=" + maxPrice;
        console.log("Query URL: " + queryURL);

        // Creat AJAX Etsy request based on user submission
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (res) {
            console.log(res);
        }
    
    }) 


});
