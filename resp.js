burger=document.querySelector('.burger');
navbar=document.querySelector('.navbar');
rightNav=document.querySelector('.rightNav');
navlist=document.querySelector('.nav-list');

burger.addEventListener('click',()=>{
    rightNav.classList.toggle('visiblity');
    navlist.classList.toggle('visiblity');
    navbar.classList.toggle('nav-h');
})