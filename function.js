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
















