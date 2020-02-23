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
  $(".navigation").toggleClass("scrolled", $(this).scrollTop() > 850);
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
