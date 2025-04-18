document.addEventListener('DOMContentLoaded', function() {
    
    if (!localStorage.getItem('contactSubmissions')) {
        localStorage.setItem('contactSubmissions', 0);
    }
    if (!localStorage.getItem('donationSubmissions')) {
        localStorage.setItem('donationSubmissions', 0);
    }
    
  
    const contactCountElement = document.getElementById('contactCount');
    const donationCountElement = document.getElementById('donationCount');
    
    if (contactCountElement) {
        contactCountElement.textContent = localStorage.getItem('contactSubmissions');
    }
    
    if (donationCountElement) {
        donationCountElement.textContent = localStorage.getItem('donationSubmissions');
    }
    
    
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
           
            let contactCount = parseInt(localStorage.getItem('contactSubmissions')) + 1;
            localStorage.setItem('contactSubmissions', contactCount);
            
           
            const contactResponse = document.getElementById('contactResponse');
            if (contactResponse) {
                contactResponse.style.display = 'block';
            }
            
     
            if (contactCountElement) {
                contactCountElement.textContent = contactCount;
            }
            
            
        });
    }
    
   
    const donationForm = document.getElementById('donationForm');
    if (donationForm) {
        donationForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
           
            let donationCount = parseInt(localStorage.getItem('donationSubmissions')) + 1;
            localStorage.setItem('donationSubmissions', donationCount);
            
           
            const donationResponse = document.getElementById('donationResponse');
            if (donationResponse) {
                donationResponse.style.display = 'block';
            }
            
        
            if (donationCountElement) {
                donationCountElement.textContent = donationCount;
            }
        });
    }
});


const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('is-active');
    navMenu.classList.toggle('is-active');
});


navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('is-active');
        navMenu.classList.remove('is-active');
    });
});