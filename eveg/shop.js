
let productDetails = {};
let productsFiltered = {};
let allProductDetails = [];
let searchStr = "";
let basket = {};
let filters = {};
//Each product is based on a 'card'; a box that contains information about that product.
//You can change the card template here. The [EVEGPRODUCT#] will always be subsituted for 
//the element in the imagesArr (see fruit.js)
//The classes can be styled using CSS
//The adjustDown and adjustUp buttons have their behaviour specified below, but you can change this if you like
//To change the quantity of a product, change the value of the input (with the class of buyInput), you can then recalculate the basket with refreshBasket()
//Or you can adjust the basket object via javascript and call updateQuantityInputs() and refreshBasket()

var cardTemplate = `<div class="shop-product card" data-num="[EVEGPRODUCT#]">

    <div class="like" data-field="likeProduct" data-num="[EVEGPRODUCT#]" id="likeContainer">
    <button class="like-button">Test Text</button>'
    </div>
    <div class="card__content" data-num="[EVEGPRODUCT#]">
        <div class="shop-product-details shop-product-left">
            <div class="shop-product-details shop-product-title card__title" data-field="title" data-num="[EVEGPRODUCT#]"></div>
            <div class="shop-product-details shop-product-img" data-field="img" data-num="[EVEGPRODUCT#]"></div>
        </div>
        <div class="shop-product-details shop-product-right">
            <div class="shop-product-details shop-product-price" data-field="price" data-num="[EVEGPRODUCT#]"></div>
            <div class="shop-product-details shop-product-units" data-field="units" data-num="[EVEGPRODUCT#]"></div>
            <div class="shop-product-buying" data-num="[EVEGPRODUCT#]">
              <div class="productBasketWrapper">
                <div class="productBasketDiv"><button class="addToBasket">Add</button>
                    <div class="adjustDiv">
                        <button class="btn adjustDown">-</button>
                        <input class="buyInput" data-num="[EVEGPRODUCT#]" min="0" value="0">
                        <button class="btn adjustUp">+</button>
                    </div>
                </div>
              </div>
            </div>
        </div>
    </div>
</div>`;

function init() {
    // const toggleButton = document.getElementsByClassName('toggle-button')[0];
    // const hero = document.getElementsByClassName('hero')[0];
    // // const navbarLinks = document.getElementsByClassName('navbar-links')[0];

    // //When the toggle button is pressed (if visible by the screen size, the menu is shown)
    // toggleButton.addEventListener('click',()=>{
    //   navbarLinks.classList.toggle('active');
    //   hero.classList.toggle('menuactive');
    // });

    // const searchBar = document.getElementsByClassName('search-bar')[0];
    // //Show the search bar when the search link is pressed
    // document.getElementById('search-link').addEventListener('click',()=>{
    //   searchBar.classList.toggle('active');
    //   document.getElementById('searchbox').focus();
    // });

    // //Close the search bar
    // document.getElementById('searchbutton').addEventListener('click', ()=>{
    //   searchStr = document.getElementById('searchbox').value;
    //   redraw();
    // });

    // //Close the search bar
    // document.getElementById('closesearchbutton').addEventListener('click', ()=>{
    //   searchStr = "";
    //   searchBar.classList.remove('active');
    //   redraw();
    // });

    if(getCookie("cookieMessageSeen") == "true"){
      document.getElementById('cookieMessage').style.display = 'none';
    }
  
    //Close the cookies message
    document.getElementById('acceptCookies').addEventListener('click', ()=>{
      setCookie('cookieMessageSeen', true);
      document.getElementById('cookieMessage').style.display = 'none';
    });
    resetListeners();
    initProducts(redraw);

    const basketIcon = document.querySelector('.nav-item.dropdown .fa.fa-shopping-basket');
    basketIcon.addEventListener('click', toggleDropdownMenu);
  
    basket = JSON.parse(getCookie("basket"));
//     // Add event listeners to both addToBasket buttons and the shopping basket icon
//     const addToBasketButtons = document.querySelectorAll('.addToBasket');
//     addToBasketButtons.forEach(button => {
//         button.addEventListener('click', function(event) {
//           console.log("clicked basket");
//             addToBasketClicked(event);
//             toggleDropdownMenu();
//         });
//     });

    // Add event listeners to like icon 
    // const likeButton = document.querySelectorAll('.like');
    // likeButton.forEach(button => {
    //   button.addEventListener('click', function(event) {
    //     console.log("clicked heart");
    //     console.log("confused");
    //     // toggleLike(event);
    //     // console.log("prod " + productDetails[event.target.parentElement.getAttribute("data-num")].liked);
    //   });
    // });
  }


