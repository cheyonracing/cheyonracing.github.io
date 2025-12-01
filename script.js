// Mobile Menu Toggle
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close menu on link click
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Header and Hero Background Blur on Scroll
const header = document.querySelector('header');
const heroBg = document.querySelector('.hero-bg');

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    
    // Add blur effect after scrolling 50px
    if (scrollY > 50) {
        header.classList.add('scrolled');
        if (heroBg) heroBg.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
        if (heroBg) heroBg.classList.remove('scrolled');
    }
});

// Scroll Reveal Animation
const reveals = document.querySelectorAll('.reveal');

function revealOnScroll() {
    reveals.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight - 100) {
            element.classList.add('active');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);
revealOnScroll(); // Initial check

// Contact Form
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simulate form submission
    alert(`Thank you, ${name}! Your message has been sent. We'll get back to you at ${email} soon.`);
    contactForm.reset();
});

// Smooth Scroll Enhancement
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

// ============================================
// IMAGE MODAL FUNCTIONALITY
// ============================================
const imageModal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');
const galleryItems = document.querySelectorAll('.gallery-item');

// Open image modal when gallery item is clicked
galleryItems.forEach(item => {
    item.addEventListener('click', () => {
        const fullImageSrc = item.getAttribute('data-image');
        const altText = item.querySelector('img').alt;
        
        modalImage.src = fullImageSrc;
        modalImage.alt = altText;
        imageModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
});

// Close image modal
const closeImageModal = () => {
    const img = imageModal.querySelector('.modal-content');
    imageModal.classList.add('closing');
    img.style.animation = 'zoomOut 0.3s cubic-bezier(0.165, 0.84, 0.44, 1)';
    
    setTimeout(() => {
        imageModal.classList.remove('active', 'closing');
        document.body.style.overflow = 'auto';
        img.style.animation = '';
        setTimeout(() => {
            modalImage.src = '';
        }, 50);
    }, 300);
};

imageModal.querySelector('.modal-close').addEventListener('click', closeImageModal);
imageModal.addEventListener('click', (e) => {
    if (e.target === imageModal) {
        closeImageModal();
    }
});

// ============================================
// TEAM MEMBER MODAL FUNCTIONALITY
// ============================================
const teamModal = document.getElementById('teamModal');
const teamCards = document.querySelectorAll('.team-card');
const modalMemberName = document.getElementById('modalMemberName');
const modalMemberRole = document.getElementById('modalMemberRole');
const modalMemberBio = document.getElementById('modalMemberBio');
const modalMemberPhoto = document.getElementById('modalMemberPhoto');

// Open team member modal when team card is clicked
teamCards.forEach(card => {
    card.addEventListener('click', () => {
        const name = card.getAttribute('data-name');
        const role = card.getAttribute('data-role');
        const bio = card.getAttribute('data-bio');
        const photoSrc = card.querySelector('.team-image img').src;
        
        modalMemberName.textContent = name;
        modalMemberRole.textContent = role;
        modalMemberBio.textContent = bio;
        modalMemberPhoto.src = photoSrc;
        modalMemberPhoto.alt = name;
        
        teamModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
});

// Close team member modal
const closeTeamModal = () => {
    const modalContent = teamModal.querySelector('.modal-content-team');
    modalContent.classList.add('closing');
    
    setTimeout(() => {
        teamModal.classList.remove('active');
        modalContent.classList.remove('closing');
        document.body.style.overflow = 'auto';
        modalMemberPhoto.src = '';
    }, 300);
};

teamModal.querySelector('.modal-close').addEventListener('click', closeTeamModal);
teamModal.addEventListener('click', (e) => {
    if (e.target === teamModal) {
        closeTeamModal();
    }
});

// Close modals with ESC key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        if (imageModal.classList.contains('active')) {
            closeImageModal();
        }
        if (teamModal.classList.contains('active')) {
            closeTeamModal();
        }
    }
});
