document.addEventListener('DOMContentLoaded', function() {
    
    // ======== LÓGICA PARA EL MENÚ HAMBURGUESA ========
    const hamburger = document.querySelector('.hamburger-menu');
    const navMenu = document.querySelector('.nav');

    hamburger.addEventListener('click', () => {
        // Alterna la clase 'active' en la hamburguesa para la animación X
        hamburger.classList.toggle('active');
        // Alterna la clase 'nav-active' en el menú para mostrarlo/ocultarlo
        navMenu.classList.toggle('nav-active');
    });

    // ======== SMOOTH SCROLLING Y CERRAR MENÚ AL CLIC ========
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

            // Cierra el menú móvil si está abierto después de hacer clic en un enlace
            if (navMenu.classList.contains('nav-active')) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('nav-active');
            }
        });
    });
});
