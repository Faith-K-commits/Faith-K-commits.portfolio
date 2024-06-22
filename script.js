const menuIcon = document.querySelector('.menu-icon');
const menuButton = document.querySelector('.menu-button');
const navLinks = document.querySelector('.nav-links');

menuButton.addEventListener('click', function() {
    navLinks.classList.toggle('active');
    if (menuIcon.name === 'menu'){
        menuIcon.name = 'close';
    } else{
        menuIcon.name = 'menu';
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.forEach(nav => nav.classList.remove('active'));
            link.classList.add('active');
        });
    });

    // Highlight the current section link based on URL hash on page load
    const currentHash = window.location.hash;
    if (currentHash) {
        const activeLink = document.querySelector(`.nav-link[href="${currentHash}"]`);
        if (activeLink) {
            navLinks.forEach(nav => nav.classList.remove('active'));
            activeLink.classList.add('active');
        }
    }
});
