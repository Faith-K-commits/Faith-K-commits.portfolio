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

// TODO: Make an active button for the current page