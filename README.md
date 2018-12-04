# Gifty

Gifty is a search tool for finding handmade and original gifts.

https://edcourtney74.github.io/Gifty/

**Note:** This project was built on the front end without Node.js. This will soon be updated. Until then, the search function needs a Chrome extension in order to work properly. Otherwise the user receives a CORS error. The Chrome extension that enables this site to work can be found at https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi?hl=en. 

## How it works

Gifty takes user input from a search bar including keywords, minimum and maximum price.
The site then takes this information and sends a GET request to Ebay and Etsy API sites and returns items based on the search parameters.  Items are returned with the items Title, item description, image, and location URL and appended to the page.  The keywords entered by the user on the homepage are saved in local storage and used on the search page to give a more seemless user experience.  We are saving the users input for search history and price parameters and pushing this into a firebase data base to be used to collect information for catering the site to a user friendly experience.

https://edcourtney74.github.io/Gifty/search.html

https://edcourtney74.github.io/Gifty/cart.html

## Future of Gifty

In the future Gifty will be fine tuning the search parameters to sort results based on items price, release date, and popularity.  We will also be adding other API's and companies that sell handmade and original gifts.  As well as forming partnerships with companies we search to be compensated by directing our customers to checkout locations of the items listed.  Future releases will also have a feature of creating a user profile to save feedback and interaction information, as well as creating sub profiles for the intended gift recipient.  So that you can sign in and be recognized by your search history and preferences for individuals you previously purchased gifts for. 

  ***
### Home page
![Home Page photo](https://github.com/edcourtney74/Gifty/blob/master/assets/images/main_page.png "Home page")

### Search page
![Search page photo](https://github.com/edcourtney74/Gifty/blob/master/assets/images/search_page.png "Search page")

### Wishlist
![Wishlist photo](https://github.com/edcourtney74/Gifty/blob/master/assets/images/wishlist.png "Wishlist")

### Home page - Mobile
![Home page mobile](https://github.com/edcourtney74/Gifty/blob/master/assets/images/main_mobile.png "Home-Mobile") 

### Search bar - Mobile
![Search bar mobile](https://github.com/edcourtney74/Gifty/blob/master/assets/images/search_mobile.png "Search-Mobile")
