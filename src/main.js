$(document).ready(function() {
  $(".grid-container").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
    prevArrow: $(".arrow__left"),
    nextArrow: $(".arrow__right"),
    speed: 1000,
    easing: "easeOutExpo",
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true
        }
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true
        }
      }
    ]
  });
});

$(document).ready(function() {
  $(".manageDisplay").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    arrows: true,
    prevArrow: $(".arrow__container"),
    nextArrow: $(".arrow__container--right")
  });
});

$(".hamburger").on("click", function(e) {
  $(".hamburger").toggleClass("cross");
  $(".menu-btn").toggleClass("menu-active");
  if (!$(".navigation").hasClass("scrolled")) {
    e.currentTarget.parentNode.classList.toggle("scrolled");
  } else if ($(".navigation").hasClass("scrolled")) {
    // e.currentTarget.parentNode.classList.remove("scrolled");
  }
});

$(".paragraph--mobile").on("click", function(e) {
  e.currentTarget.parentNode.parentNode.classList.remove("menu-active");
  $(".hamburger").toggleClass("cross");
});

$(".manage-icon").on("click", function() {
  $(".manage-icon").toggleClass("cross");
  $(".shop-btn").toggleClass("shop-active");
});

$(window).scroll(function() {
  $(".navigation").toggleClass("scrolled", $(this).scrollTop() > 10);
});

let question = document.querySelectorAll(".question");

function activation(element) {
  question.forEach(item => {
    item.classList.remove("is-activated");
  });

  element.classList.add("is-activated");
}

function deactivation() {
  question.forEach(item => {
    item.classList.remove("is-activated");
  });
}

const questionsContainer = document.querySelector(".questions");

questionsContainer.addEventListener("click", e => {
  const target = e.target;
  const parentNode = target.parentNode;
  // console.log(target);
  // console.log(parentNode);

  if (
    target.classList.contains("tab") &&
    !parentNode.classList.contains("is-activated")
  ) {
    activation(parentNode);
  } else if (
    target.classList.contains("tab") &&
    parentNode.classList.contains("is-activated")
  ) {
    deactivation();
  }
});

let tabs = document.querySelectorAll(".tab-name");
let tabContent = document.querySelectorAll(".tab-content");
let tabId;

function highlite() {
  tabs.forEach(item => {
    item.classList.remove("is-highlated");
  });
  this.classList.add("is-highlated");
  tabId = this.getAttribute("data-tab-name");
  selectTabContent(tabId);
}

function selectTabContent(tabId) {
  tabContent.forEach(item => {
    item.classList.contains(tabId)
      ? item.classList.add("changed")
      : item.classList.remove("changed");
  });
}

tabs.forEach(item => {
  item.addEventListener("click", highlite);
});

let openWindow = document.getElementById("openModal");
let closeWindow = document.getElementById("closeModal");

function openModal() {
  if (!$("#overlay").hasClass("active")) {
    $("#overlay").toggleClass("active");
  } else if ($("#overlay").hasClass("active")) {
    $("#overlay").remove("active");
  }
  if (!$(".login__panel").hasClass("active")) {
    $(".login__panel").toggleClass("active");
  } else if ($(".login__panel").hasClass("active")) {
    $(".login__panel").remove("active");
  }
}

function closeModal(e) {
  e.target.parentNode.classList.remove("active");
  e.target.parentNode.parentNode.classList.remove("active");
}

openWindow.addEventListener("click", openModal);
closeWindow.addEventListener("click", closeModal);

const array = [];

const cartNum = document.getElementById("cart");
const cartMobile = document.getElementById("cart--hidden");

function pushUp() {
  function push(buy) {
    var buyNum = "(" + buy + ")";
    let buyMob = "(" + buy + ")";
    cartNum.innerHTML = buyNum;
    cartMobile.innerHTML = buyMob;
  }

  push(buy());

  function buy() {
    if (array.length < 3) {
      array.push(1);
    }
    return array.length;
  }
}

function pushDown() {
  function push(buy) {
    var buyNum = "(" + buy + ")";
    let buyMob = "(" + buy + ")";
    cartNum.innerHTML = buyNum;
    cartMobile.innerHTML = buyMob;
  }

  push(buy());

  function buy() {
    return array.length;
  }
}

let buttons = document.querySelectorAll(".button--prod");
buttons.forEach(function(element) {
  element.addEventListener("click", pushUp);
});

let openShop = document.querySelectorAll("#shopOpen");

let closeShop = document.getElementById("closeShop");

function openShopList(e) {
  if (!$(".shopping-list").hasClass("active")) {
    $(".shopping-list").toggleClass("active");
  } else if ($(".shopping-list").hasClass("active")) {
    $(".shopping-list").remove("active");
  }
  let shopButton = document.querySelectorAll(".shop-btn");
  let icon = document.querySelector(".manage-icon");
  if (icon.classList.contains("cross")) {
    icon.classList.remove("cross");
  } else {
    icon.classList.add("cross");
  }

  for (let i = 0; i < shopButton.length; i++) {
    if (shopButton[i].classList.contains("shop-active")) {
      shopButton[i].classList.remove("shop-active");
    } else {
      shopButton[i].classList.add("shop-active");
    }
  }
}

