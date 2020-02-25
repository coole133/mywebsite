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

$(".login").on("click", function() {
  $(".modalcontainer").toggleClass("popup");
});

$(".cross--modal").on("click", function(e) {
  e.currentTarget.parentNode.parentNode.classList.remove("popup");
});

$(".submit").on("click", function(e) {
  e.currentTarget.parentNode.parentNode.classList.remove("popup");
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

let array = [];

function shop() {
  function push(buy) {
    var buyNum = "(" + buy + ")";
    let buyMob = "(" + buy + ")";
    const cartNum = document.getElementById("cart");
    const cartMobile = document.getElementById("cart--hidden");
    cartNum.innerHTML = buyNum;
    cartMobile.innerHTML = buyMob;
  }

  push(buy());

  function buy() {
    array.push(1);
    return array.length;
  }
}

let buttons = document.querySelectorAll(".button--prod");
buttons.forEach(function(element) {
  element.addEventListener("click", shop);
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
