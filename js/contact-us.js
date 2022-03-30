

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



// trim to remove the whitespaces


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
	} else if (addressValue.length < 30) {
		setErrorFor(address, 'Address cannot be less than 30 characters');
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
	document.getElementById('output-category').innerHTML = document.querySelector('input[name="type"]:checked').value;
	


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




