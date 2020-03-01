"use strict";

$(document).ready(function () {
  $(".grid-container").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
    prevArrow: $(".arrow__left"),
    nextArrow: $(".arrow__right"),
    speed: 1000,
    easing: "easeOutExpo",
    responsive: [{
      breakpoint: 900,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true
      }
    }, {
      breakpoint: 650,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true
      }
    }]
  });
});

$(document).ready(function () {
  $(".manageDisplay").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    arrows: true,
    prevArrow: $(".arrow__container"),
    nextArrow: $(".arrow__container--right")
  });
});

$(".hamburger").on("click", function (e) {
  $(".hamburger").toggleClass("cross");
  $(".menu-btn").toggleClass("menu-active");
  if (!$(".navigation").hasClass("scrolled")) {
    e.currentTarget.parentNode.classList.toggle("scrolled");
  } else if ($(".navigation").hasClass("scrolled")) {
    // e.currentTarget.parentNode.classList.remove("scrolled");
  }
});

$(".paragraph--mobile").on("click", function (e) {
  e.currentTarget.parentNode.parentNode.classList.remove("menu-active");
  $(".hamburger").toggleClass("cross");
});

$(".manage-icon").on("click", function () {
  $(".manage-icon").toggleClass("cross");
  $(".shop-btn").toggleClass("shop-active");
});

$(window).scroll(function () {
  $(".navigation").toggleClass("scrolled", $(this).scrollTop() > 10);
});

var question = document.querySelectorAll(".question");

function activation(element) {
  question.forEach(function (item) {
    item.classList.remove("is-activated");
  });

  element.classList.add("is-activated");
}

function deactivation() {
  question.forEach(function (item) {
    item.classList.remove("is-activated");
  });
}

var questionsContainer = document.querySelector(".questions");

questionsContainer.addEventListener("click", function (e) {
  var target = e.target;
  var parentNode = target.parentNode;
  // console.log(target);
  // console.log(parentNode);

  if (target.classList.contains("tab") && !parentNode.classList.contains("is-activated")) {
    activation(parentNode);
  } else if (target.classList.contains("tab") && parentNode.classList.contains("is-activated")) {
    deactivation();
  }
});

var tabs = document.querySelectorAll(".tab-name");
var tabContent = document.querySelectorAll(".tab-content");
var tabId = void 0;

function highlite() {
  tabs.forEach(function (item) {
    item.classList.remove("is-highlated");
  });
  this.classList.add("is-highlated");
  tabId = this.getAttribute("data-tab-name");
  selectTabContent(tabId);
}

function selectTabContent(tabId) {
  tabContent.forEach(function (item) {
    item.classList.contains(tabId) ? item.classList.add("changed") : item.classList.remove("changed");
  });
}

tabs.forEach(function (item) {
  item.addEventListener("click", highlite);
});

var openWindow = document.getElementById("openModal");
var closeWindow = document.getElementById("closeModal");

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

var array = [];

var cartNum = document.getElementById("cart");
var cartMobile = document.getElementById("cart--hidden");

function pushUp() {
  function push(buy) {
    var buyNum = "(" + buy + ")";
    var buyMob = "(" + buy + ")";
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
    var buyMob = "(" + buy + ")";
    cartNum.innerHTML = buyNum;
    cartMobile.innerHTML = buyMob;
  }

  push(buy());

  function buy() {
    return array.length;
  }
}

var buttons = document.querySelectorAll(".button--prod");
buttons.forEach(function (element) {
  element.addEventListener("click", pushUp);
});

var openShop = document.querySelectorAll("#shopOpen");

var closeShop = document.getElementById("closeShop");

