var imagesArr = [['Artichokes', 'veg', 'reut-malichi-GQ62pYNohW0-unsplash.jpg', '1', 'unit', 200, 'artichokes.png', 1], ['Asparagus', 'veg', 'markus-spiske-DPcj8-pMYSs-unsplash.jpg', 125, 'g', 180, 'asparagus.png', 1], ['Beetroot', 'veg', 'emma-jane-hobden-lFxgx7Snyfw-unsplash.jpg', 1, 'kg', 90, 'beetroot.png', 0], ['Peppers', 'veg', 'vino-li-v7H-fV9Ydkk-unsplash.jpg', 3, 'unit', 140, 'peppers.png', 0], ['Broccoli', 'veg', 'hans-ripa-3hzBK2aPf8s-unsplash.jpg', 350, 'g', 60, 'broccoli.png', 0], ['Brussels Sprouts', 'veg', 'jez-timms-ia9z68YnJdY-unsplash.jpg', 250, 'g', 150, 'brussels_sprouts.png', 0], ['Butternut Squash', 'veg', 'andie-kolbeck-lEKiF28dxbk-unsplash.jpg', 1, 'unit', 180, 'butternut_squash.png', 0], ['Cabbage', 'veg', 'mattia-barbotti-vXTt84S01F0-unsplash.jpg', 1, 'unit', 70, 'cabbage.png', 0], ['Carrots', 'veg', 'k8-GHRT9j21m2M-unsplash.jpg', 1, 'kg', 100, 'carrots.png', 0], ['Cauliflower', 'veg', 'karolina-kolodziejczak-y4j_bKe0b6Q-unsplash.jpg', 1, 'unit', 90, 'cauliflower.png', 0], ['Chard', 'veg', 'heather-barnes-ZGXhE1L7VL8-unsplash.jpg', 150, 'g', 180, 'chard.png', 0], ['Chilis', 'veg', 'alexander-schimmeck-JA3FrZ5IEK8-unsplash.jpg', 50, 'g', 60, 'chilis.png', 0], ['Cucumber', 'veg', 'harshal-s-hirve-2GiRcLP_jkI-unsplash.jpg', 1, 'unit', 50, 'cucumber.png', 0], ['Garlic', 'veg', 'bryam-blanco-c27y-WuwSUA-unsplash.jpg', 150, 'g', 150, 'garlic.png', 0], ['Kale', 'veg', 'deborah-rainford-3uJcymbLnYA-unsplash.jpg', 250, 'g', 125, 'kale.png', 0], ['Leek', 'veg', 'heather-gill-NyI6X3oj7mg-unsplash.jpg', 500, 'g', 95, 'leek.png', 0], ['Lettuce', 'veg', 'mae-mu-hugb85v0J04-unsplash.jpg', 1, 'unit', 50, 'lettuce.png', 0], ['Mushrooms', 'veg', 'harshal-s-hirve-oZ0xzQFVCWY-unsplash.jpg', 300, 'g', 100, 'mushrooms.png', 0], ['Onion', 'veg', 'leonita-yuliana-sriyanto-wIc_yXhklos-unsplash.jpg', 1, 'kg', 65, 'onion.png', 0], ['Peas', 'veg', 'jarek-jordan-WuqQtfhdyfM-unsplash.jpg', 500, 'g', 150, 'peas.png', 0], ['Potatoes', 'veg', 'lars-blankers-B0s3Xndk6tw-unsplash.jpg', 1, 'kg', 300, 'potatoes.png', 0], ['Pumpkin', 'veg', 'keenan-sultanik-oxXUePN3u4Q-unsplash.jpg', 1, 'unit', 80, 'pumpkin.png', 0], ['Radish', 'veg', 'matilda-bellman-p7R7zdTXXH4-unsplash.jpg', 150, 'g', 100, 'radish.png', 0], ['Spinach', 'veg', 'monika-grabkowska-i14VzlCp-Eo-unsplash.jpg', 200, 'g', 255, 'spinach.png', 0], ['Sweetcorn', 'veg', 'simona-sergi-k8knGtJAaHc-unsplash.jpg', 3, 'unit', 100, 'sweetcorn.png', 0], ['Tomatoes', 'veg', 'alice-butenko-c1P1mXEHrik-unsplash.jpg', 500, 'g', 350, 'tomatoes.png', 0], ['Apples', 'fruit', 'matheus-cenali-wXuzS9xR49M-unsplash.jpg', 6, 'unit', 225, 'apples.png', 0], ['Apricots', 'fruit', 'masa-zeks-P_n9OZOcGrw-unsplash.jpg', 320, 'g', 190, 'apricots.png', 0], ['Blackberries', 'fruit', 'kateryna-moskalova-tFj5BMAwK-Q-unsplash.jpg', 300, 'g', 250, 'blackberries.png', 0], ['Blueberries', 'fruit', 'melissa-belanger-usE0kpV_yLo-unsplash.jpg', 200, 'g', 160, 'blueberries.png', 0], ['Cherries', 'fruit', 'vino-li-OseN2JZdcY4-unsplash.jpg', 700, 'g', 545, 'cherries.png', 0], ['Grapefruit', 'fruit', 'rayia-soderberg-gUS4Ouhy1pU-unsplash.jpg', 2, 'unit', 310, 'grapefruit.png', 0], ['Nectarines', 'fruit', 'dmitriy-koryas--P2YUqgo1Qs-unsplash.jpg', 4, 'unit', 200, 'nectarines.png', 0], ['Peaches', 'fruit', 'jocelyn-morales-ULg84Va3wdA-unsplash.jpg', 2, 'unit', 400, 'peaches.png', 0], ['Pears', 'fruit', 'tijana-drndarski-RUiYB0Wjx9k-unsplash.jpg', 6, 'unit', 200, 'pears.png', 0], ['Plums', 'fruit', 'max-griss-Zfpa8iH5ZkU-unsplash.jpg', 250, 'g', 395, 'plums.png', 0], ['Pomegranates', 'fruit', 'gr-stocks-SCMnIJV3DrQ-unsplash.jpg', 1, 'unit', 130, 'pomegranates.png', 0], ['Raspberries', 'fruit', 'sina-asgari-sgwxjKLqO24-unsplash.jpg', 300, 'g', 300, 'raspberries.png', 0], ['Strawberries', 'fruit', 'maksim-shutov-IXOjM_g-XBQ-unsplash.jpg', 800, 'g', 300, 'strawberries.png', 0], ['Watermelon', 'fruit', 'juven-dunn-hUkZv0Y47Ic-unsplash.jpg', 1, 'unit', 295, 'watermelon.png', 0], ['Salmon', 'fish', 'abstral-official-dKhkCiD4zEQ-unsplash.jpg', 240, 'g', 400, 'salmon.png', 0], ['Jelly Beans', 'snack', 'amit-lahav-3t07n27XK-w-unsplash.jpg', 50, 'g', 100, 'jelly_beans.png', 0], ['Honey', 'sauce', 'art-rachen-Asj5DFw8UAw-unsplash.jpg', 1, 'unit', 480, 'honey.png', 0], ['Ketchup', 'sauce', 'ashkan-forouzani-dYAPoTlWWZs-unsplash.jpg', 240, 'g', 300, 'ketchup.png', 0], ['Milk', 'dairy', 'elizabeth-dunne-ccV4kUrSYIM-unsplash.jpg', 1, 'pint', 180, 'milk.png', 0], ['Biscuits', 'snack', 'ellieelien-04yMqTmUeHQ-unsplash.jpg', 200, 'g', 150, 'biscuits.png', 0], ['Burgers', 'meat', 'izzy-park-OKBCiPpTHag-unsplash.jpg', 4, 'unit', 450, 'burgers.png', 0], ['Sausages', 'meat', 'jonathan-taylor-GydZBn-7LMM-unsplash.jpg', 6, 'unit', 400, 'sausages.png', 0], ['Bread', 'bread', 'laura-ockel-uugOo5Lr_iM-unsplash.jpg', 1, 'unit', 160, 'bread.png', 0], ['Basil plant', 'herb', 'monika-grabkowska-rICRgergpIc-unsplash.jpg', 1, 'unit', 250, 'basil_plant.png', 0], ['Crisps', 'snack', 'mustafa-bashari-S4PC4SeKwKg-unsplash.jpg', 6, 'unit', 275, 'crisps.png', 0], ['Eggs', 'dairy', 'nick-fewings-qlLCBkTSYAI-unsplash.jpg', 6, 'unit', 110, 'eggs.png', 0], ['Orange Juice', 'drink', 'paul-hanaoka-8WYjqXqNZs4-unsplash.jpg', 1, 'pint', 180, 'orange_juice.png', 0], ['Rice', 'grain', 'pierre-bamin--LdilhDx3sk-unsplash.jpg', 2000, 'g', 130, 'rice.png', 0], ['Chocolate Bar', 'snack', 'tamas-pap-6IDGTjq_Pic-unsplash.jpg', 1, 'unit', 190, 'chocolate_bar.png', 0], ['Peanut Butter', 'sauce', 'tetiana-bykovets-Ht7ZhGt2UXg-unsplash.jpg', 300, 'g', 210, 'peanut_butter.png', 0]]
function initProducts(callback){
    productDetails = [];
    for(var i = 0; i < imagesArr.length; i++){
      var thisProduct = {name: imagesArr[i][0], type: imagesArr[i][1], image: imagesArr[i][6], 
        packsize: imagesArr[i][3], units: imagesArr[i][4], price: imagesArr[i][5], productID: i, liked: imagesArr[i][7]};

      if (thisProduct.liked === 1) {
        productDetails.push(thisProduct); // Add the liked product to the array
      }

    }

    if(callback !== undefined)
      callback();
}

