// Mondzorg Sloterweg - Main JavaScript
// Clean, minimal interactions inspired by premium dental practices

// ===================================
// PRELOADER
// ===================================

// Check if preloader has been shown in this session
document.addEventListener('DOMContentLoaded', function() {
    const preloader = document.getElementById('preloader');
    if (preloader) {
        // Check if preloader was already shown in this browsing session
        const preloaderShown = sessionStorage.getItem('preloaderShown');
        
        if (preloaderShown === 'true') {
            // Hide preloader immediately if already shown
            preloader.style.display = 'none';
            document.body.style.overflow = '';
        } else {
            // Show preloader for first visit
            document.body.style.overflow = 'hidden';
            
            window.addEventListener('load', function() {
                // Add a minimum display time for better UX (1 second)
                setTimeout(function() {
                    preloader.classList.add('fade-out');
                    // Remove from DOM after animation completes
                    setTimeout(function() {
                        preloader.style.display = 'none';
                        document.body.style.overflow = '';
                        // Mark preloader as shown for this session
                        sessionStorage.setItem('preloaderShown', 'true');
                    }, 800);
                }, 1000);
            });
        }
    }
});

// ===================================
// MOBILE NAVIGATION
// ===================================

// Mobile Navigation
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
let navOverlay = document.querySelector('.nav-overlay');

function ensureNavOverlay() {
    if (!navOverlay) {
        navOverlay = document.createElement('div');
        navOverlay.className = 'nav-overlay';
        navOverlay.addEventListener('click', closeMobileNav);
        document.body.appendChild(navOverlay);
    }
}

function openMobileNav() {
    if (!hamburger || !navMenu) return;
    ensureNavOverlay();
    navMenu.classList.add('active');
    hamburger.classList.add('active');
    document.body.classList.add('nav-open');
    hamburger.setAttribute('aria-expanded', 'true');
}

function closeMobileNav() {
    if (!hamburger || !navMenu) return;
    navMenu.classList.remove('active');
    hamburger.classList.remove('active');
    document.body.classList.remove('nav-open');
    hamburger.setAttribute('aria-expanded', 'false');
}

if (hamburger) {
    hamburger.addEventListener('click', () => {
        const isOpen = navMenu && navMenu.classList.contains('active');
        if (isOpen) closeMobileNav();
        else openMobileNav();
    });
}

// Close mobile menu on link click
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', closeMobileNav);
});

// Close mobile menu on Escape
window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMobileNav();
});

// Navbar scroll effect
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;
    
    if (currentScroll > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -60px 0px'
};

const fadeInObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            fadeInObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

// Apply fade-in to elements
const fadeElements = document.querySelectorAll(`
    .feature-item,
    .media-item,
    .pricing-card,
    .faq-item,
    .info-card,
    .team-member,
    .treatment-category,
    .contact-info,
    .contact-form-wrapper,
    .philosophy-item,
    .location-item
`);

fadeElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    fadeInObserver.observe(el);
});

// Service cards with staggered animation
const serviceCards = document.querySelectorAll('.service-card');
const serviceObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const index = Array.from(serviceCards).indexOf(entry.target);
            entry.target.style.transitionDelay = `${index * 80}ms`;
            entry.target.classList.add('is-visible');
            serviceObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

serviceCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    serviceObserver.observe(card);
});

// Add CSS for visibility
const styleSheet = document.createElement('style');
styleSheet.textContent = `
    .is-visible {
        opacity: 1 !important;
        transform: translateY(0) !important;
        transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), 
                    transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
    }
    
    .service-card:focus-visible,
    .team-member:focus-visible {
        outline: 2px solid #000;
        outline-offset: 4px;
    }
`;
document.head.appendChild(styleSheet);

// Form handling - Removed generic handler to allow specific form handlers in each page to work correctly
// Individual form handlers are defined in contact.html and inschrijven.html

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    document.querySelectorAll('.notification').forEach(n => n.remove());
    
    const notification = document.createElement('div');
    notification.className = `notification notification--${type}`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.add('is-hiding');
        setTimeout(() => notification.remove(), 300);
    }, 4000);
}

