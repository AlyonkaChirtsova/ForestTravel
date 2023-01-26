const navIcon = document.querySelector('.nav-icon');
const logo = document.querySelector('.logo-header-main');
const overlay = document.querySelector('.overlay');
const headerTablet = document.querySelector('.header-top-tablet');
const headerNavDesktop = document.querySelector('.header-nav-list')
const tabletNav = document.querySelector('.header-nav-tablet');
const bodyEl = document.body;

navIcon.addEventListener('click', function () {
    this.classList.toggle('nav-icon-active');  
    logo.classList.toggle('logo-header-main-active');     
    overlay.classList.toggle('overlay-active');
    headerTablet.classList.toggle('header-top-tablet-active');
    tabletNav.classList.toggle('header-nav-tablet-active');
    headerNavDesktop.classList.toggle('none');
    bodyEl.classList.toggle('noscroll');
})

headerTablet.addEventListener('click', function() {
    this.classList.remove('active');
    navIcon.classList.remove('nav-icon-active');
    logo.classList.remove('logo-header-main-active'); 
    overlay.classList.remove('overlay-active');
    headerTablet.classList.remove('header-top-tablet-active');
    tabletNav.classList.remove('header-nav-tablet-active');
    bodyEl.classList.remove('noscroll');
    headerNavDesktop.classList.remove('none');
})

overlay.addEventListener('click', function() {
    this.classList.remove('active');
    navIcon.classList.remove('nav-icon-active');
    logo.classList.remove('logo-header-main-active'); 
    overlay.classList.remove('overlay-active');
    headerTablet.classList.remove('header-top-tablet-active')
    tabletNav.classList.remove('header-nav-tablet-active');    
    bodyEl.classList.remove('noscroll');
    headerNavDesktop.classList.remove('none');
})

