// DOM ready

if(document.readyState == 'loading') {
	document.addEventListener("DOMContentLoaded", ready)
} else {
	ready();
}


// back to top js

const btn = document.querySelector('.top-btn');
const header = document.querySelector('header');

window.addEventListener('scroll', e => {
	// btn.style.display = window.scrollY > 1000 ? 'block' : 'none';

	if ((window.innerHeight + window.scrollY > document.body.clientHeight) || window.scrollY < 1000) {
		btn.style.display = 'none';
		

	} else {
		btn.style.display = 'block';
		document.querySelector('.signup-btn').style.display = "flex";
	}

	if(window.innerHeight + window.scrollY > document.body.clientHeight) {
		document.querySelector('.signup-btn').style.display = "none";
	} else {
		document.querySelector('.signup-btn').style.display = "flex";
	}

	// header appear

	header.style.backgroundColor = window.scrollY > 100 ? 'var(--color-normal)' : 'transparent';
	
  });


// light mode

const lightMode = document.getElementById('light-mode');



lightMode.onclick = () => {
	if (document.body.classList.contains('active')) {
        document.body.classList.remove('active');
        localStorage.setItem("theme", "light");
		lightMode.classList.replace('fa-moon', 'fa-sun');

      } else {
        document.body.classList.add('active');
        localStorage.setItem("theme", "dark");
        lightMode.classList.replace('fa-sun', 'fa-moon');

      }
  }

if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add('active');
	lightMode.classList.replace('fa-sun', 'fa-moon');

  }

// navbar toggle

const menuToggle = document.getElementById('menu-toggle');
const mobileToggle = document.getElementById('mobile-toggle');

menuToggle.onclick = () => {
  if (menuToggle.classList.contains('fa-bars')) {
	menuToggle.style.display = 'none';
	
    document.querySelector('.navbar').classList.add('active');
  } else {
    menuToggle.classList.replace('fa-xmark', 'fa-bars');
    document.querySelector('.navbar').classList.remove('active');

  }
}

mobileToggle.onclick = ()=> {
	document.querySelector('.navbar').classList.remove('active');
	menuToggle.style.display = 'inline-block';
}


// search panel

document.getElementById('search-icon').onclick = () => {
  document.getElementById('search-form').classList.add('active');

}
document.getElementById('search-toggle').onclick = () => {
  document.getElementById('search-form').classList.remove('active');

}

// signup section

document.querySelector('.signup-btn').onclick = () => {
  document.querySelector('.signup').classList.add('active');

}
document.querySelector('.close-btn').onclick = () => {
  document.querySelector('.signup').classList.remove('active');

}

// hero swiper js
var swiperHero = new Swiper(".mySwiper-hero", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-paginationHero",
    clickable: true,
  },
  loop:true
});

// preview menu items js


const previewContainer = document.querySelector('.preview-container');
const productCards = document.querySelectorAll('.menu-container .card');
const previewCard = previewContainer.querySelector('.card');

productCards.forEach(card => {
	card.querySelector('.card-btn.quick-btn').onclick = (event)=> {
		previewContainer.classList.remove('close');
		
		let button = event.target;

		let card = button.parentElement.parentElement;
		let imgSrc = card.querySelector('.img-bg img').src
		let price = card.querySelector('.content-bg .price').innerText
		let title = card.querySelector('.content-bg .name').innerText

		addToPreview(imgSrc, price, title);
	}
})

