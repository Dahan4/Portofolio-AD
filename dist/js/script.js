// navbar fixed
window.onscroll = function(){
    const header = document.querySelector('header');
    const fixnav = header.offsetTop;

    if(window.pageYOffset > fixnav) {
        header.classList.add('navbar-fixed');
    }else {
        header.classList.remove('navbar-fixed');
    }
}

//hamburger
const hamburger= document.querySelector('#hamburger');
const navmenu= document.querySelector('#navmenu');

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('hamburger-active');
    navmenu.classList.toggle('hidden');
})