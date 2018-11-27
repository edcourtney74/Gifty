// GLOBAL VARIABLES

// FUNCTIONS
$(document).ready(function () {


// CLICK FUNCTIONS
    // Retrieve values from search on search.html
    $("#search-search").on("click", function(event) {
        // event.preventDefault() prevents the form from trying to submit itself.
        event.preventDefault();

        // VARIABLES FOR API REQUESTS=======================================
        
        // Create variable containing user keywords
        var keywords = $("#keyword-search").val().trim();

        // Create variable containing user min price
        var minPrice = $("#minprice-search").val().trim();

        // Create variable containing user max price
        var maxPrice = $("#maxprice-search").val().trim(); 
        
        // Create variable for Etsy URL
        queryEtsyURL = "https://openapi.etsy.com/v2/listings/active?api_key=jydjjl78x1gb73jboqntx9o1&keywords=" + keywords + "&min_price=" + minPrice + "&max_price=" + maxPrice + "&includes=MainImage";
        
        // Create eBay queryURL for API requests
        queryEbayURL = "https://svcs.ebay.com/services/search/FindingService/v1?OPERATION-NAME=findItemsByKeywords&SERVICE-VERSION=1.0.0&SECURITY-APPNAME=EdCourtn-Gifty-PRD-dc2330105-18ab1ff8&RESPONSE-DATA-FORMAT=JSON&REST-PAYLOAD&keywords=" + keywords + "&itemFilter.name=MinPrice&itemFilter.value=" + minPrice + "&itemFilter.name=MaxPrice&itemFilter.value=" + maxPrice + "&itemFilter.paramName=Currency&itemFilter.paramValue=USD";
        // &paginationInput.entriesPerPage=10";
        
        // ETSY API REQUEST & DISPLAY =========================================
        
        // Create AJAX Etsy request based on user submission
        $.ajax({
            url: queryEtsyURL,
            method: "GET"
        }).then(function(resEtsy) {
            console.log(resEtsy);
            // For loop to:  
            for (let i = 0; i < 4; i++) {
                // Create variables needed
                var title = resEtsy.results[i].title;
                var description = resEtsy.results[i].description;
                var itemURL = resEtsy.results[i].url;
                var image = resEtsy.results[i].MainImage.url_fullxfull;
                var price = resEtsy.results[i].price;
                
                // Create overall div to display in HTML and can be clicked to add to shopping cart
                var itemDiv = $("<div>")

                // Add display-item class to div to grab when adding to shopping cart
                itemDiv.addClass("display-item");
                
                // Create itemImage to attach to itemDiv
                var itemImage = $("<img>");

                // Add image source and responsive-img class
                itemImage.attr("src", image).addClass("responsive-img");

                // Creat URL to display in HTML
                var displayURL = $("<a>").attr("href", itemURL).attr("target", "_blank");
                
                // Create text to display in HTML
                var displayText = $("<h5>").text(title);

                // Add displayText to displayURL
                displayURL.append(displayText);

                // Add $ to price
                var displayPrice = "$" + price;

                // Append image, URL, text, price to itemDiv
                itemDiv.append(itemImage).append(displayURL).append(displayPrice);              
            
                // Append itemDiv to HTML
                $("#columnone").append(itemDiv);                          
            }        
        });

        // EBAY API REQUEST & DISPLAY =========================================
        // Creat AJAX eBay request based on user submission
        $.ajax({
            url: queryEbayURL,
            method: "GET"
        }).then(function(resEbay) {
            
            // API comes back as a string, need to parse 
            var ebayobj = JSON.parse(resEbay);
            // Variable for itemArray to run the for loop for
            var itemsArray = ebayobj.findItemsByKeywordsResponse[0].searchResult[0].item;

            // For loop to:  
            for (let x = 0; x < 4; x++) {
                // Create variables needed                        
                var ebayTitle = itemsArray[x].title;
                var ebayItemURL = itemsArray[x].viewItemURL;
                var ebayImage = itemsArray[x].galleryURL;
                var ebayItemPrice = itemsArray[x].sellingStatus[0].convertedCurrentPrice[0]["__value__"];
                
                // Create overall div to display in HTML and can be clicked to add to shopping cart
                var ebayItemDiv = $("<div>")

                // Add display-item class to div to grab when adding to shopping cart
                ebayItemDiv.addClass("display-item");
                
                // Create itemImage to attach to itemDiv
                var ebayItemImage = $("<img>");

                // Add image source and responsive-img class
                ebayItemImage.attr("src", ebayImage).addClass("responsive-img");

                // Creat URL to display in HTML
                var ebayDisplayURL = $("<a>").attr("href", ebayItemURL).attr("target", "_blank");
                
                // Create text to display in HTML
                var ebayDisplayText = $("<h5>").text(ebayTitle);
                
                // Add displayText to displayURL
                ebayDisplayURL.append(ebayDisplayText);

                // Create price to display in HTML
                // Convert price object to a string
                var ebayPriceString = JSON.stringify(ebayItemPrice)
                // Remove quotes around new string
                ebayPriceString = ebayPriceString.replace(/^"(.*)"$/, '$1');
                // Add $ to price
                var ebayDisplayPrice = "$" + ebayPriceString;
                
                // Append image, URL, text, price to itemDiv
                ebayItemDiv.append(ebayItemImage).append(ebayDisplayURL).append(ebayDisplayPrice);              
            
                // Append itemDiv to HTML
                $("#columntwo").append(ebayItemDiv);                          
            }             
        })
    });

    // Click function for favorites - when user clicks an item, it gets saved to shopping cart



});
