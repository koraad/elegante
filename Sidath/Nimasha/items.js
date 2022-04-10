// light mode
// do not change

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
// do not change

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
// do not change

document.getElementById('search-icon').onclick = () => {
  document.getElementById('search-form').classList.add('active');

}
document.getElementById('search-toggle').onclick = () => {
  document.getElementById('search-form').classList.remove('active');

}







// body js
var qty1 = 0;
document.getElementById("burger_btn").addEventListener("click",function(){
    document.getElementById("burger_btn").style.backgroundColor = "#cc6600";
    qty1 = document.getElementById("burger").value;
    
});

var qty2 = 0;
document.getElementById("pancake_btn").addEventListener("click",function(){
    qty2 = document.getElementById("pancakes").value;
    document.getElementById("pancake_btn").style.backgroundColor = "#cc6600";
   
});

var qty3 = 0;
document.getElementById("taco_btn").addEventListener("click",function(){
    qty3 = document.getElementById("taco").value;
    document.getElementById("taco_btn").style.backgroundColor = "#cc6600";
    
});

var qty4 = 0;
document.getElementById("pie_btn").addEventListener("click",function(){
    qty4 = document.getElementById("pie").value;
    document.getElementById("pie_btn").style.backgroundColor = "#cc6600";
    
});

var qty5 = 0;
document.getElementById("hotdog_btn").addEventListener("click",function(){
    qty5 = document.getElementById("hotdog").value;
    document.getElementById("hotdog_btn").style.backgroundColor = "#cc6600";
    
});

var qty6 = 0;
document.getElementById("frenchfries_btn").addEventListener("click",function(){
    qty6 = document.getElementById("frenchfries").value;
    document.getElementById("frenchfries_btn").style.backgroundColor = "#cc6600";
	
});
var qty7 = 0;
document.getElementById("sticks_btn").addEventListener("click",function(){
    document.getElementById("sticks_btn").style.backgroundColor = "#cc6600";
    qty7 = document.getElementById("sticks").value;
    
});

var qty8 = 0;
document.getElementById("nuggets_btn").addEventListener("click",function(){
    qty8 = document.getElementById("nuggets").value;
    document.getElementById("nuggets_btn").style.backgroundColor = "#cc6600";
    
});

var qty9 = 0;
document.getElementById("chocolate_btn").addEventListener("click",function(){
    qty9 = document.getElementById("chocolate").value;
    document.getElementById("chocolate_btn").style.backgroundColor = "#cc6600";
    
});

var qty10 = 0;
document.getElementById("vanilla_btn").addEventListener("click",function(){
    qty10 = document.getElementById("vanilla").value;
    document.getElementById("vanilla_btn").style.backgroundColor = "#cc6600";
    
});

var qty11 = 0;
document.getElementById("strawberry_btn").addEventListener("click",function(){
    qty11 = document.getElementById("strawberry").value;
    document.getElementById("strawberry_btn").style.backgroundColor = "#cc6600";
	
});
    
function printtotal(){
    var mail = document.getElementById("email").value;
    var name = document.getElementById("name").value;
    if((mail=="") || (name=="")){
        alert("Please enter your E-mail and name");
        return false;
    }
	var total = (4.51*qty1) + (2.43*qty2) + (1.82*qty3) + (3.72*qty4) + (3.00*qty5) + (0.61 * qty6) + (1.13*qty7) + (0.76*qty8) + (1.42*qty9) + (1.15*qty10) + (1.33*qty11);
    document.getElementById("divforinvoice").style.borderStyle = "dotted";
    document.getElementById("divforinvoice").style.backgroundColor = "#cc9966";
    document.getElementById("invoice").innerHTML = "INVOICE";
    document.getElementById("fordetails").innerHTML = "Name : "+name+"<br>"+"Email : "+mail+"<br>----------------------------------------------------------------------------------------------<br>";
    if(qty1!=0){
        document.getElementById("forburger").innerHTML="Product : Chicken Burger" + "<br>" + "Quantity : " + qty1 + "<br>" + "Price : &#163;4.51" + "<br><br>";
    }
    if(qty2!=0){
        document.getElementById("forpancakes").innerHTML="Product : American Pancakes" + "<br>" + "Quantity : " + qty2 + "<br>" + "Price : &#163;2.43" + "<br><br>";
    }
    if(qty3!=0){
        document.getElementById("fortaco").innerHTML="Product : Grilled Cheese Taco" + "<br>" + "Quantity : " + qty3 + "<br>" + "Price : &#163;1.82" + "<br><br>";
    }
    if(qty4!=0){
        document.getElementById("forpie").innerHTML="Product : Lemon Meringue Pie" + "<br>" + "Quantity : " + qty4 + "<br>" + "Price : &#163;3.72" + "<br><br>";
    }
    if(qty5!=0){
        document.getElementById("forhotdog").innerHTML="Product : Hotdog" + "<br>" + "Quantity : " + qty5 + "<br>" + "Price : &#163;3.00" + "<br><br>";
    }
    if(qty6!=0){
        document.getElementById("forchips").innerHTML="Product : French Fries" + "<br>" + "Quantity : " + qty6 + "<br>" + "Price : &#163;0.61" + "<br><br>";
    }
	if(qty7!=0){
        document.getElementById("forsticks").innerHTML="Product : Mozzarella Sticks" + "<br>" + "Quantity : " + qty7 + "<br>" + "Price : &#163;1.13" + "<br><br>";
    }
	if(qty8!=0){
        document.getElementById("fornuggets").innerHTML="Product : Chicken Nuggets" + "<br>" + "Quantity : " + qty8 + "<br>" + "Price : &#163;0.76" + "<br><br>";
    }
	if(qty9!=0){
        document.getElementById("forchocolate").innerHTML="Product : Chocolate Shake" + "<br>" + "Quantity : " + qty9 + "<br>" + "Price : &#163;1.42" + "<br><br>";
    }
	if(qty10!=0){
        document.getElementById("forvanilla").innerHTML="Product : Vanilla Shake" + "<br>" + "Quantity : " + qty10 + "<br>" + "Price : &#163;1.15" + "<br><br>";
    }
	if(qty11!=0){
        document.getElementById("forstrawberry").innerHTML="Product : Strawberry Shake" + "<br>" + "Quantity : " + qty11 + "<br>" + "Price : &#163;1.33" + "<br><br>";
    }
    document.getElementById("fortotal").innerHTML = "Total Bill : " + "&#163;" + total;
};

