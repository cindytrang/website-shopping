let productDetails = {};
let creditCardShown = false;

/*
* When the page is loaded, initialise the products and reset the listeners
*/
function init(){
  //initProducts takes a callback function - when the products are loaded the basket will be recalculated
  initProducts(calculateBasket);
  resetListeners();
}

//When changing the page, you should make sure that each adjust button has exactly one click event
//(otherwise it might trigger multiple times)
function resetListeners(){
document.getElementById("paycreditcard").removeEventListener("click",showCreditCardPage);
document.getElementById("paycreditcard").addEventListener('click',showCreditCardPage);
}

//When the pay by credit card link is clicked, show the creditcard.html in an iframe
function showCreditCardPage(){
  if(!creditCardShown){
    var payIFrame = document.createElement("iframe");
    payIFrame.src = "creditcard.html";
    payIFrame.width = "50%";
  
    document.querySelector('#customerDetails').appendChild(payIFrame);
  }
}


/*
* Calculate the totals and show the basket
*/
function calculateBasket(){
  let total = 0;
  let basket = JSON.parse(getCookie("basket"));
  document.querySelector('.checkoutList').innerHTML = '';
  var headerRow = document.createElement("tr");
  var itemHeader = document.createElement("th");
  itemHeader.textContent = "Item";
  itemHeader.colSpan = 2;
  var quantHeader = document.createElement("th");
  quantHeader.textContent = "Quantity";
  var itemPriceHeader = document.createElement("th");
  itemPriceHeader.textContent = "Price per Item";
  var totalHeader = document.createElement("th");
  totalHeader.textContent = "Item Total";
  headerRow.appendChild(itemHeader);
  headerRow.appendChild(quantHeader);
  headerRow.appendChild(itemPriceHeader);
  headerRow.appendChild(totalHeader);
  document.querySelector('.checkoutList').appendChild(headerRow);
  for(const productID in basket){
    console.log(productID);
    let quantity = basket[productID];
    console.log(quantity);
    let price = productDetails[productID].price;
    let productTotal = 0; 
    if (quantity > 0 ){
      productTotal = price * quantity; 
    }
    total = total + productTotal;
    let totalID = productID + "total";
    let removeID = productID + "remove";
    // let rowHTML = `<td>${productDetails[productID].name}</td><td><input class="checkoutQuant"  min="0" value=${quantity} type="number"></input></td><td>${(price / 100).toFixed(2)}</td><td>£${(productTotal / 100).toFixed(2)}</td>`;
    // Include the image in the rowHTML
    let rowHTML = `<td><img src="images/${productDetails[productID].image}" alt="${productDetails[productID].name}" style="width: 50px; height: 50px;"></td>
               <td>${productDetails[productID].name}</td>
               <td><input id = ${productID} class="checkoutQuant" min="0" value=${quantity} type="number" oninput=changeValue(${productID})> </input></td>
               <td>${(price / 100).toFixed(2)}</td>
               <td id = ${totalID} class = "productTotal">£${(productTotal / 100).toFixed(2)}</td>
               <td id = ${removeID} class = "remove-item"> <i class="fas fa-trash-alt"></i> </td>
               `;
    var thisProduct = document.createElement("tr");
    thisProduct.id = productID + "row";
    thisProduct.innerHTML = rowHTML;
    document.querySelector('.checkoutList').appendChild(thisProduct);
    var remove = document.getElementById(removeID);
    remove.addEventListener("click", function(){
      delete basket[productID];
      setCookie('basket', JSON.stringify(basket));
      removeItem(productID + "row");
    })
  }
  document.querySelector(".basket-total").innerHTML = "Basket total: £" + (total / 100).toFixed(2);
  if(total == 0){
    document.querySelector('.checkoutList').innerHTML = '';
    var emptyBasket = document.createElement('h3');
    emptyBasket.id = "empty-message";
    emptyBasket.innerText = "Basket empty!";
    var returnToShop = document.createElement("a");
    returnToShop.href = "index.html";
    returnToShop.innerHTML = "<u>Return to shop</u>";
    returnToShop.id = "return-to-shop";
    document.querySelector('.checkoutList').appendChild(emptyBasket);
    document.querySelector('.checkoutList').appendChild(returnToShop);
    document.querySelector(".submit-payment").style.display = "none";
  }
}

window.addEventListener("load", init);

function changeValue(ID){
  //also update cookies
  //add in remove from basket buttons
  var inputValue = document.getElementById(ID).value;
  let basket = JSON.parse(getCookie("basket"));
  console.log(inputValue);

  if (inputValue === 0 ){
    fetch('errorPopUp.html')
          .then(response => response.text())
          .then(html => {
            var container = document.getElementById('externalPopUpContainer'); 
            container.innerHTML = html;
            showError('You cannot enter a negative number of items');
          })
          .catch(error => console.error('Error fetching errorPopUp.html', error));
        }
          console.log("here");
          basket[ID] = inputValue;
          setCookie('basket', JSON.stringify(basket));
          if (inputValue < 0 ){
            document.getElementById(ID + "total").innerText = "£"+((0 * productDetails[ID].price)/100).toFixed(2);
          } else {
            document.getElementById(ID + "total").innerText = "£"+((inputValue * productDetails[ID].price)/100).toFixed(2);
          }
            var total = document.querySelector(".basket-total");
        
          var inputs = document.getElementsByClassName("checkoutQuant");
              var totalPrice = 0;
              for (var i = 0; i < inputs.length; i++) {
                if (inputs[i].value > 0 ){
                  totalPrice += parseFloat(inputs[i].value * productDetails[inputs[i].id].price);
                }
              }
          total.innerHTML = "";
          total.innerHTML = "Basket total: £" + (totalPrice/100).toFixed(2);

}

function removeItem(ID){
  var row = document.getElementById(ID);
  row.remove();

  var total = document.querySelector(".basket-total");
  var inputs = document.getElementsByClassName("checkoutQuant");
  var totalPrice = 0;
  for (var i = 0; i < inputs.length; i++) {
    if (inputs[i].value > 0 ){
      totalPrice += parseFloat(inputs[i].value * productDetails[inputs[i].id].price);
    }
  }
  total.innerHTML = "";
  total.innerHTML = "Basket total: £" + (totalPrice/100).toFixed(2);
  if(totalPrice == 0){
    document.querySelector('.checkoutList').innerHTML = '';
    var emptyBasket = document.createElement('h3');
    emptyBasket.id = "empty-message";
    emptyBasket.innerText = "Basket empty!";
    var returnToShop = document.createElement("a");
    returnToShop.href = "index.html";
    returnToShop.innerHTML = "<u>Return to shop</u>";
    returnToShop.id = "return-to-shop";
    document.querySelector('.checkoutList').appendChild(emptyBasket);
    document.querySelector('.checkoutList').appendChild(returnToShop);
    document.querySelector(".submit-payment").style.display = "none";
  }

}

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