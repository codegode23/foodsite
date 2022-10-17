
searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
  searchForm.classList.toggle('active');
}


const x = document.getElementById("login");
const y = document.getElementById("register");
const z = document.getElementById("btn");

function register(){
    x.style.left = "-400px";
    y.style.left = "50px"
    z.style.left = "110px"
}


function login(){
    x.style.left = "50px";
    y.style.left = "450px"
    z.style.left = "0px"
}



let loginForm = document.querySelector('.hero');

document.querySelector('#login-btn').onclick = () =>{
  loginForm.classList.toggle('active');
}

document.querySelector('#close-login-btn').onclick = () =>{
  loginForm.classList.remove('active');
}


let cart = document.querySelector('.cart');
let cartField = document.querySelector('.orders');

cart.addEventListener('click', ()=> {
  cartField.classList.toggle('active');
})

$(document).ready(function(){

    $(".buttons").click(function(){

        $(this).addClass('active').siblings().removeClass('active');

        var filter = $(this).attr('data-filter');

        if(filter == 'all'){
            $('.food-box').show(400);
            console.log(filter);
        }else{
            $('.food-box').not('.'+filter).hide(200);
            $('.food-box').filter('.'+filter).show(400);
        }

    });


});



if (document.readyState == 'loading') {
  document.addEventListener('DOMContentLoaded', ready);

} else {
  ready();
}

function ready() {

    let removeOrderItemButtons = document.getElementsByClassName('delete');
    console.log(removeOrderItemButtons);

    for (var i = 0; i < removeOrderItemButtons.length; i++){
        var button = removeOrderItemButtons[i];
        button.addEventListener('click', removeOrderItem);
      
      }

      let quantityInputs = document.getElementsByClassName('order-quantity-input');
      for (let i = 0; i < quantityInputs.length; i++){
        let input = quantityInputs[i];
        input.addEventListener('change', quantityChanged);
      }

      let addOrderButtons = document.getElementsByClassName('order');
      for (let i = 0; i < addOrderButtons.length; i++){
        var button = addOrderButtons[i];
        button.addEventListener('click', addOrderClicked);
      }

      document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked);
}

function purchaseClicked(){
  alert('Thank you');
  let orderItems = document.getElementsByClassName('order-container')[0];
  while (orderItems.hasChildNodes()){
    orderItems.removeChild(orderItems.firstChild);
    updateOrderTotal();
  }
}

function removeOrderItem(event) {
  let buttonClicked = event.target;
  buttonClicked.parentElement.parentElement.remove();
  updateOrderTotal();
}

function quantityChanged(event){
  let input = event.target;
  if (isNaN(input.value) || input.value <= 0){
    input.value = 1;
  }
  updateOrderTotal();
}


function addOrderClicked(event){
  var button = event.target;
  let orderItem = button.parentElement.parentElement;
  let orderItemm = button.parentElement;
  let title = orderItemm.getElementsByClassName('order-title')[0].innerText;
  let price = orderItem.getElementsByClassName('order-price')[0].innerText;
  let imageSrc = orderItem.getElementsByClassName('order-image')[0].src;
  alert('Order Placed');
  addOrderItem(title, price, imageSrc);
  updateOrderTotal();
 
cart.classList.add('on');
  
}

function addOrderItem(title, price, imageSrc) {

  let orderRow = document.createElement('div');
  orderRow.classList.add('order-box');
  let orderItems = document.getElementsByClassName('order-container')[0];
  let orderItemNames = orderItems.getElementsByClassName('order-item-title');

  for (let i = 0; i < orderItemNames.length; i++){
    if (orderItemNames[i].innerText == title) {
      alert('Order alredy on list');
      return;//exits you out of the function and takes you back to addOrderItem function
    }
  }

  let orderRowContents = `
                          <div class="order-item">
                            <img class="order-item-image" src="${imageSrc}" width="100" height="100">
                            <span class="order-item-title">${title}</span>
                          </div>
                            <span class="order-price">${price}</span>
                          <div class="order-quantity">
                            <input class="order-quantity-input" type="number" value="1">
                            <button class="delete" type="button">X</button>
                          </div>`
  orderRow.innerHTML = orderRowContents;
  orderItems.appendChild(orderRow);
  orderRow.getElementsByClassName('delete')[0].addEventListener('click', removeOrderItem);
  orderRow.getElementsByClassName('order-quantity-input')[0].addEventListener('change', quantityChanged);
} 



function updateOrderTotal() {
  let orderItemContainer = document.getElementsByClassName('order-container')[0];
  let orderRows = orderItemContainer.getElementsByClassName('order-box');//orderRows used here

  total = 0;

  for (var i = 0; i < orderRows.length; i++){
    let orderRow = orderRows[i];
    let priceElement = orderRow.getElementsByClassName('order-price')[0];
    let quantityElement = orderRow.getElementsByClassName('order-quantity-input')[0];
    let price = parseFloat(priceElement.innerText.replace("Ghc", ""));
    let quantity = quantityElement.value;
    
    total = total + (price * quantity);

  }

  total = Math.round(total * 100) / 100;
  document.getElementsByClassName('order-total-price')[0].innerText = "Ghc" + total;
}