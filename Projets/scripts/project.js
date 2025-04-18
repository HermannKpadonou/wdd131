document.addEventListener('DOMContentLoaded', function() {
    if (!localStorage.getItem('contactSubmissions')) {
        localStorage.setItem('contactSubmissions', 0);
    }
    if (!localStorage.getItem('donationSubmissions')) {
        localStorage.setItem('donationSubmissions', 0);
    }
    
    document.getElementById('contactCount').textContent = localStorage.getItem('contactSubmissions');
    document.getElementById('donationCount').textContent = localStorage.getItem('donationSubmissions');
    
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            let contactCount = parseInt(localStorage.getItem('contactSubmissions')) + 1;
            localStorage.setItem('contactSubmissions', contactCount);
            
            document.getElementById('contactResponse').style.display = 'block';
            document.getElementById('contactCount').textContent = contactCount;
            
            this.reset();
        });
    }
    
    const donationForm = document.getElementById('donationForm');
    if (donationForm) {
        donationForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            let donationCount = parseInt(localStorage.getItem('donationSubmissions')) + 1;
            localStorage.setItem('donationSubmissions', donationCount);
            
            document.getElementById('donationResponse').style.display = 'block';
            document.getElementById('donationCount').textContent = donationCount;
            
            this.reset();
        });
    }
    
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            this.classList.toggle('active');
            navMenu.classList.toggle('active');
            
            if (navMenu.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        });
        
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }
});