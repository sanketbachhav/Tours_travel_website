let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');

window.onscroll= () => {
    searchBtn.classList.remove('fa-times')
    searchBar.classList.remove('active')
    menu.classList.remove('fa-times')
    navbar.classList.remove('active')
} 

searchBtn.addEventListener('click',() => {
    searchBtn.classList.toggle('fa-times')
    searchBar.classList.toggle('active')
})

let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let formClose = document.querySelector('#form-close');

formBtn.addEventListener('click',()=>{
    loginForm.classList.add('active')
})

formClose.addEventListener('click',()=>{
    loginForm.classList.remove('active')
})

let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

menu.addEventListener('click',()=>{
    menu.classList.toggle('fa-times')
    navbar.classList.toggle('active')
})


// home section
// imp in terms of scrolling and changing refer code visual to understand 

let videoBtn = document.querySelectorAll('.vid-btn');

videoBtn.forEach(btn =>{
    btn.addEventListener('click', ()=>{
         document.querySelector('.controls .active').classList.remove('active')
         btn.classList.add('active')
         let src = btn.getAttribute('data-src');
         document.querySelector('#video-slider').src = src ;
    })
})

// slider

var swiper = new Swiper(".review-slider",{
    spaceBetween:20,
    loop:true,
    autoplay:{
        delay:2500,
        disableOnInteraction:false
    },
    breakpoints:{
        640:{
            slidesPerView:1,
        },
        768:{
            slidesPerView:2,
        },
        1024:{
            slidesPerView:3,
        }
    }
})

// brand section 

var swiper = new Swiper(".brand-slider", {
    spaceBetween: 20,
    loop:true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        450: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        991: {
          slidesPerView: 4,
        },
        1200: {
          slidesPerView: 5,
        },
      },
});


function sendEmail() {
	Email.send({
	Host: "smtp.elasticemail.com",
	Username : "sanketbachhav2000@gmail.com",
	Password : "4C9B0C664E7BFDA74F7726FD23EA9D36721C",
	To : "sanketbachhav2000@gmail.com",
	From :document.getElementById("email").value,
	Subject : document.getElementById("subject"),
	Body :  "name: " + document.getElementById("name").value
           + "<br> email: " + document.getElementById("email").value
           + "<br> number: " + document.getElementById("number").value
           + "<br> message: " + document.getElementById("message").value
	}).then(
        message =>{
            console.log (message);
            if(message=='OK'){
            alert('Your mail has been send. Thank you for connecting.');
            }
            else{
                console.error (message);
                alert('There is error at sending message. ')
                
            }

        }
    );

}