function openShopList(e) {
  if (!$(".shopping-list").hasClass("active")) {
    $(".shopping-list").toggleClass("active");
  } else if ($(".shopping-list").hasClass("active")) {
    $(".shopping-list").remove("active");
  }
  var shopButton = document.querySelectorAll(".shop-btn");
  var icon = document.querySelector(".manage-icon");
  if (icon.classList.contains("cross")) {
    icon.classList.remove("cross");
  } else {
    icon.classList.add("cross");
  }

  for (var i = 0; i < shopButton.length; i++) {
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

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = openShop[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var item = _step.value;

    item.addEventListener("click", openShopList);
  }
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator.return) {
      _iterator.return();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}

closeShop.addEventListener("click", closeShopModal);

var removeCartButtons = document.querySelectorAll(".danger__button");
for (var i = 0; i < removeCartButtons.length; i++) {
  var button = removeCartButtons[i];
  button.addEventListener("click", removeCartItem);
}

var quantityInputs = document.querySelectorAll(".item__quantity");
for (var _i = 0; _i < quantityInputs.length; _i++) {
  var input = quantityInputs[_i];
  input.addEventListener("change", quantityChanged);
}

var addToCart = document.querySelectorAll(".button--prod");
for (var _i2 = 0; _i2 < addToCart.length; _i2++) {
  var _button = addToCart[_i2];
  _button.addEventListener("click", addToCartClicked);
}

document.querySelector(".purchase").addEventListener("click", purchaseClicked);

function purchaseClicked() {
  alert("Thank you for your purchase");
  var shop = document.querySelector(".shopping__container");
  while (shop.hasChildNodes()) {
    shop.removeChild(shop.firstChild);
  }
  cartMobile.innerText = "(0)";
  cartNum.innerHTML = "(0)";
  updateCartTotal();
}

function removeCartItem(e) {
  var buttonClicked = e.target;
  buttonClicked.parentNode.parentNode.remove();
  updateCartTotal();
  array.pop();
  pushDown();
}

function quantityChanged(e) {
  var input = e.target;
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1;
  }
  updateCartTotal();
}

function addToCartClicked(e) {
  var button = e.target;
  var shopItem = button.parentNode.parentNode.parentNode;
  var title = shopItem.getElementsByClassName("products__text")[0].innerText;
  var price = shopItem.getElementsByClassName("price")[0].innerText;
  var imageSrc = shopItem.getElementsByClassName("image")[0].src;
  addItemToCart(title, price, imageSrc);
  updateCartTotal();
}

function addItemToCart(title, price, imageSrc) {
  var cartRow = document.createElement("div");
  cartRow.classList.add("row");
  var shoppingContainer = document.querySelector(".shopping__container");
  var cartItemsNames = shoppingContainer.getElementsByClassName("item__name");
  for (var _i3 = 0; _i3 < cartItemsNames.length; _i3++) {
    if (cartItemsNames[_i3].innerText == title) {
      alert("This item is already added to a cart!");
      return;
    }
  }
  var cartRowContents = "\n   <div class=\"item item__title\">\n      <div class=\"item__title\">\n         <div class=\"item__content item__name\">" + title + "</div>\n         <img class=\"item__content item__image\" src=\"" + imageSrc + "\">\n      </div>\n  </div>\n  <div class=\"item item__price item__content item__bottle-price\">" + price.replace("USD", "") + "</div>\n  <input class=\"item item__quantity item__content item__input\" type=\"number\" id=\"quantity\" value=\"1\" min=\"1\" max=\"30\">\n  <div class=\"item item__remove\">\n      <button class=\"item__button danger__button item__content\">Remove</button>\n  </div>\n  ";
  cartRow.innerHTML = cartRowContents;
  shoppingContainer.append(cartRow);
  cartRow.getElementsByClassName("danger__button")[0].addEventListener("click", removeCartItem);
  cartRow.getElementsByClassName("item__quantity")[0].addEventListener("change", quantityChanged);
}

function updateCartTotal() {
  var cartItemContainer = document.getElementsByClassName("shopping-list")[0];
  var cartRows = cartItemContainer.getElementsByClassName("row");
  var total = 0;
  for (var _i4 = 0; _i4 < cartRows.length; _i4++) {
    var cartRow = cartRows[_i4];
    var priceElement = cartRow.getElementsByClassName("item__price")[0];
    var quantityElement = cartRow.getElementsByClassName("item__quantity")[0];
    var price = parseFloat(priceElement.innerText.replace("$", ""));
    var quantity = quantityElement.value;
    total = total + price * quantity;
  }
  total = Math.round(total * 100) / 100;
  document.getElementsByClassName("cart-total")[0].innerText = "$" + total;
}

var textInformationLeft = document.querySelectorAll(".info__left");
var textInformationRight = document.querySelectorAll(".info__right");
var infoPopupLeft = document.querySelector(".info__popup--left");
var infoPopupRight = document.querySelector(".info__popup--right");

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

for (var _i5 = 0; _i5 < textInformationLeft.length; _i5++) {
  textInformationLeft[_i5].addEventListener("click", showInfoTextLeft);
}

for (var _i6 = 0; _i6 < textInformationRight.length; _i6++) {
  textInformationRight[_i6].addEventListener("click", showInfoTextRight);
}