function closeShopModal(e) {
  e.target.parentNode.classList.remove("active");
  e.target.parentNode.parentNode.classList.remove("active");
}

for (let item of openShop) {
  item.addEventListener("click", openShopList);
}

closeShop.addEventListener("click", closeShopModal);

let removeCartButtons = document.querySelectorAll(".danger__button");
for (let i = 0; i < removeCartButtons.length; i++) {
  let button = removeCartButtons[i];
  button.addEventListener("click", removeCartItem);
}

let quantityInputs = document.querySelectorAll(".item__quantity");
for (let i = 0; i < quantityInputs.length; i++) {
  let input = quantityInputs[i];
  input.addEventListener("change", quantityChanged);
}

let addToCart = document.querySelectorAll(".button--prod");
for (let i = 0; i < addToCart.length; i++) {
  let button = addToCart[i];
  button.addEventListener("click", addToCartClicked);
}

document.querySelector(".purchase").addEventListener("click", purchaseClicked);

function purchaseClicked() {
  alert("Thank you for your purchase");
  let shop = document.querySelector(".shopping__container");
  while (shop.hasChildNodes()) {
    shop.removeChild(shop.firstChild);
  }
  cartMobile.innerText = "(0)";
  cartNum.innerHTML = "(0)";
  updateCartTotal();
}

function removeCartItem(e) {
  let buttonClicked = e.target;
  buttonClicked.parentNode.parentNode.remove();
  updateCartTotal();
  array.pop();
  pushDown();
}

function quantityChanged(e) {
  let input = e.target;
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1;
  }
  updateCartTotal();
}

function addToCartClicked(e) {
  let button = e.target;
  let shopItem = button.parentNode.parentNode.parentNode;
  let title = shopItem.getElementsByClassName("products__text")[0].innerText;
  let price = shopItem.getElementsByClassName("price")[0].innerText;
  let imageSrc = shopItem.getElementsByClassName("image")[0].src;
  addItemToCart(title, price, imageSrc);
  updateCartTotal();
}

function addItemToCart(title, price, imageSrc) {
  let cartRow = document.createElement("div");
  cartRow.classList.add("row");
  let shoppingContainer = document.querySelector(".shopping__container");
  let cartItemsNames = shoppingContainer.getElementsByClassName("item__name");
  for (let i = 0; i < cartItemsNames.length; i++) {
    if (cartItemsNames[i].innerText == title) {
      alert("This item is already added to a cart!");
      return;
    }
  }
  let cartRowContents = `
   <div class="item item__title">
      <div class="item__title">
         <div class="item__content item__name">${title}</div>
         <img class="item__content item__image" src="${imageSrc}">
      </div>
  </div>
  <div class="item item__price item__content item__bottle-price">${price.replace(
    "USD",
    ""
  )}</div>
  <input class="item item__quantity item__content item__input" type="number" id="quantity" value="1" min="1" max="30">
  <div class="item item__remove">
      <button class="item__button danger__button item__content">Remove</button>
  </div>
  `;
  cartRow.innerHTML = cartRowContents;
  shoppingContainer.append(cartRow);
  cartRow
    .getElementsByClassName("danger__button")[0]
    .addEventListener("click", removeCartItem);
  cartRow
    .getElementsByClassName("item__quantity")[0]
    .addEventListener("change", quantityChanged);
}

function updateCartTotal() {
  let cartItemContainer = document.getElementsByClassName("shopping-list")[0];
  let cartRows = cartItemContainer.getElementsByClassName("row");
  let total = 0;
  for (let i = 0; i < cartRows.length; i++) {
    let cartRow = cartRows[i];
    let priceElement = cartRow.getElementsByClassName("item__price")[0];
    let quantityElement = cartRow.getElementsByClassName("item__quantity")[0];
    let price = parseFloat(priceElement.innerText.replace("$", ""));
    let quantity = quantityElement.value;
    total = total + price * quantity;
  }
  total = Math.round(total * 100) / 100;
  document.getElementsByClassName("cart-total")[0].innerText = "$" + total;
}

let textInformationLeft = document.querySelectorAll(".info__left");
let textInformationRight = document.querySelectorAll(".info__right");
let infoPopupLeft = document.querySelector(".info__popup--left");
let infoPopupRight = document.querySelector(".info__popup--right");

function showInfoTextLeft() {
  if (infoPopupLeft.classList.contains("active")) {
    infoPopupLeft.classList.remove("active");
  } else {
    infoPopupLeft.classList.add("active");
  }
}

function showInfoTextRight() {
  if (infoPopupRight.classList.contains("active")) {
    infoPopupRight.classList.remove("active");
  } else {
    infoPopupRight.classList.add("active");
  }
}

for (let i = 0; i < textInformationLeft.length; i++) {
  textInformationLeft[i].addEventListener("click", showInfoTextLeft);
}

for (let i = 0; i < textInformationRight.length; i++) {
  textInformationRight[i].addEventListener("click", showInfoTextRight);
}