function setCookie(cname, cvalue) {
  const d = new Date();
  d.setTime(d.getTime() + (60*60*1000));
  let expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function hideBox() {
  var box = document.querySelector('.box');
  box.style.display = 'none'; // Set the display property to 'none' to hide the cookies box
}

function transformProduct(){
  // var myDiv = document.getElementsById("shop-product");
  // myDiv.classList = "shop-bigproduct";
}


$(document).ready(function () {
  $(function () {
      $(".preloader").fadeOut();
  });

  $(window).scroll(function(){
      var scroll = $(window).scrollTop();
      if (scroll > 10) {
          $('#page-navigation').addClass('bg-white').removeClass('bg-transparent');
          $('#page-navigation').addClass('navbar-light').removeClass('navbar-dark');
      }else{
          $('#page-navigation').addClass('bg-transparent').removeClass('bg-white');
          $('#page-navigation').addClass('navbar-dark').removeClass('navbar-light');
      }
  });

  $('.navbar-toggler').on('click', function() {
        var isCollapsed = $(this).attr('aria-expanded') === 'false';
        if (isCollapsed) {
            $('#page-navigation').addClass('bg-white').removeClass('bg-transparent');
        }
  });
  
  $('.landing-categories').owlCarousel({
    loop: true,
    items: 4,
    margin: 0,
    autoplay: true,
    dots: false,
    autoplayTimeout: 8000,
    rewindSpeed: 8000,
    nav: true,
    navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      990: {
        items: 4
      },
      1170: {
        items: 4
      }
    }

  });

});

