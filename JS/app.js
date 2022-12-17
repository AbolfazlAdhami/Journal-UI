let searchBtn = document.querySelector("#search-btn");
let searchBox = document.querySelector(".search-box");
let loginOpen = document.querySelector("#login");
let loginClose = document.querySelector("#close-login");
let loginContainer = document.querySelector("#loginMenu");
let menuBtn = document.querySelector("#menu-icon");
let menu = document.querySelector("#navbar");

window.onscroll = () => {
  searchBtn.classList.remove("fa-xmark");
  searchBox.classList.remove("active");
};

searchBtn.addEventListener("click", () => {
  if (menu.classList.contains("active")) {
    menuBtn.classList.remove("fa-xmark");
    menu.classList.remove("active");
  }

  searchBtn.classList.toggle("fa-xmark");
  searchBox.classList.toggle("active");
});

loginOpen.addEventListener("click", () => {
  if (menu.classList.contains("active") || searchBox.classList.contains("active")) {
    menuBtn.classList.remove("fa-xmark");
    menu.classList.remove("active");
    searchBtn.classList.remove("fa-xmark");
    searchBox.classList.remove("active");
  }

  loginContainer.classList.add("active");
});

loginClose.addEventListener("click", () => {
  loginContainer.classList.remove("active");
});
menuBtn.addEventListener("click", () => {
  if (searchBox.classList.contains("active")) {
    searchBtn.classList.remove("fa-xmark");
    searchBox.classList.remove("active");
  }

  menuBtn.classList.toggle("fa-xmark");
  menu.classList.toggle("active");
});

// Video BackGround Changer//
let vidBtn = document.querySelectorAll(".vid-btn");
vidBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelector(".contorols .active").classList.remove("active");
    btn.classList.add("active");
    let src = btn.getAttribute("data-src");

    document.querySelector(".video-container video").setAttribute("src", src);
  });
});

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  breakpoints: {
    640: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  },
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var brand_swiper = new Swiper(".brand-slider", {
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  breakpoints: {
    420: { slidesPerView: 2 },
    768: { slidesPerView: 3 },
    960: { slidesPerView: 4 },
    1200: { slidesPerView: 5 },
  },
});
