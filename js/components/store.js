const container = document.querySelector(".featured");
const productsList = document.querySelectorAll(".products-list");
const featuredList = document.querySelector(".featured-list");
const recommendedList = document.querySelector(".recommended-list");
const saleList = document.querySelector(".sale-list");

const url =
  "https://api.rawg.io/api/games?key=4a1968e972224713863186ae4b4cae2a";

async function apiCall() {
  try {
    const response = await fetch(url);

    const data = await response.json();

    const results = data.results;

    for (let i = 0; i < productsList.length; i++) {
      productsList[i].innerHTML = "";
    }

    for (let i = 0; i < results.length; i++) {
      if (i === 6) {
        break;
      }

      const game = results[i];

      console.log(game);

      //   featuredList.innerHTML += `<div class="product">
      //                                 <a href="product.html?id=${game.id}">
      //                                 <img src="${game.short_screenshots[0].image}">
      //                                 <h5>${game.name}</h5>
      //                                 <div class="product-content">
      //                                   <p>${game.genres[0].name}</p>
      //                                   <span class="price">599,-</span>
      //                                 </div>
      //                                 </a>
      //                                 <button class="btn btn-primary shop-item-button" type="button">ADD TO CART</button>
      //                               </div>`;
      // }

      recommendedList.innerHTML += `<div class="shop-item">
                                    <span class="shop-item-title">${game.name}</span>
                                    <img class="shop-item-image" src="${game.short_screenshots[0].image}">
                                    <div class="shop-item-details">
                                      <span class="shop-item-price">599,-</span>
                                      <button class="shop-item-button"><a href="product.html?id=${game.id}">VIEW</a></button>
                                      <button class="shop-item-button shop-item-cart" type="button">ADD TO CART</button>
                                    </div>
                                </div>`;
    }

    for (let i = 6; i < results.length; i++) {
      if (i === 12) {
        break;
      }

      const game = results[i];

      //   recommendedList.innerHTML += `<div class="product">
      //                                     <a href="product.html?id=${game.id}">
      //                                     <img src="${game.short_screenshots[0].image}">
      //                                     <h5>${game.name}</h5>
      //                                     <div class="product-content">
      //                                       <p>${game.genres[0].name}</p>
      //                                       <span class="price">599,-</span>
      //                                     </div>
      //                                     </a>
      //                                   </div>`;
      // }

      featuredList.innerHTML += `<div class="shop-item">
                                    <span class="shop-item-title">${game.name}</span>
                                    <img class="shop-item-image" src="${game.short_screenshots[0].image}">
                                    <div class="shop-item-details">
                                      <span class="shop-item-price">599,-</span>
                                      <button class="shop-item-button"><a href="product.html?id=${game.id}">VIEW</a></button>
                                      <button class="shop-item-button shop-item-cart" type="button">ADD TO CART</button>
                                    </div>
                                  </div>`;
    }

    for (let i = 12; i < results.length; i++) {
      if (i === 18) {
        break;
      }

      const game = results[i];

      //   saleList.innerHTML += `<div class="product">
      //                             <a href="product.html?id=${game.id}">
      //                             <img src="${game.short_screenshots[0].image}">
      //                             <h5>${game.name}</h5>
      //                             <div class="product-content">
      //                               <p>${game.genres[0].name}</p>
      //                               <span class="sale__price">299,-</span><span class="price">599,-</span>
      //                             </div>
      //                             </a>
      //                           </div>`;
      // }

      saleList.innerHTML += `<div class="shop-item">
                              <span class="shop-item-title">${game.name}</span>
                              <img class="shop-item-image" src="${game.short_screenshots[0].image}">
                              <div class="shop-item-details">
                              <span class="price-container"><span class="sale__price shop-item-price">299,-</span><span class="price">599,-</span></span>
                                <button class="shop-item-button"><a href="product.html?id=${game.id}">VIEW</a></button>
                                <button class="shop-item-button shop-item-cart" type="button">ADD TO CART</button>
                              </div>
                            </div>`;
    }

    const cartContainer = document.querySelector(".cart-container");

    cartContainer.innerHTML = `<h4 class="featured__title">CART</h4>
                            <div class="cart-row">
                              <span class="cart-item cart-header cart-column">ITEM</span>
                              <span class="cart-price cart-header cart-column">PRICE</span>
                              <span class="cart-quantity cart-header cart-column">QUANTITY</span>
                            </div>
                            <div class="cart-items">

                            </div>
                            <div class="cart-total">
                              <strong class="cart-total-title">Total</strong>
                              <span class="cart-total-price">0,-</span>
                            </div>
                            <button class="btn btn-primary btn-purchase" type="button">PURCHASE</button>`;

    if (document.readyState == "loading") {
      document.addEventListener("DOMContentLoaded", ready);
    } else {
      ready();
    }

    function ready() {
      var removeCartItemButtons = document.getElementsByClassName("btn-danger");
      console.log(removeCartItemButtons);
      for (var i = 0; i < removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i];
        button.addEventListener("click", removeCartItem);
      }

      var quantityInputs = document.getElementsByClassName(
        "cart-quantity-input"
      );
      for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i];
        input.addEventListener("change", quantityChanged);
      }

      var addToCartButtons =
        document.getElementsByClassName("shop-item-button");
      for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i];
        button.addEventListener("click", addToCartClicked);
      }
    }

    function removeCartItem(event) {
      var buttonClicked = event.target;
      buttonClicked.parentElement.parentElement.remove();
      updateCartTotal();
    }

    function quantityChanged(event) {
      var input = event.target;
      if (isNaN(input.value) || input.value <= 0) {
        input.value = 1;
      }
      updateCartTotal();
    }

    function addToCartClicked(event) {
      var button = event.target;
      var shopItem = button.parentElement.parentElement;
      var title =
        shopItem.getElementsByClassName("shop-item-title")[0].innerText;
      var price =
        shopItem.getElementsByClassName("shop-item-price")[0].innerText;
      var imageSrc = shopItem.getElementsByClassName("shop-item-image")[0].src;
      addItemToCart(title, price, imageSrc);
      updateCartTotal();
    }

    function addItemToCart(title, price, imageSrc) {
      var cartRow = document.createElement("div");
      cartRow.classList.add("cart-row");
      var cartItems = document.getElementsByClassName("cart-items")[0];
      var cartItemNames = cartItems.getElementsByClassName("cart-item-title");
      for (var i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == title) {
          alert("This item is already added to the cart");
          return;
        }
      }
      var cartRowContents = `
        <div class="cart-item cart-column">
          <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
          <span class="cart-item-title">${title}</span>
        </div>
        <span class="cart-price cart-column">${price}</span>
        <div class="cart-quantity cart-column">
          <input class="cart-quantity-input" type="number" value="1">
          <button class="btn btn-danger" type="button">REMOVE</button>
        </div>
      `;
      cartRow.innerHTML = cartRowContents;
      cartItems.append(cartRow);
      cartRow
        .getElementsByClassName("btn-danger")[0]
        .addEventListener("click", removeCartItem);
      cartRow
        .getElementsByClassName("cart-quantity-input")[0]
        .addEventListener("change", quantityChanged);
    }

    function updateCartTotal() {
      var cartItemContainer = document.getElementsByClassName("cart-items")[0];
      var cartRows = cartItemContainer.getElementsByClassName("cart-row");
      var total = 0;
      for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i];
        var priceElement = cartRow.getElementsByClassName("cart-price")[0];
        var quantityElement = cartRow.getElementsByClassName(
          "cart-quantity-input"
        )[0];
        var price = parseFloat(priceElement.innerText.replace(",-", ""));
        var quantity = quantityElement.value;
        total = total + price * quantity;
      }
      total = Math.round(total * 100) / 100;
      document.getElementsByClassName("cart-total-price")[0].innerText =
        total + ",-";
    }
  } catch (error) {
    console.log(error);
  }
}

apiCall();
