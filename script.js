// Mobile menu toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navLinks = document.getElementById('navLinks');

mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    const icon = mobileMenuBtn.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el);
});

// Language switching functionality
let currentLanguage = 'en';

function switchLanguage(lang) {
    currentLanguage = lang;
    
    // Update language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        if (btn.dataset.lang === lang) {
            btn.style.background = 'linear-gradient(45deg, #d4577a, #8b45c6)';
            btn.style.color = 'white';
            btn.style.borderColor = 'transparent';
            btn.style.boxShadow = '0 5px 20px rgba(212, 87, 122, 0.3)';
            btn.classList.add('active');
        } else {
            btn.style.background = 'white';
            btn.style.color = '#d4577a';
            btn.style.borderColor = '#d4577a';
            btn.style.boxShadow = 'none';
            btn.classList.remove('active');
        }
    });
    
    // Hide all language content
    document.querySelectorAll('.lang-content').forEach(content => {
        content.style.display = 'none';
    });
    
    // Show content for selected language
    setTimeout(() => {
        document.querySelectorAll(`.lang-content[data-lang="${lang}"]`).forEach(content => {
            content.style.display = 'inline';
        });
        
        // Update document direction for Arabic
        if (lang === 'ar') {
            document.documentElement.setAttribute('dir', 'rtl');
            document.body.style.fontFamily = "'Segoe UI', 'Tahoma', 'Arial', sans-serif";
        } else {
            document.documentElement.setAttribute('dir', 'ltr');
            document.body.style.fontFamily = "'Poppins', sans-serif";
        }
    }, 100);
}

// Form submission with Airtable integration
document.getElementById('bookingForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const submitBtn = document.querySelector('.submit-btn');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Booking...';
    submitBtn.disabled = true;

    const formData = new FormData(e.target);
    const bookingData = {
        name: formData.get('name'),
        phone: formData.get('phone'),
        email: formData.get('email'),
        service: formData.get('service'),
        date: formData.get('date'),
        time: formData.get('time'),
        notes: formData.get('notes') || ''
    };

    try {
        // For standalone deployment, you'll need to set up your own backend
        // This is a placeholder for the booking API endpoint
        const response = await fetch('/api/booking', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(bookingData)
        });

        if (response.ok) {
            const result = await response.json();
            alert('Booking successful! We will contact you shortly to confirm your appointment.');
            e.target.reset();
            showSuccessAnimation();
        } else {
            throw new Error('Booking failed');
        }
        
    } catch (error) {
        console.error('Booking error:', error);
        alert('Sorry, there was an error processing your booking. Please contact us directly via WhatsApp.');
    } finally {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }
});

// Success animation
function showSuccessAnimation() {
    const form = document.getElementById('bookingForm');
    form.style.transform = 'scale(1.05)';
    setTimeout(() => {
        form.style.transform = 'scale(1)';
    }, 200);
}

// Gallery lightbox effect
document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', () => {
        item.style.transform = 'scale(1.1)';
        setTimeout(() => {
            item.style.transform = 'scale(1)';
        }, 200);
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Set minimum date for booking form to today
document.addEventListener('DOMContentLoaded', () => {
    const dateInput = document.getElementById('date');
    const today = new Date().toISOString().split('T')[0];
    dateInput.setAttribute('min', today);
    
    // Set default date to tomorrow
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    dateInput.value = tomorrow.toISOString().split('T')[0];

    // Initialize language switching
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.dataset.lang;
            switchLanguage(lang);
        });
    });
    
    // Initialize with English
    switchLanguage('en');
});

// Add loading animation to CTA button
document.querySelector('.cta-btn').addEventListener('click', function(e) {
    if (this.getAttribute('href') === '#booking') {
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 150);
    }
});

// Add hover effect to service cards
document.querySelectorAll('.menu-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-15px) scale(1.03)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
    });
});