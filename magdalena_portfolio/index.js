
const active = window.location.pathname;
const navLinks = document.querySelectorAll('nav a').
forEach(link => {
   if(link.href.includes(`${active}`)) {
    link.classList.add('active');
   }
})