function addToPreview(imgSrc, price, title) {

	previewCard.innerHTML = `<div class="card-flex-box">

								<i class="fa-solid fa-xmark"></i>
								<div class="img-bg">
									<img src="${imgSrc}" alt="">
								</div>
								
								<div class="content-bg">
									<h3 class="name">${title}</h3>
									<small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum doloribus fuga sapiente qui. Earum, molestiae. Corrupti alias nobis illo eos?</small>
									<div class="offer-price">
										<h4>${price}</h4>
									</div>

									<div class="btn-box">
										<button class="card-btn btn-cart">Add to Cart</button>
										<button class="card-btn buy-now">buy now</button>
									</div>
									
								</div>
							</div>    `
	
	previewCard.querySelector('.card-flex-box .fa-xmark').onclick = ()=> {
		previewContainer.classList.add('close');
	}
	previewCard.querySelector('.card-flex-box .buy-now').onclick = ()=> {
		orderOpen();
		previewContainer.classList.add('close');
	}


}


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
		700: {
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




// cart section

// cart open

const cartButtonOpen = document.querySelector('.fa-cart-shopping');
const cartButtonClose = document.querySelector('#cart-toggle');
const cart = document.querySelector('.cart');

cartButtonOpen.onclick = cartOpen;
cartButtonClose.onclick = cartClose;

function cartClose() {
	cart.classList.remove('active');
}

window.onscroll = cartClose;

function cartOpen() {
	cart.classList.add('active');
	
	if(document.querySelector('.navbar').classList.contains('active')) {
		document.querySelector('.navbar').classList.remove('active')
		menuToggle.style.display = 'inline-block';
		
	}
	
}

// buy now button

const buyNowButton = document.querySelector('#buy-now');
const orderPage = document.querySelector('.order-page');

buyNowButton.onclick = ()=> {

	cartClear();
	cartClose();
	orderOpen();
	updateTotal();	
}


// cart empty message

let emptyMessage = document.querySelector('.cart-content .cart-empty')


function emptyMessageShow() {
	emptyMessage.classList.add('active')
	buyNowButton.disabled = true;
}

function emptyMessageRemove() {
	emptyMessage.classList.remove('active')
	buyNowButton.disabled = false;
}

function orderOpen() {
	orderPage.classList.add('active');
}

function cartClear() {
	const cartContent = document.querySelector('.cart-products');
	const cartButtons = document.querySelectorAll('.card-btn.btn-cart');

	cartContent.innerHTML = '';

	cartButtons.forEach(button => {
		button.innerText = 'Add to Cart';
		button.disabled = false;
	})

	emptyMessageShow();
	
}

// order page close
const orderPageButton = document.querySelector('.btn.btn-order-page');

orderPageButton.onclick = orderClose;

function orderClose() {
	orderPage.classList.remove('active');

	window.scrollTo(0,0)
}

// cart total update

// quantity change

function ready() {

	// remove cart items 

	let cartDeleteButtons = document.querySelectorAll('.cart-products .cart-item .fa-trash');

	cartDeleteButtons.forEach(button => {
		button.onclick = removeCartItem;
	})

	// item quantity changes

	let quantityButtons = document.querySelectorAll('.cart-products .cart-item .product-quantity');

	quantityButtons.forEach(quantity => {
		quantity.addEventListener("change", quantityChanged);
	})

	// item add to cart

	let addToCartButtons = document.querySelectorAll('.menu-container .card .card-btn.btn-cart');

	addToCartButtons.forEach(addToCart => {
		addToCart.onclick = addToCartItem;
	})

	emptyMessageShow();
}

function removeCartItem(event) {

	let button = event.target;
	let cartItem = button.parentElement;

	let itemTitle = cartItem.querySelector('.product-title').innerText;
	let products = document.querySelectorAll('.menu-container .card')

	products.forEach(product => {
		let productTitle = product.querySelector('.name').innerText;
		let productCartButton = product.querySelector('.card-btn.btn-cart')

		if(productTitle == itemTitle) {
			productCartButton.innerText = 'Add To Cart'
			productCartButton.disabled = false;
		}
	})

	cartItem.remove();
	updateTotal();
	 let currentCartItems = document.querySelectorAll('.cart-products .cart-item')

	 if(currentCartItems.length <=0) {
		emptyMessageShow();
		buyNowButton.disabled = true;
	 } 

	
}

function quantityChanged(event) {
	let quantity = event.target;

	if(isNaN(quantity.value) || (quantity.value <= 0)) {
		quantity.value = 1;
	}

	updateTotal();
}

function addToCartItem(event) {
	let button = event.target;

	button.innerText = 'Added';
	button.disabled = true;

	let product = button.parentElement.parentElement;
	let productName = product.querySelector('.content-bg .name').innerText
	let productPrice = product.querySelector('.content-bg .price').innerText
	let productImgSrc = product.querySelector('.img-bg img').src;

	cartItemAdded(productName, productPrice, productImgSrc);
	cartOpen();
	emptyMessageRemove();
}

function cartItemAdded(name, price, imgSrc) {
	let newItem = document.createElement('div')

	newItem.classList.add('cart-item');

	newItem.innerHTML= `<img src="${imgSrc}" alt="">

						<div class="product-title">${name}</div>
						<div class="product-price">${price}</div>

						<input type="number" value="1" class="product-quantity">

						<i class="fa-solid fa-trash"></i>`

	let cartContent = document.querySelector('.cart .cart-products')

	cartContent.append(newItem);

	let cartDelete = document.querySelectorAll('.cart .cart-products .cart-item .fa-solid.fa-trash')
	let itemQuantity = document.querySelectorAll('.cart .cart-products .cart-item .product-quantity')

	cartDelete.forEach(button => {
		button.onclick = removeCartItem;
	})
	itemQuantity.forEach(quantity => {
		quantity.addEventListener("change", quantityChanged);
	})

	updateTotal();
}

// cart total update

function updateTotal() {
	let cartProduct = document.querySelectorAll('.cart .cart-products .cart-item')

	let total = 0

	cartProduct.forEach(product => {
		let itemPrice = product.querySelector('.product-price').innerText.replace('£','')
		let itemQuantity = product.querySelector('.product-quantity').value

		total = total + (itemPrice*itemQuantity)

	})

	let cartTotal = document.querySelector('.cart .cart-buy .cart-total')

	cartTotal.innerText = '£' + total
}

// load more

let loadButton = document.querySelector('#load-more');
let card = document.querySelectorAll('.menu .menu-container .card');

let loadCount = 8;

loadButton.onclick = ()=> {
    for(let i=loadCount; i<loadCount + 4;i++) {
        card[i].style.display = 'inline-block';
    }
    loadCount += 4

	if(loadCount == 24) {
		loadButton.style.display = 'none';
	}
	
}


// tabs section js

const tabButtonContainer = document.querySelector('.tabs-header');
const tabContentContainer = document.querySelector('.tabs-contents');
const tabButtonNodes = document.querySelectorAll('.tab-headings');
const tabContentNodes = document.querySelectorAll('.tabs-contents .content');

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