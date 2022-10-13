
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

