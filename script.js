const menuIcon = document.querySelector('.menu-icon');
const menuButton = document.querySelector('.menu-button');
const navLinks = document.querySelector('.nav-links');
const navLinkElements = document.querySelectorAll('.nav-link')

menuButton.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    if (menuIcon.name === 'menu') {
        menuIcon.name = 'close';
    } else {
        menuIcon.name = 'menu';
    }
});

navLinkElements.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuIcon.name = 'menu';
    })
})

