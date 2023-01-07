
Navbar
const navbar = document.getElementById('navbar');
let prevYpos = 0;

window.onscroll = function(){
    const Ypos = window.scrollY;
    if(Ypos > prevYpos){
        navbar.style.top = navbar.offsetHeight * -1 + 'px';
    }else{
        navbar.style.top = '0px';
    }
    prevYpos = Ypos;
}

const hamburgerButton = document.getElementById('hamburger-btn');
const closeButton = document.getElementById('close-btn');

hamburgerButton.addEventListener('click',toggleNav);
closeButton.addEventListener('click',toggleNav)

function toggleNav(){
    document.getElementsByClassName('nav-menu')[0].classList.toggle('active');
}


// //scroll bar
// window.onscroll = function() {
//     var windowScroll = document.documentElement.scrollTop;
//     var windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
//     var scrollAmount = (windowScroll / windowHeight) * 100;
//     document.getElementById("linebar").style.width = scrollAmount + "%";
// };

//Validation Form
const rules = {
    firstname: {
        required: true,
        minlength: 3
    },
    lastname: {
        required: true,
        minlength: 3
    },
    email: {
        required: true,
        email: true
    },
    number: {
        required: true
    },
    gender: "required"
}

const message = {
    firstname: {
        required: "Please enter your firstname",
        minlength: "Your firstname must consist of at lease 3 characters"
    },
    lastname: {
        required: "Please enter your lastname",
        minlength: "Your firstname must consist of at lease 3 characters"
    },
    email: {
        required: "Please enter your email",
        email: "Please enter a valid email addres with ''@''"
    },
    number: "Please enter your phone number",
    gender: "Please select one"
}

$(document).ready(function(){
    $('#form').validate({
        rules : rules,
        messages : message
    })
})