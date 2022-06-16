// back to top js

const btn = document.querySelector('.top-btn');
const header = document.querySelector('header');

window.addEventListener('scroll', e => {
	btn.style.display = window.scrollY > 1000 ? 'block' : 'none';
  });
window.addEventListener('scroll', e => {
	header.style.backgroundColor = window.scrollY > 100 ? 'var(--color-normal)' : 'transparent';
	header.style.boxShadow = window.scrollY > 100 ? '0.5px 0.5px 2px 0.5px rgb(136,136,136)' : 'none';
  });

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

// cart section js

const cartOpenButton = document.querySelector('.fa-cart-shopping');
const cartCloseButton = document.querySelector('#cart-toggle');
const cartSection = document.querySelector('.cart');

cartOpenButton.onclick = (cartOpen);
cartCloseButton.onclick = (cartClose);

function cartOpen() {
	cartSection.classList.add('active');
}
function cartClose() {
	cartSection.classList.remove('active');
}

// Add to cart button js

const addToCart = document.querySelectorAll('.card-btn.btn-cart');

addToCart.forEach(button => {
	button.onclick = ()=> {
		cartOpen();
	}
})

// quantity picker js

// function increaseCount(a, b) {
// 	var input = b.previousElementSibling;
// 	var value = parseInt(input.value, 10);
// 	value = isNaN(value) ? 0 : value;
// 	value++;
// 	input.value = value;
//   }
  
//   function decreaseCount(a, b) {
// 	var input = b.nextElementSibling;
// 	var value = parseInt(input.value, 10);
// 	if (value > 1) {
// 	  value = isNaN(value) ? 0 : value;
// 	  value--;
// 	  input.value = value;
// 	}
//   }

// buy now button

const buyNowButton = document.querySelector('#buy-now');
const orderPage = document.querySelector('.order-page');
const orderPageButton = document.querySelector('.btn-order-page');

buyNowButton.onclick = ()=> {
	orderPage.classList.add('active');

}

orderPageButton.onclick = ()=> {
	orderPage.classList.remove('active');
}

// signup section

// document.querySelector('.signup-btn').onclick = () => {
//   document.querySelector('.signup').classList.add('active');

// }
// document.querySelector('.close-btn').onclick = () => {
//   document.querySelector('.signup').classList.remove('active');

// }

// // hero swiper js
// var swiperHero = new Swiper(".mySwiper-hero", {
//   spaceBetween: 30,
//   centeredSlides: true,
//   autoplay: {
//     delay: 3000,
//     disableOnInteraction: false,
//   },
//   pagination: {
//     el: ".swiper-paginationHero",
//     clickable: true,
//   },
//   loop:true
// });

// preview menu items js

const menuContainer = document.querySelector('.menu-container');
const previewContainer = document.querySelector('.preview-container');
const productCards = menuContainer.querySelectorAll('.card');
const previewCards = previewContainer.querySelectorAll('.card');

productCards.forEach(card => {
	card.querySelector('.btn-overlay').onclick = ()=> {
		previewContainer.classList.remove('close');
		dataName = card.getAttribute('data-name');	
		
		previewCards.forEach(previewCard => {
			dataTarget = previewCard.getAttribute('data-target');

			if(dataName == dataTarget) {
				previewCard.classList.add('active');
			}
		})
	}
})

previewCards.forEach(preview => {
	preview.querySelector('.card-flex-box .fa-xmark').onclick = ()=> {
		preview.classList.remove('active');
		previewContainer.classList.add('close');
	}
})


// form validation

var check = document.getElementById('check');
var username = document.getElementById('name');
var tel = document.getElementById('tel');
var email = document.getElementById('email');
var address = document.getElementById('address');
var message = document.getElementById('message');


check.addEventListener('click', (e) => {
	e.preventDefault();
	
	checkInputs();

	if (nameSuccess == 1 && telSuccess == 1 && emailSuccess == 1 && addressSuccess == 1 && messageSuccess == 1) {
		popupWindow();
	} 
});


function checkInputs() {
	const usernameValue = username.value.trim();
	const telValue = tel.value.trim();
	const emailValue = email.value.trim();
	const addressValue = address.value.trim();
	const messageValue = message.value.trim();	
	
	
	if(usernameValue == '') {
		setErrorFor(username, 'Name cannot be blank');
	} else if (usernameValue.length < 3) {
		setErrorFor(username, 'Name cannot be less than 3 letters');
	} else {
		setSuccessFor(username);
		nameSuccess = 1;
	}
	
	if(telValue == '') {
		setErrorFor(tel, 'Tel number cannot be blank');
	} else if (telValue.length < 10) {
		setErrorFor(tel, 'Tel number cannot be less than 10 digits');
	}else {
		setSuccessFor(tel);
		telSuccess = 1;
	}
	if(emailValue == '') {
		setErrorFor(email, 'Email cannot be blank');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
	} else {
		setSuccessFor(email);
		emailSuccess = 1;
	}
	if(addressValue == '') {
		setErrorFor(address, 'Address cannot be blank');
	} else if (addressValue.length < 20) {
		setErrorFor(address, 'Address cannot be less than 20 characters');
	} else {
		setSuccessFor(address);
		addressSuccess = 1;
	}
	if(messageValue == '') {
		setErrorFor(message, 'Message cannot be blank');
	} else if (addressValue.length < 5) {
		setErrorFor(tel, 'Message cannot be less than 5 characters');
	} else {
		setSuccessFor(message);
		messageSuccess = 1;
		
	}

	
	document.getElementById('output-name').innerHTML = usernameValue
	document.getElementById('output-tel').innerHTML = telValue
	document.getElementById('output-email').innerHTML = emailValue
	document.getElementById('output-address').innerHTML = addressValue
	document.getElementById('output-message').innerHTML = messageValue
	document.getElementById('output-category').innerHTML = document.querySelector('input[name="Query Type"]:checked').value;
	


}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}


// popup close buttons

document.getElementById('edit').addEventListener('click', () => {
	document.getElementById('popup').classList.remove('active');
})
document.getElementById('popup-close').addEventListener('click', () => {
	document.getElementById('popup').classList.remove('active');
})

// popup function

function popupWindow() {
	
	document.getElementById('popup').classList.add('active');

}

// faq section js

const faqs = document.querySelectorAll('.faq-content');


faqs.forEach(faq => {
	faq.querySelector('.question').onclick = () => {
		faq.classList.toggle('active');

		faqs.forEach(item => {
			if(item!==faq) {
				item.classList.remove('active');
			}
			
		})	 
	}
})




// reviews section swiper js

var swiper = new Swiper('.mySwiper-reviews', {
    slidesPerView: 4,
    spaceBetween: 30,
    pagination: {
      el: '.swiper-paginationReviews',
      clickable: true
    },
	autoplay: {
		delay: 2000,
		disableOnInteraction: false,
	},
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	loop:true,
	breakpoints: {
		0: {
			slidesPerView: 1,
		},
		720: {
			slidesPerView: 1,
		},
		1050: {
			slidesPerView: 2,
		},
		1024: {
			slidesPerView: 3,
		},
		1350: {
			slidesPerView: 4,
		}
	}
  })

//   loader js and signup popup js

const loader = document.querySelector('.loader');

window.onload = () => {
	setInterval(fadeOut, 4500);
	setTimeout(popup,12500);
	scrollTo(0,0);

}

function fadeOut() {
	loader.classList.add('fade');
} 

function popup() {
	document.querySelector('.signup').classList.add('active');
}