$(document).ready(function () {
  basket = JSON.parse(getCookie("basket"));
  updateShoppingCartDropdown();
	$(window).scroll(function () {
			if ($(this).scrollTop() > 50) {
				$('#back-to-top').fadeIn();
			} else {
				$('#back-to-top').fadeOut();
			}
		});
		// scroll body to 0px on click
		$('#back-to-top').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 400);
			return false;
		});
  });
  /*
  * When changing the page, you should make sure that each adjust button has exactly one click event
  * (otherwise it might trigger multiple times)
  * So this function loops through each adjustment button and removes any existing event listeners
  * Then it adds another event listener
  */
  function resetListeners(){
    var elements = document.getElementsByClassName("adjustUp");
    var eIn;
    for(eIn = 0; eIn < elements.length; eIn++){
      elements[eIn].removeEventListener("click",increment);
      elements[eIn].addEventListener("click",increment);
    }
    elements = document.getElementsByClassName("adjustDown");
    for(eIn = 0; eIn < elements.length; eIn++){
      elements[eIn].removeEventListener("click",decrement);
      elements[eIn].addEventListener("click",decrement);
    }
    elements = document.getElementsByClassName("buyInput");
    for(eIn = 0; eIn < elements.length; eIn++){
      elements[eIn].removeEventListener("change",inputchange);
      elements[eIn].addEventListener("change",inputchange);
    }
    elements = document.getElementsByClassName("addToBasket");
    for(eIn = 0; eIn < elements.length; eIn++){
      elements[eIn].removeEventListener("click",checkBasket);
      elements[eIn].addEventListener("click",checkBasket);
    }
    // Checking when a product has been liked
    elements = document.getElementsByClassName("like");
    for(eIn = 0; eIn < elements.length; eIn++){
      elements[eIn].removeEventListener("click",toggleLike);
      elements[eIn].addEventListener("click",toggleLike);
    }
    // Checking when the search button has been clicked
    elements = document.getElementsByClassName("searchButton");
    elements[0].removeEventListener("click",search);
    elements[0].addEventListener("click",search);

    // Checking when the user has entered text in the search bar
    elements = document.getElementsByClassName("searchInput");
    elements[0].removeEventListener("input", populateDropdown); 
    elements[0].addEventListener("input", populateDropdown); 
    // check if the user has clicked enter to search
    elements[0].removeEventListener("keydown",function(event){
      console.log("Event key is" + event.key)
      if (event.key == "Enter")
      {console.log("Clicked enter")
        search()}
    });
    elements[0].addEventListener("keydown",function(event){
      console.log("Event key is" + event.key)
      if(event.key == "Enter")
       { console.log("Clicked enter")
        search()}
    });
    // Checking when the user has filtered their search
    elements = document.getElementsByClassName("categorySelect");
    elements[0].removeEventListener("change", categorySearch);
    elements[0].addEventListener("change", categorySearch);

    // Checking when the user has selected sorted by 
    elements = document.getElementsByClassName("sortSelect");
    elements[0].removeEventListener("change", sortBy);
    elements[0].addEventListener("change", sortBy);
  }

  function categorySearch(){
    filterItems();
    search()
  }

  function sortBy(){
    sortedItems();
    search()
  }

  function toggleLike(ev) {
    var productNum = ev.target.parentElement.getAttribute("data-num");
    var buttonLiked = productDetails[productNum].liked
    console.log("Product num is: " + productNum);
    console.log("button value was: " + buttonLiked);
    var likeContainer = ev.target.parentElement;
    
    // liked
    if (buttonLiked == 0) {
      productDetails[productNum].liked = 1;
      var fullHeartIcon = document.createElement('i');
      fullHeartIcon.id = 'heartIconFull';
      fullHeartIcon.className = 'fas fa-heart';
      likeContainer.innerHTML = '';
      likeContainer.appendChild(fullHeartIcon);
      console.log("changed to heartIconFull");
    } else {
    //unliked
      productDetails[productNum].liked = 0;
      var emptyHeartIcon = document.createElement('i');
      emptyHeartIcon.id = 'heartIconEmpty';
      emptyHeartIcon.className = 'far fa-heart';
      likeContainer.innerHTML = '';
      likeContainer.appendChild(emptyHeartIcon);
      console.log("changed to heartIconEmpty");
    }
    console.log("button value changed to: " + productDetails[productNum].liked)
  }

  function createLike(isLiked){
    console.log("Checking the like button")
    if (isLiked == 0){
      return '<i id="heartIconEmpty" class="far fa-heart" ></i>';
    }
    else{
      return '<i id="heartIconFull" class="fas fa-heart" ></i>';
    }
    
  }


  function search(){
    
    var loading = document.getElementById("loading");
    var products = document.getElementById("page-content");

    // Show the div
    loading.removeAttribute("hidden");
    products.setAttribute("hidden", true);

    const searchDropdown = document.getElementById("searchDropdown");
    searchDropdown.innerHTML = "";

  // Display the loading screen for 3 seconds
  setTimeout(function() {
    console.log("Counting down...")
    loading.setAttribute("hidden", true);
    products.removeAttribute("hidden");
  }, 700); // 

  // var newItems = filterItems()
  var newSortedItems = sortedItems()

  productDetails = []
    for(var i = 0; i < newSortedItems.length; i++){
      var newItem = newSortedItems[i];
      console.log("new item: "+ newItem)
      productDetails[i] = {
        productID: i,
        name: newItem[0],
        category: newItem[1],
        price: newItem[5],
        units: newItem[4],
        packsize: newItem[3],
        image: newItem[6],
        liked: newItem[7]}
    }
    
    redraw()

  }


  function toggleLike(ev) {
    var productNum = ev.target.parentElement.getAttribute("data-num");
    var buttonLiked = productDetails[productNum].liked   
    if (buttonLiked == 0) {
      productDetails[productNum].liked = 1;
    } else {
      productDetails[productNum].liked = 0;
    }

    // Get the like button
    var likeButton = ev.target.getElementsByClassName("like-button");
    // Append the <i> element to the like button
    element = document.querySelectorAll(".like")[productNum]
    element.innerHTML = createLike(productDetails[productNum].liked)
  }

  function createLike(isLiked){
    console.log("Checking the like button")
    if (isLiked == 0){
      return '<i id="heartIconEmpty" class="far fa-heart" ></i>';
    }
    else{
      return '<i id="heartIconFull" class="fas fa-heart" ></i>';
    }
  }


  //When the input changes, add a 'bought' class if more than one is added
  function inputchange(ev){
      var thisID = ev.target.parentElement.closest(".card__content").getAttribute("data-num");
      changeQuantity(thisID,ev.target.parentElement.closest(".shop-product-buying").getElementsByTagName("input")[0].value);
  }

  function checkBasket(){
    console.log(basket); 
    console.log(Object.keys(basket).length);
    if (Object.keys(basket).length == 0){
      console.log("here");
          fetch('errorPopUp.html')
          .then(response => response.text())
          .then(html => {
            var container = document.getElementById('externalPopUpContainer'); 
            container.innerHTML = html;
            showError('Please add items before adding to basket');
          })
          .catch(error => console.error('Error fetching errorPopUp.html', error));
    } 
  }

  /*
  * Change the quantity of the product with productID
  */
  function changeQuantity(productID, newQuantity){
    if (newQuantity < 0 ){
        fetch('errorPopUp.html')
            .then(response => response.text())
            .then(html => {
              var container = document.getElementById('externalPopUpContainer'); 
              container.innerHTML = html;
              showError('You cannot enter a negative number of items');
            })
            .catch(error => console.error('Error fetching errorPopUp.html', error));
    } else {
      // basket[productID] = newQuantity;
      basket[productDetails[productID].name] = { quantity: newQuantity, price: productDetails[productID].price };
      if(newQuantity == 0)
        delete basket[productDetails[productID].name];
      document.querySelector(".buyInput[data-num='"+productID+"']").value = newQuantity;
      refreshBasket();
    }

  }

  //Add 1 to the quantity
  function increment(ev){
    var thisID = ev.target.parentElement.closest(".card__content").getAttribute("data-num");
    if(basket[productDetails[thisID].name] === undefined){
      basket[productDetails[thisID].name] = { quantity: 0, price: 0 };
    } 
    console.log(basket[productDetails[thisID].name]);
    changeQuantity(thisID,parseInt(basket[productDetails[thisID].name].quantity)+1);
  }

  //Subtract 1 from the quantity
  function decrement(ev){
    var thisID = ev.target.parentElement.closest(".card__content").getAttribute("data-num");
    if(basket[productDetails[thisID].name] === undefined){
      changeQuantity(thisID,0);
      fetch('errorPopUp.html')
          .then(response => response.text())
          .then(html => {
            var container = document.getElementById('externalPopUpContainer'); 
            container.innerHTML = html;
            showError('You cannot enter a negative number of items');
          })
          .catch(error => console.error('Error fetching errorPopUp.html', error));

    }else{
      if(basket[productDetails[thisID].name] > 0){
        changeQuantity(thisID,parseInt(basket[productDetails[thisID].name].quantity)-1);
      }
    }
  }

  function filterFunction(a){
    /*This demonstrates how to filter based on the search term*/
    const resultsList = document.getElementById("resultsList");
    if (searchStr == ""){

    }

    return a.name.toLowerCase().includes(searchStr.toLowerCase());

    //If you wanted to just filter based on fruit/veg you could do something like this:
    // return a.type == 'veg';
    // return a.type == 'fruit';
    // return true;
  }

  

  function sortFunction(a,b){
    return a.price > b.price;
  }

  //Redraw all products based on the card template
