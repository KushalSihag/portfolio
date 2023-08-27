let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a ');
window.onscroll = () => {
   
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

}