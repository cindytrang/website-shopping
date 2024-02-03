var imagesArr = [['Artichokes', 'veg', 'reut-malichi-GQ62pYNohW0-unsplash.jpg', '1', 'unit', 200, 'artichokes.png'], ['Asparagus', 'veg', 'markus-spiske-DPcj8-pMYSs-unsplash.jpg', 125, 'g', 180, 'asparagus.png'], ['Beetroot', 'veg', 'emma-jane-hobden-lFxgx7Snyfw-unsplash.jpg', 1, 'kg', 90, 'beetroot.png'], ['Peppers', 'veg', 'vino-li-v7H-fV9Ydkk-unsplash.jpg', 3, 'unit', 140, 'peppers.png'], ['Broccoli', 'veg', 'hans-ripa-3hzBK2aPf8s-unsplash.jpg', 350, 'g', 60, 'broccoli.png'], ['Brussels Sprouts', 'veg', 'jez-timms-ia9z68YnJdY-unsplash.jpg', 250, 'g', 150, 'brussels_sprouts.png'], ['Butternut Squash', 'veg', 'andie-kolbeck-lEKiF28dxbk-unsplash.jpg', 1, 'unit', 180, 'butternut_squash.png'], ['Cabbage', 'veg', 'mattia-barbotti-vXTt84S01F0-unsplash.jpg', 1, 'unit', 70, 'cabbage.png'], ['Carrots', 'veg', 'k8-GHRT9j21m2M-unsplash.jpg', 1, 'kg', 100, 'carrots.png'], ['Cauliflower', 'veg', 'karolina-kolodziejczak-y4j_bKe0b6Q-unsplash.jpg', 1, 'unit', 90, 'cauliflower.png'], ['Chard', 'veg', 'heather-barnes-ZGXhE1L7VL8-unsplash.jpg', 150, 'g', 180, 'chard.png'], ['Chilis', 'veg', 'alexander-schimmeck-JA3FrZ5IEK8-unsplash.jpg', 50, 'g', 60, 'chilis.png'], ['Cucumber', 'veg', 'harshal-s-hirve-2GiRcLP_jkI-unsplash.jpg', 1, 'unit', 50, 'cucumber.png'], ['Garlic', 'veg', 'bryam-blanco-c27y-WuwSUA-unsplash.jpg', 150, 'g', 150, 'garlic.png'], ['Kale', 'veg', 'deborah-rainford-3uJcymbLnYA-unsplash.jpg', 250, 'g', 125, 'kale.png'], ['Leek', 'veg', 'heather-gill-NyI6X3oj7mg-unsplash.jpg', 500, 'g', 95, 'leek.png'], ['Lettuce', 'veg', 'mae-mu-hugb85v0J04-unsplash.jpg', 1, 'unit', 50, 'lettuce.png'], ['Mushrooms', 'veg', 'harshal-s-hirve-oZ0xzQFVCWY-unsplash.jpg', 300, 'g', 100, 'mushrooms.png'], ['Onion', 'veg', 'leonita-yuliana-sriyanto-wIc_yXhklos-unsplash.jpg', 1, 'kg', 65, 'onion.png'], ['Peas', 'veg', 'jarek-jordan-WuqQtfhdyfM-unsplash.jpg', 500, 'g', 150, 'peas.png'], ['Potatoes', 'veg', 'lars-blankers-B0s3Xndk6tw-unsplash.jpg', 1, 'kg', 300, 'potatoes.png'], ['Pumpkin', 'veg', 'keenan-sultanik-oxXUePN3u4Q-unsplash.jpg', 1, 'unit', 80, 'pumpkin.png'], ['Radish', 'veg', 'matilda-bellman-p7R7zdTXXH4-unsplash.jpg', 150, 'g', 100, 'radish.png'], ['Spinach', 'veg', 'monika-grabkowska-i14VzlCp-Eo-unsplash.jpg', 200, 'g', 255, 'spinach.png'], ['Sweetcorn', 'veg', 'simona-sergi-k8knGtJAaHc-unsplash.jpg', 3, 'unit', 100, 'sweetcorn.png'], ['Tomatoes', 'veg', 'alice-butenko-c1P1mXEHrik-unsplash.jpg', 500, 'g', 350, 'tomatoes.png'], ['Apples', 'fruit', 'matheus-cenali-wXuzS9xR49M-unsplash.jpg', 6, 'unit', 225, 'apples.png'], ['Apricots', 'fruit', 'masa-zeks-P_n9OZOcGrw-unsplash.jpg', 320, 'g', 190, 'apricots.png'], ['Blackberries', 'fruit', 'kateryna-moskalova-tFj5BMAwK-Q-unsplash.jpg', 300, 'g', 250, 'blackberries.png'], ['Blueberries', 'fruit', 'melissa-belanger-usE0kpV_yLo-unsplash.jpg', 200, 'g', 160, 'blueberries.png'], ['Cherries', 'fruit', 'vino-li-OseN2JZdcY4-unsplash.jpg', 700, 'g', 545, 'cherries.png'], ['Grapefruit', 'fruit', 'rayia-soderberg-gUS4Ouhy1pU-unsplash.jpg', 2, 'unit', 310, 'grapefruit.png'], ['Nectarines', 'fruit', 'dmitriy-koryas--P2YUqgo1Qs-unsplash.jpg', 4, 'unit', 200, 'nectarines.png'], ['Peaches', 'fruit', 'jocelyn-morales-ULg84Va3wdA-unsplash.jpg', 2, 'unit', 400, 'peaches.png'], ['Pears', 'fruit', 'tijana-drndarski-RUiYB0Wjx9k-unsplash.jpg', 6, 'unit', 200, 'pears.png'], ['Plums', 'fruit', 'max-griss-Zfpa8iH5ZkU-unsplash.jpg', 250, 'g', 395, 'plums.png'], ['Pomegranates', 'fruit', 'gr-stocks-SCMnIJV3DrQ-unsplash.jpg', 1, 'unit', 130, 'pomegranates.png'], ['Raspberries', 'fruit', 'sina-asgari-sgwxjKLqO24-unsplash.jpg', 300, 'g', 300, 'raspberries.png'], ['Strawberries', 'fruit', 'maksim-shutov-IXOjM_g-XBQ-unsplash.jpg', 800, 'g', 300, 'strawberries.png'], ['Watermelon', 'fruit', 'juven-dunn-hUkZv0Y47Ic-unsplash.jpg', 1, 'unit', 295, 'watermelon.png'], ['Salmon', 'fish', 'abstral-official-dKhkCiD4zEQ-unsplash.jpg', 240, 'g', 400, 'salmon.png'], ['Jelly Beans', 'snack', 'amit-lahav-3t07n27XK-w-unsplash.jpg', 50, 'g', 100, 'jelly_beans.png'], ['Honey', 'sauce', 'art-rachen-Asj5DFw8UAw-unsplash.jpg', 1, 'unit', 480, 'honey.png'], ['Ketchup', 'sauce', 'ashkan-forouzani-dYAPoTlWWZs-unsplash.jpg', 240, 'g', 300, 'ketchup.png'], ['Milk', 'dairy', 'elizabeth-dunne-ccV4kUrSYIM-unsplash.jpg', 1, 'pint', 180, 'milk.png'], ['Biscuits', 'snack', 'ellieelien-04yMqTmUeHQ-unsplash.jpg', 200, 'g', 150, 'biscuits.png'], ['Burgers', 'meat', 'izzy-park-OKBCiPpTHag-unsplash.jpg', 4, 'unit', 450, 'burgers.png'], ['Sausages', 'meat', 'jonathan-taylor-GydZBn-7LMM-unsplash.jpg', 6, 'unit', 400, 'sausages.png'], ['Bread', 'bread', 'laura-ockel-uugOo5Lr_iM-unsplash.jpg', 1, 'unit', 160, 'bread.png'], ['Basil plant', 'herb', 'monika-grabkowska-rICRgergpIc-unsplash.jpg', 1, 'unit', 250, 'basil_plant.png'], ['Crisps', 'snack', 'mustafa-bashari-S4PC4SeKwKg-unsplash.jpg', 6, 'unit', 275, 'crisps.png'], ['Eggs', 'dairy', 'nick-fewings-qlLCBkTSYAI-unsplash.jpg', 6, 'unit', 110, 'eggs.png'], ['Orange Juice', 'drink', 'paul-hanaoka-8WYjqXqNZs4-unsplash.jpg', 1, 'pint', 180, 'orange_juice.png'], ['Rice', 'grain', 'pierre-bamin--LdilhDx3sk-unsplash.jpg', 2000, 'g', 130, 'rice.png'], ['Chocolate Bar', 'snack', 'tamas-pap-6IDGTjq_Pic-unsplash.jpg', 1, 'unit', 190, 'chocolate_bar.png'], ['Peanut Butter', 'sauce', 'tetiana-bykovets-Ht7ZhGt2UXg-unsplash.jpg', 300, 'g', 210, 'peanut_butter.png']];

function initProducts(callback){
    productDetails = [];
    for(var i = 0; i < imagesArr.length; i++){
      var thisProduct = {name: imagesArr[i][0], type: imagesArr[i][1], image: imagesArr[i][6], 
        packsize: imagesArr[i][3], units: imagesArr[i][4], price: imagesArr[i][5], productID: i};
      productDetails.push(thisProduct);

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
  var myDiv = document.getElementsById("shop-product");
  myDiv.classList = "shop-bigproduct";
  
}


$(document).ready(function () {
  $(function () {
      $(".preloader").fadeOut();
  });

  $(window).scroll(function(){
      var scroll = $(window).scrollTop();
      if (scroll > 200) {
          $('#page-navigation').addClass('bg-white').removeClass('bg-transparent');
          $('#page-navigation').addClass('navbar-light').removeClass('navbar-dark');
      }else{
          $('#page-navigation').addClass('bg-transparent').removeClass('bg-white');
          $('#page-navigation').addClass('navbar-dark').removeClass('navbar-light');
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