function redraw() {
    
    var loading = document.getElementById("loading");
    var products = document.getElementById("page-content");

    // Show the div
    loading.removeAttribute("hidden");
    products.setAttribute("hidden", true);
  
    console.log("Redrawing...")

    //Reset the product list (there are possibly more efficient ways of doing this, but this is simplest)
    document.querySelector('.productList').innerHTML = '';
    
    console.log("Checking basket contents: " + basket)
     if (basket !== null) {
      updateItemCount();
      updateShoppingCartDropdown();
    }
  
    // Display the loading screen for 3 seconds
    setTimeout(function() {
      console.log("Counting down...")
      loading.setAttribute("hidden", true);
      products.removeAttribute("hidden");
    }, 900); // 

    var shownProducts = productDetails;

    console.log("shown products" + shownProducts)

    var numProducts = shownProducts.length;

    console.log("Number of new products: " + numProducts)
    
    for(var i = 0; i < numProducts; i++){
      var cardHTML = cardTemplate.replaceAll("[EVEGPRODUCT#]",shownProducts[i].productID);
      var thisProduct = document.createElement("div");
      thisProduct.innerHTML = cardHTML;
      document.querySelector('.productList').appendChild(thisProduct.firstChild);
    }

    document.querySelectorAll(".shop-product-details").forEach(function(element){
      var field = element.getAttribute("data-field");
      var num = element.getAttribute("data-num");
      switch(field){
        case "title":
          element.innerText = productDetails[num].name;
          break;
        case "img":
          element.innerHTML = "<span class=\"imgspacer\"></span><div class=\"square-image-container\"><img src=\"images/"+productDetails[num].image + "\" alt="+productDetails[num].name+"></img></div>";
          break;
        case "price":
          element.innerHTML = "<span>£"+(productDetails[num].price/100).toFixed(2)+"</span>";
          break;
        case "units":
          element.innerHTML = "<span>"+productDetails[num].packsize + " " + productDetails[num].units+"</span>";
          break;

      }
    });

    document.querySelectorAll(".like").forEach(function(element){
      var field = element.getAttribute("data-field");
      var num = element.getAttribute("data-num");
      switch(field){
        case "likeProduct":
          element.innerHTML = createLike(productDetails[num].liked);
          break;

      }
      
    });

    // Add event listeners to both addToBasket buttons and the shopping basket icon
    const addToBasketButtons = document.querySelectorAll('.addToBasket');
    addToBasketButtons.forEach(button => {
        button.addEventListener('click', function(event) {
          console.log("clicked basket");
            updateItemCount();
            toggleDropdownMenu();
            updateShoppingCartDropdown();
        });
    });

    // Attach event listener to like button
    document.querySelectorAll(".like").forEach(function(element){
      console.log("REFRESHED PAGE");
      var field = element.getAttribute("data-field");
      var num = element.getAttribute("data-num");
      console.log("item: " + productDetails[num].liked)
      switch(field){
        case "likeProduct":
          console.log("in the like, like num is: " + productDetails[num].liked);
          element.innerHTML = createLike(productDetails[num].liked);
          break;

      }
    });
    resetListeners();
    updateQuantityInputs();
  }
  
  function updateQuantityInputs(){
    for (let buyInput of document.querySelectorAll(".buyInput")) {
      let { quantity, price } = basket[productDetails[buyInput.getAttribute("data-num")].name];
      if(isNaN(quantity))
        quantity = 0;

      buyInput.value = quantity;
    }
  }

  function updateCheckoutList() {
    let total = 0;
    let totalCount = 0;
    for (const productName in basket) {
      const { quantity, price } = basket[productName];
      total = total + (price * quantity);
      totalCount++;
    }
    // document.querySelector("#totalItems").innerHTML = totalCount;
    // document.querySelector("#basketNumTotal").innerHTML = (total / 100).toFixed(2);
  }

  // Define a function to toggle the visibility of the dropdown menu
  function toggleDropdownMenu() {
      const dropdownMenu = document.querySelector('.dropdown-menu.shopping-cart');
      dropdownMenu.classList.toggle('show');
  }

  function updateItemCount() {
    let totalCount = 0;

    for(const productID in basket){
      totalCount++;
    }
    document.querySelector("#totalItems").innerHTML = totalCount;
  }

  //Recalculate basket
  function refreshBasket() {
    console.log("Changed the quantity")
    setCookie('basket', JSON.stringify(basket));
    console.log("Basket object", basket)
    updateCheckoutList();
  }

  function updateShoppingCartDropdown() {
    setCookie('basket', JSON.stringify(basket));
    try {
      document.querySelector("#totalItems").innerHTML = totalCount;
      document.querySelector("#basketNumTotal").innerHTML = (total / 100).toFixed(2);
    }catch(e){
      
    }
    return total;
  }
  
