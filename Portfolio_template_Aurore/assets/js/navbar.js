// NAVBAR //
document.addEventListener('DOMContentLoaded', function() {
    const navLinksContainer = document.querySelector('.nav-link-container');
    const menuHamburger = document.querySelector('.menu-hamburger');
    const blurContent = document.querySelector('.blur-content');
    const barMenus = document.querySelectorAll('.bar-menu');
    const resText = document.querySelector('.res-text');
    const dropdowns = document.querySelectorAll('.dropdown');

    // MENU BURGER / CROSS
    menuHamburger.addEventListener('click', () => {
        navLinksContainer.classList.toggle('active');
        menuHamburger.classList.toggle('active');
        toggleBlur();
        toggleResTextVisibility();
    });

    // LINKS
    const navLinks = document.querySelectorAll('.nav-link-container a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navLinksContainer.classList.remove('active');
            menuHamburger.classList.remove('active');
            blurContent.style.display = 'none'; 
        });
    });
});