const searchInput = document.getElementById("searchInput");
const categorySelect = document.getElementById("categorySelect");
const searchDropdown = document.getElementById("searchDropdown");


function filterItems() {
  const searchInput = document.getElementById("searchInput");
  const categorySelect = document.getElementById("categorySelect");
  console.log("Category is: " + categorySelect)
  const searchText = searchInput.value.toLowerCase();
  const category = categorySelect.value.toLowerCase();
  const filteredItems = imagesArr.filter(item => { 
    return item[0].toLowerCase().includes(searchText) && (category === "" || item[1] === category);
  });

  
  //displayItems(filteredItems);
  console.log("filtered items are: " + filteredItems[0][0])
  return filteredItems

}

// Function to display filtered items


// Function to populate the search dropdown
function populateDropdown(event) {
  const searchInput = document.getElementById("searchInput");
  const searchDropdown = document.getElementById("searchDropdown");
  const searchText = searchInput.value.toLowerCase();
  console.log("Search is: " + searchText)

  var filteredItems = imagesArr.filter(item => {
    return item[0].toLowerCase().includes(searchText);
  });

  if (searchText.length == 0){filteredItems = ""}

  searchDropdown.innerHTML = "";
  filteredItems.forEach(item => {
    const option = document.createElement("div");
    option.textContent = item[0];
    option.classList.add("dropdown-item");
    option.addEventListener("click", () => {
      searchInput.value = item[0];
      searchDropdown.classList.remove("visible");
      filterItems();
    });
    searchDropdown.appendChild(option);
  });
  
  if (filteredItems.length > 0) {
    searchDropdown.classList.add("visible");
  } 
  else if (searchText.length == 0){
    searchDropdown.classList.remove("visible")
  }
  else {
    searchDropdown.classList.remove("visible");
  }
}


document.addEventListener("DOMContentLoaded", function() {
  
  
  // Sample list of fruits and vegetables

  
  // Function to filter items based on search input and category
  
  
  // Event listeners for input and select elements
  searchInput.addEventListener("input", populateDropdown);
  categorySelect.addEventListener("change", filterItems);
  
  // Initial call to filter items
  filterItems();
});

