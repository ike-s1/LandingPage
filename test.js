window.addEventListener('scroll', function(event) {

            let header = document.getElementById("header");
            let scrollAmount = window.pageYOffset;

            let intro = document.getElementById("intro");

            let introHeight = intro.offsetHeight;
         
            if( scrollAmount >= introHeight) {
                header.classList.add("fixed");
            } else {
                header.classList.remove("fixed");
            }


})



let menu = document.getElementById("nav");

let burger = document.getElementById('nav__toggle');


burger.addEventListener("click", function(event) {
    event.preventDefault();
    menu.classList.toggle('active');
    burger.classList.toggle('active');
})



let menuLinks = document.querySelectorAll('.nav__link');


menuLinks.forEach((event) => event.addEventListener('click', function() {
    menu.classList.remove('active');
}));

/*collapse*/



let collapseElem = document.querySelector(".accordion");


let weDoItemOne = document.getElementById('wedo1');
let weDoItemTwo =  document.getElementById('wedo2');
let weDoItemThree =  document.getElementById('wedo3');




weDoItemOne.addEventListener('click', function () {
    weDoItemOne.classList.toggle('active');
})


weDoItemTwo.addEventListener('click', function () {
    weDoItemTwo.classList.toggle('active');
})



weDoItemThree.addEventListener('click', function () {
    weDoItemThree.classList.toggle('active');
})