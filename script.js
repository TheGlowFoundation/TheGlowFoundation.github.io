const  navOpen = document.getElementById('nav-bar');
navOpen.style.display='none';

function openNav() {
    navOpen.style.display='flex';
   // navOpen style.zIndex='2'
}

function closeNav() {
    navOpen.style.display='none';
}
