// Intersection Observer for scroll reveal animations
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

document.querySelectorAll('[data-reveal]').forEach((el) => {
    observer.observe(el);
});

// Form Submission Handling
const form = document.getElementById('tfg-form');
if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formData = {
            nombre: document.getElementById('nombre').value,
            email: document.getElementById('email').value,
            carrera: document.getElementById('carrera').value,
            tema: document.getElementById('tema').value
        };

        // For demo purposes, we'll just show a success message
        const originalContent = form.innerHTML;
        form.style.height = form.offsetHeight + 'px';
        form.innerHTML = `
            <div style="text-align: center; padding: 2rem;">
                <div style="font-size: 4rem; margin-bottom: 1rem;">✅</div>
                <h3 style="font-size: 1.5rem; margin-bottom: 1rem;">¡Solicitud enviada!</h3>
                <p style="color: var(--text-muted);">Hemos recibido tus datos, ${formData.nombre}. Un asesor de TFGalicia se pondrá en contacto contigo en los próximos minutos para procesar tu TFG de 100€.</p>
                <button onclick="location.reload()" class="cta-button" style="margin-top: 2rem;">Volver</button>
            </div>
        `;
        
        console.log('Form submitted:', formData);
    });
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80, // Adjust for fixed header
                behavior: 'smooth'
            });
        }
    });
});

// Simple Background Follow Effect
document.addEventListener('mousemove', (e) => {
    const blob = document.querySelector('.blob');
    if (blob) {
        const x = e.clientX;
        const y = e.clientY;
        blob.style.left = x - 250 + 'px';
        blob.style.top = y - 250 + 'px';
    }
});
