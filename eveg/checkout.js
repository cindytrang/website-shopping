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
  itemHeader.textContent = "Items";
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
    let price = productDetails[productID].price;
    let productTotal = price * quantity;
    total = total + productTotal;
    let totalID = productID + "total";
    // let rowHTML = `<td>${productDetails[productID].name}</td><td><input class="checkoutQuant"  min="0" value=${quantity} type="number"></input></td><td>${(price / 100).toFixed(2)}</td><td>£${(productTotal / 100).toFixed(2)}</td>`;
    // Include the image in the rowHTML
    let rowHTML = `<td><img src="images/${productDetails[productID].image}" alt="${productDetails[productID].name}" style="width: 50px; height: 50px;"></td>
               <td>${productDetails[productID].name}</td>
               <td><input id = ${productID} class="checkoutQuant" min="0" value=${quantity} type="number" oninput=changeValue(${productID})> </input></td>
               <td>${(price / 100).toFixed(2)}</td>
               <td id = ${totalID} class = "productTotal">£${(productTotal / 100).toFixed(2)}</td>
               `;
    var thisProduct = document.createElement("tr");
    thisProduct.innerHTML = rowHTML;
    document.querySelector('.checkoutList').appendChild(thisProduct);
  }
  let rowHTML = `<td colspan="3" id = "totalPrice"> Total:</td><td>£${(total / 100).toFixed(2)}</td>`;
  var thisProduct = document.createElement("tr");
  thisProduct.id = "totalRow";
  thisProduct.innerHTML = rowHTML;
  document.querySelector('.checkoutList').appendChild(thisProduct);
}

window.addEventListener("load", init);

function changeValue(ID){
  var inputValue = document.getElementById(ID).value;
  document.getElementById(ID + "total").innerText = ((inputValue * productDetails[ID].price)/100).toFixed(2);
  var total = document.getElementById("totalRow");

  var inputs = document.getElementsByClassName("checkoutQuant");
      var totalPrice = 0;
      for (var i = 0; i < inputs.length; i++) {
        totalPrice += parseFloat(inputs[i].value * productDetails[inputs[i].id].price);
      }
  total.innerHTML = "";
  total.innerHTML = `<td colspan="3" id = "totalPrice"> Total:</td><td>£${(totalPrice/100).toFixed(2)}</td>`;
}