// Button loading state
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', function() {
        if (this.tagName === 'BUTTON' || this.type === 'submit') {
            this.classList.add('loading');
            setTimeout(() => this.classList.remove('loading'), 2000);
        }
    });
});

// Cookie consent
if (!localStorage.getItem('cookieConsent')) {
    setTimeout(() => {
        const consent = document.createElement('div');
        consent.className = 'cookie-consent';
        consent.innerHTML = `
            <div class="cookie-content">
                <p>We gebruiken cookies om u de beste ervaring op onze website te bieden.</p>
                <div class="cookie-buttons">
                    <button class="btn btn-primary btn-sm" onclick="acceptCookies()">Accepteren</button>
                    <button class="btn btn-outline-light btn-sm" onclick="declineCookies()">Weigeren</button>
                </div>
            </div>
        `;
        document.body.appendChild(consent);
    }, 2500);
}

function acceptCookies() {
    localStorage.setItem('cookieConsent', 'true');
    const consent = document.querySelector('.cookie-consent');
    if (consent) {
        consent.style.animation = 'slideDown 0.4s ease forwards';
        setTimeout(() => consent.remove(), 400);
    }
}

function declineCookies() {
    localStorage.setItem('cookieConsent', 'false');
    const consent = document.querySelector('.cookie-consent');
    if (consent) {
        consent.style.animation = 'slideDown 0.4s ease forwards';
        setTimeout(() => consent.remove(), 400);
    }
}

// Add slideDown animation
const extraStyles = document.createElement('style');
extraStyles.textContent = `
    @keyframes slideDown {
        from { transform: translateY(0); opacity: 1; }
        to { transform: translateY(100%); opacity: 0; }
    }
`;
document.head.appendChild(extraStyles);

// Parallax effect for hero (subtle)
const hero = document.querySelector('.hero');
if (hero) {
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        if (scrolled < window.innerHeight) {
            const heroContent = hero.querySelector('.hero-content');
            if (heroContent) {
                heroContent.style.transform = `translateY(${scrolled * 0.15}px)`;
                heroContent.style.opacity = 1 - (scrolled / (window.innerHeight * 0.8));
            }
        }
    });
}

// ================================
// SHARE FUNCTIONALITY
// ================================
function shareVia(platform) {
    const pageUrl = encodeURIComponent(window.location.href);
    const pageTitle = encodeURIComponent(document.title);
    const pageDescription = encodeURIComponent(
        document.querySelector('meta[name="description"]')?.content || 
        'Ontdek Mondzorg Sloterweg - Uw tandartspraktijk in Amsterdam'
    );
    
    let shareUrl = '';
    
    switch (platform) {
        case 'whatsapp':
            shareUrl = `https://wa.me/?text=${pageTitle}%0A%0A${pageUrl}`;
            break;
        case 'facebook':
            shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${pageUrl}`;
            break;
        case 'twitter':
            shareUrl = `https://twitter.com/intent/tweet?url=${pageUrl}&text=${pageTitle}`;
            break;
        case 'linkedin':
            shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${pageUrl}`;
            break;
        case 'email':
            shareUrl = `mailto:?subject=${pageTitle}&body=${pageDescription}%0A%0A${pageUrl}`;
            window.location.href = shareUrl;
            return;
    }
    
    if (shareUrl) {
        window.open(shareUrl, '_blank', 'width=600,height=400,scrollbars=yes');
    }
}

function copyPageLink(button) {
    const pageUrl = window.location.href;
    
    // Use the Clipboard API if available
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(pageUrl).then(() => {
            showCopySuccess(button);
        }).catch(() => {
            fallbackCopyText(pageUrl, button);
        });
    } else {
        fallbackCopyText(pageUrl, button);
    }
}

function fallbackCopyText(text, button) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    textArea.style.top = '-999999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    try {
        document.execCommand('copy');
        showCopySuccess(button);
    } catch (err) {
        showNotification('Kopiëren mislukt. Probeer handmatig.', 'error');
    }
    
    document.body.removeChild(textArea);
}

function showCopySuccess(button) {
    button.classList.add('copied');
    
    // Also show a notification
    showNotification('Link gekopieerd naar klembord!', 'success');
    
    setTimeout(() => {
        button.classList.remove('copied');
    }, 2000);
}
