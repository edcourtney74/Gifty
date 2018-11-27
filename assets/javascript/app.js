// GLOBAL VARIABLES

// FUNCTIONS
$(document).ready(function () {


// CLICK FUNCTIONS
    // Retrieve values from search on search.html
    $("#search-search").on("click", function(event) {
        // event.preventDefault() prevents the form from trying to submit itself.
        event.preventDefault();

        // Create variable containing user keywords
        var keywords = $("#keyword-search").val().trim();

        // Create variable containing user min price
        var minPrice = $("#minprice-search").val().trim();

        // Create variable containing user max price
        var maxPrice = $("#maxprice-search").val().trim(); 

        // Create Etsy queryURL for API requests
        queryURL = "https://openapi.etsy.com/v2/listings/active?api_key=jydjjl78x1gb73jboqntx9o1&keywords=" + keywords + "&min_price=" + minPrice + "&max_price=" + maxPrice + "&includes=MainImage";

        // Creat AJAX Etsy request based on user submission
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(resEtsy) {
            console.log(resEtsy);
            
            // For loop to:  
            for (let i = 0; i < 4; i++) {
                // Create variables needed
                var title = resEtsy.results[i].title;
                console.log("Title: " + title);
                var description = resEtsy.results[i].description;
                console.log("Description: " + description);
                var itemURL = resEtsy.results[i].url;
                console.log("URL: " + itemURL);
                var image = resEtsy.results[i].MainImage.url_fullxfull;
                console.log("Image URL: " + image);
                console.log("-----------------------------");
                
                // Create itemImage to display in HTML
                var itemImage = $("<img>");

                // Add image source and responsive-img class
                itemImage.attr("src", image).addClass("responsive-img");

                // Creat URL to display in HTML
                var displayURL = $("<a>").attr("href", itemURL).attr("target", "_blank");
                
                // Create text to display in HTML
                var displayText = $("<h5>").text(title);

                // Add displayText to displayURL
                displayURL.append(displayText);

                // Append image, url & text to HTML - NEEDS UPDATED WITH NEW ID
                $(".results").append(itemImage).append(displayURL);                          
            }        
            })
        
    })

        // Create eBay queryURL for API requests
        // Create AJAX eBay request based on user submission


});