function addToBasketClicked(event) {
    let productId = event.target.parentElement.getAttribute('data-num');
    updateShoppingCartDropdown(); // Update the shopping cart dropdown
}


function findProductByName(productName) {
    return allProductDetails.find(product => product.name === productName);
}
function updateShoppingCartDropdown() {
    let cartItemsContainer = document.getElementById('cartItemsContainer');
    cartItemsContainer.innerHTML = ''; // Clear previous items

    let totalPrice = 0;

    for (const productName in basket) {
        const { quantity, price } = basket[productName];
        const product = findProductByName(productName);
        const productTotal = price * quantity;
        totalPrice += productTotal;
        console.log("eror", product)
        const listItem = document.createElement('li');
        listItem.classList.add('shopping-cart-item'); // Add a class to style each item if needed
        listItem.innerHTML = `
            <div class="media ml-1 pl-4 p-2">
              <div class="d-flex align-items-center">
                 <img class="mr-3" src="images/${product.image}" width="60">
              </div>
              <div class="media-body">
                  <h5><a>${product.name}</a></h5>
                  <div class="shop-product-details shop-product-price" data-field="price" data-num="0">
                  <span>£${(productTotal / 100).toFixed(2)}</span>
                  <p><span class="discount text-muted">Qty: ${quantity}</span>
                  </div></p>
              </div>
          </div>
          `;
        cartItemsContainer.appendChild(listItem);
    }

    // Add total price to the dropdown
    const totalItem = document.createElement('li');
    cartItemsContainer.appendChild(totalItem);

    // Update the total price displayed outside the dropdown
    document.getElementById('totalPrice').textContent = (totalPrice / 100).toFixed(2);
}

window.addEventListener("load", init);

function showError(message) {
  //display the error pop up and the overlay 
  document.getElementById('errorPopUp').style.display = 'block'; 
  document.getElementById('overlay').style.display = 'block'; 

  //set the error message for the pop up 
  document.getElementById('errorMessage').innerText = message; 
  const errorPopUp = document.getElementById('errorPopUp');
  const closeButton = errorPopUp.querySelector('closeErrorButton');
  closeButton.focus();
}

function hideError(){
  //hide the pop up and overlay 
  document.getElementById('errorPopUp').style.display = 'none'; 
  document.getElementById('overlay').style.display = 'none';
}

