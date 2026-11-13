document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Menu Logic
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });
    }

    // 2. Form Submission Feedback Logic
    const quoteForm = document.querySelector('.quote-form');
    if (quoteForm) {
        quoteForm.addEventListener('submit', (e) => {
            const submitBtn = quoteForm.querySelector('button[type="submit"]');
            // Change button text and style to show it's working
            submitBtn.innerText = "Sending Request...";
            submitBtn.style.opacity = "0.7";
            submitBtn.style.cursor = "wait";
            // Let the form submit naturally to FormSubmit
        });
    }
});