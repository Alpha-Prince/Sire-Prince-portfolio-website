let humburgur = document.querySelector('.humburger');
let navMenu = document.querySelector('.nav-menu');
humburgur.addEventListener('click', () => {
    humburgur.classList.toggle("active");
    navMenu.classList.toggle("active");
}
)

document.querySelectorAll('.nav_item').forEach(n => n.addEventListener('click', ()=>{
    humburgur.classList.remove("active");
    navMenu.classList.remove("active");
}))

document.querySelectorAll('.nav_item').forEach(n => n.addEventListener('click', ()=>{
    humburgur.classList.remove("active");
    navMenu.classList.remove("active");
}))
/* ------------------------control container(cn)------------------------ */
let cnHumburgur = document.querySelector('.cn-humburger');
let cnContainer = document.querySelector('.cn-container');
cnHumburgur.addEventListener('click', () => {
    cnHumburgur.classList.toggle("active");
    cnContainer.classList.toggle("active");
}
)

/* ------------------------dark mode------------------------ */
let cnmode = document.querySelector('.cn-mode');
 cnmode.onclick = function(){
    cnmode.classList.toggle("dark-mode-on");
    document.body.classList.toggle("dark-theme");
    cnContainer.classList.toggle("active");
    cnHumburgur.classList.toggle("active");
}

let mode = document.querySelector('.mode');
 mode.onclick = function(){
    mode.classList.toggle("dark-mode-on");
    document.body.classList.toggle("dark-theme");
    navMenu.classList.remove("active");
    humburgur.classList.remove("active");
}


//============================== scroll reveal ==============================//
ScrollReveal({ 
    reset: true,
    distance: '50px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal( '.home-text, .Portfolios_container, .mini-portfolio-group, .email-container, .social_media', { origin: 'bottom'});
ScrollReveal().reveal( '.logo,.about-container, .email btn', { origin: 'left'});
ScrollReveal().reveal( '.sub_header', { origin: 'top'});
ScrollReveal().reveal( '.nav-mmenu, .personal-info, .email h2', { origin: 'right'});





//============================== typing  js ==============================//


const typed = new Typed('.multiple-text', {
    strings: ['Web Developer', 'Graphic Designer', 'Freelancer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});


