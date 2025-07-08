document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    // Toggle menu function
    function toggleMenu() {
        menuToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
        
        // Prevent scrolling when menu is open
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    }
    
    // Toggle menu on button click
    menuToggle.addEventListener('click', toggleMenu);
    
    // Close menu when clicking on links
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 995) {
                toggleMenu();
            }
        });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (window.innerWidth <= 995 && 
            navMenu.classList.contains('active') &&
            !event.target.closest('.nav-menu') && 
            !event.target.closest('.menu-toggle')) {
            toggleMenu();
        }
    });
    
    // Close menu if window is resized to desktop
    window.addEventListener('resize', function() {
        if (window.innerWidth > 995 && navMenu.classList.contains('active')) {
            toggleMenu();
        }
    });
});


