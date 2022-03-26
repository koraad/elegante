// light mode

const lightMode = document.getElementById('light-mode');


lightMode.onclick = () => {
  if (lightMode.classList.contains('fa-sun')) {
    lightMode.classList.replace('fa-sun', 'fa-moon');
    document.body.classList.add('active');
  } else {
    lightMode.classList.replace('fa-moon', 'fa-sun');
    document.body.classList.remove('active');
  }
}

// menu toggle

const menuToggle = document.getElementById('menu-toggle');


menuToggle.onclick = () => {
  if (menuToggle.classList.contains('fa-bars')) {
    menuToggle.classList.replace('fa-bars', 'fa-xmark');
    document.querySelector('.navbar').classList.add('active');
  } else {
    menuToggle.classList.replace('fa-xmark', 'fa-bars');
    document.querySelector('.navbar').classList.remove('active');

  }
}


window.onscroll = () => {
  document.querySelector('.navbar').classList.remove('active');
  menuToggle.classList.replace('fa-xmark', 'fa-bars');
} 



// search panel

document.getElementById('search-icon').onclick = () => {
  document.getElementById('search-form').classList.add('active');

}
document.getElementById('search-toggle').onclick = () => {
  document.getElementById('search-form').classList.remove('active');

}

// hero swiper js
var swiper1 = new Swiper(".mySwiper-hero", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination1",
    clickable: true,
  },
  loop:true
});


// back to top button

// scrollButton = document.querySelector(".top-btn");

// // When scrolls down 1000px from the top of the document, the button appears
// window.onscroll = () => {
//   if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
//     scrollButton.style.display = "inline-block";
//   } else {
//     scrollButton.style.display = "none";
//   }
// }
