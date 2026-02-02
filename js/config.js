/**
 * =============================================================================
 * DENTAL CLINIC THEME - CONFIGURATION FILE
 * =============================================================================
 * 
 * IMPORTANT: Edit this file to customize your dental clinic website!
 * 
 * This configuration file allows you to easily change:
 * - Business information (name, contact details, address)
 * - Social media links
 * - API keys for forms and integrations
 * - Opening hours
 * - And more!
 * 
 * After editing, save this file and refresh your website to see the changes.
 * =============================================================================
 */

const SITE_CONFIG = {
    
    // =========================================================================
    // BUSINESS INFORMATION
    // =========================================================================
    business: {
        name: "Your Dental Clinic",
        tagline: "Premium Dental Care",
        description: "Your trusted partner for comprehensive dental care and beautiful smiles.",
        foundedYear: 2024
    },
    
    // =========================================================================
    // CONTACT INFORMATION
    // =========================================================================
    contact: {
        phone: "+1 (555) 123-4567",
        phoneClean: "+15551234567", // For tel: links (no spaces or special chars)
        email: "info@yourdentalclinic.com",
        whatsapp: "15551234567", // WhatsApp number (no + sign)
    },
    
    // =========================================================================
    // ADDRESS
    // =========================================================================
    address: {
        street: "123 Main Street",
        suite: "Suite 100",
        city: "Your City",
        state: "State",
        zipCode: "12345",
        country: "Country",
        fullAddress: "123 Main Street, Suite 100, Your City, State 12345",
        parking: "Free parking available"
    },
    
    // =========================================================================
    // OPENING HOURS
    // =========================================================================
    hours: {
        monday: "9:00 AM - 5:00 PM",
        tuesday: "9:00 AM - 5:00 PM",
        wednesday: "Closed",
        thursday: "9:00 AM - 5:00 PM",
        friday: "9:00 AM - 5:00 PM",
        saturday: "Closed",
        sunday: "Closed",
        emergency: "By appointment only"
    },
    
    // =========================================================================
    // SOCIAL MEDIA LINKS
    // =========================================================================
    social: {
        instagram: "https://www.instagram.com/yourdentalclinic/",
        instagramHandle: "@yourdentalclinic",
        tiktok: "https://www.tiktok.com/@yourdentalclinic",
        tiktokHandle: "@yourdentalclinic",
        facebook: "https://www.facebook.com/yourdentalclinic",
        linkedin: "",
        youtube: ""
    },
    
    // =========================================================================
    // API KEYS & INTEGRATIONS
    // =========================================================================
    // IMPORTANT: Replace these with your own API keys!
    api: {
        // Web3Forms - Get your free key at: https://web3forms.com/
        web3forms: {
            contactForm: "YOUR_WEB3FORMS_ACCESS_KEY_HERE",
            registrationForm: "YOUR_WEB3FORMS_ACCESS_KEY_HERE",
            hygieneForm: "YOUR_WEB3FORMS_ACCESS_KEY_HERE"
        },
        
        // Supabase (for blog functionality) - Get your keys at: https://supabase.com/
        supabase: {
            url: "YOUR_SUPABASE_URL_HERE",
            anonKey: "YOUR_SUPABASE_ANON_KEY_HERE",
            tableName: "blog_posts"
        },
        
        // Elfsight Social Feeds - Get your widget IDs at: https://elfsight.com/
        elfsight: {
            instagramWidget: "YOUR_ELFSIGHT_INSTAGRAM_WIDGET_ID",
            tiktokWidget: "YOUR_ELFSIGHT_TIKTOK_WIDGET_ID"
        },
        
        // Typeform (optional) - Create forms at: https://www.typeform.com/
        typeform: {
            cosmeticForm: "YOUR_TYPEFORM_ID"
        },
        
        // Google Maps Embed
        googleMaps: {
            embedUrl: "https://www.google.com/maps/embed?pb=YOUR_GOOGLE_MAPS_EMBED_CODE"
        }
    },
    
    // =========================================================================
    // TEAM MEMBERS
    // =========================================================================
    // Add your team members here. Images should be placed in assets/team/
    team: {
        dentists: [
            {
                name: "Dr. John Smith",
                title: "Lead Dentist",
                image: "assets/team/dentist-1.jpg",
                bio: "Dr. Smith has over 15 years of experience in restorative and cosmetic dentistry. He is passionate about providing exceptional patient care."
            },
            {
                name: "Dr. Sarah Johnson",
                title: "Dentist",
                image: "assets/team/dentist-2.jpg",
                bio: "Dr. Johnson specializes in pediatric and family dentistry, ensuring comfortable experiences for patients of all ages."
            }
        ],
        hygienists: [
            {
                name: "Emily Davis",
                title: "Dental Hygienist",
                image: "assets/team/hygienist-1.jpg",
                bio: "Emily has over 10 years of experience in periodontal care and preventive dentistry."
            }
        ],
        assistants: [
            {
                name: "Michael Brown",
                title: "Dental Assistant",
                image: "assets/team/assistant-1.jpg"
            },
            {
                name: "Lisa Wilson",
                title: "Dental Assistant",
                image: "assets/team/assistant-2.jpg"
            }
        ]
    },
    
    // =========================================================================
    // SEO & META INFORMATION
    // =========================================================================
    seo: {
        siteTitle: "Your Dental Clinic - Premium Dental Care",
        metaDescription: "Experience exceptional dental care at Your Dental Clinic. We offer comprehensive dental services including cosmetic dentistry, implants, orthodontics, and more.",
        keywords: "dentist, dental clinic, cosmetic dentistry, dental implants, teeth whitening, orthodontics"
    }
};

// =========================================================================
// DO NOT EDIT BELOW THIS LINE (unless you know what you're doing)
// =========================================================================

// Make config globally available
window.SITE_CONFIG = SITE_CONFIG;

// Helper function to get config values
function getConfig(path) {
    const keys = path.split('.');
    let value = SITE_CONFIG;
    for (const key of keys) {
        if (value && typeof value === 'object' && key in value) {
            value = value[key];
        } else {
            return undefined;
        }
    }
    return value;
}

// Apply configuration to page elements when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    applyConfiguration();
});

function applyConfiguration() {
    // Update all elements with data-config attribute
    document.querySelectorAll('[data-config]').forEach(function(el) {
        const configPath = el.getAttribute('data-config');
        const value = getConfig(configPath);
        if (value !== undefined) {
            if (el.tagName === 'A' && el.hasAttribute('href')) {
                // Handle links
                if (configPath.includes('phone')) {
                    el.href = 'tel:' + getConfig('contact.phoneClean');
                } else if (configPath.includes('email')) {
                    el.href = 'mailto:' + value;
                } else if (configPath.includes('whatsapp')) {
                    el.href = 'https://wa.me/' + value;
                } else {
                    el.href = value;
                }
            }
            if (el.tagName === 'IMG') {
                el.src = value;
                el.alt = getConfig('business.name') || 'Image';
            } else {
                el.textContent = value;
            }
        }
    });
    
    // Update page title
    if (SITE_CONFIG.seo && SITE_CONFIG.seo.siteTitle) {
        // Only update if it's the generic title
        if (document.title.includes('Your Dental Clinic')) {
            // Keep page-specific title
        }
    }
}

console.log('Dental Clinic Theme Configuration loaded successfully!');
console.log('Edit js/config.js to customize your website.');
