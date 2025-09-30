document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling para los enlaces de anclaje
    const navLinks = document.querySelectorAll('nav a[href^="#"], .btn[href^="#"], .footer a[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            let targetId = this.getAttribute('href');
            let targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});