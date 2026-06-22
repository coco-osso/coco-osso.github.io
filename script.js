document.addEventListener('DOMContentLoaded', () => {
    // Configuración del observador para animaciones al hacer scroll
    const observerOptions = { 
        threshold: 0.1 
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal-visible');
                entry.target.classList.remove('reveal-hidden');
            }
        });
    }, observerOptions);

    // Selecciona todas las secciones para aplicarles la animación
    const reveals = document.querySelectorAll('section');
    reveals.forEach(el => {
        el.classList.add('reveal-hidden');
        observer.observe(el);
    });
});