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

// tabs js

const tabButtonContainer = document.querySelector('.tab-btn-container');
const tabContentContainer = document.querySelector('.tab-ctn-container');
const tabButtonNodes = document.querySelectorAll('.tab-number');
const tabContentNodes = document.querySelectorAll('.content-box');

tabButtonNodes.forEach(button => {
  button.onclick = ()=> {
    tabButtonContainer.querySelector('.active').classList.remove('active');
    tabContentContainer.querySelector('.active').classList.remove('active');
    dataName = button.getAttribute('data-name');

    tabContentNodes.forEach(content => {
      dataTarget = content.getAttribute('data-target');

      if(dataName == dataTarget) {
        button.classList.add('active');
        content.classList.add('active');
      }
    })
    
  }
})