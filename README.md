# Gifty

Gifty is a search tool for finding handmade and original gifts.

https://edcourtney74.github.io/Gifty/

##How it works

Gifty takes user input from a search bar including keywords, minimum and maximum price.
The site then takes this information and sends a GET request to Ebay and Etsy API sites and returns items based on the search parameters.  Items are returned with the items Title, item description, image, and location URL and appended to the page.  The keywords entered by the user on the homepage are saved in local storage and used on the search page to give a more seemless user experience.  We are saving the users input for search history and price parameters and pushing this into a firebase data base to be used to collect information for catering the site to a user friendly experience.

https://edcourtney74.github.io/Gifty/search.html

https://edcourtney74.github.io/Gifty/cart.html

##Future of Gifty

In the future Gifty will be fine tuning the search parameters to sort results based on items price, release date, and popularity.  We will also be adding other API's and companies that sell handmade and original gifts.  As well as forming partnerships with companies we search to be compensated by directing our customers to checkout locations of the items listed.  Future releases will also have a feature of creating a user profile to save feedback and interaction information, as well as creating sub profiles for the intended gift recipient.  So that you can sign in and be recognized by your search history and preferences for individuals you previously purchased gifts for. 