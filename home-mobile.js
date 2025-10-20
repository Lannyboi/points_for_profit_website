function toggleMobileMenu() {
    const menu = document.getElementById('mobileMenu');
    menu.style.display = (menu.style.display === 'flex') ? 'none' : 'flex';
}

// Close menu if click outside
document.addEventListener('click', function(event) {
    const menu = document.getElementById('mobileMenu');
    const button = document.getElementById('phone3lines');
    if (menu.style.display === 'flex' && !menu.contains(event.target) && !button.contains(event.target)) {
        menu.style.display = 'none';
    }
});

// Close menu on scroll
window.addEventListener('scroll', function() {
    const menu = document.getElementById('mobileMenu');
    if (menu.style.display === 'flex') menu.style.display = 'none';
});
