# Premium Dental Clinic HTML Template

A modern, elegant HTML template designed specifically for dental clinics and dental practices. Built with a focus on aesthetics, user experience, and conversion optimization.

![Dental Clinic Template Preview](assets/hero-bg.jpg)

## Features

- **Modern Design**: Clean, professional look with smooth animations
- **Fully Responsive**: Works perfectly on desktop, tablet, and mobile
- **10 Pre-built Pages**: Homepage, Treatments, Team, Contact, Pricing, and more
- **Easy Customization**: Edit content directly in HTML files
- **Fast Loading**: Optimized CSS and minimal JavaScript
- **SEO Friendly**: Semantic HTML5 structure
- **Social Media Integration**: Ready for Instagram & TikTok feeds
- **Contact Forms**: Pre-configured with Web3Forms (free)
- **Blog Ready**: Optional Supabase integration for blog posts

## Pages Included

1. **index.html** - Homepage with hero, services, features, and CTA sections
2. **behandelingen.html** - Treatments/Services page
3. **team.html** - Team members showcase
4. **contact.html** - Contact form, map, and FAQ
5. **inschrijven.html** - Appointment booking/registration
6. **tarieven.html** - Pricing tables
7. **esthetische-analyse.html** - Smile makeover workflow showcase
8. **mondhygieniste.html** - Dental hygienist dedicated page
9. **blog.html** - Blog listing page
10. **blog-detail.html** - Individual blog post page

## Quick Start

### 1. Download and Extract
Extract the template files to your computer.

### 2. Edit Content
Open the HTML files in any text editor (VS Code recommended) and replace:
- Business name and contact information
- Team member names, photos, and bios
- Service descriptions
- Opening hours
- Address and map location

### 3. Replace Images
Replace placeholder images in the `assets/` folder:
- `assets/logos/logo.png` - Your clinic logo
- `assets/team/` - Team member photos
- `assets/hero-bg.jpg` - Homepage hero background
- `assets/icons/` - Service icons

### 4. Configure Forms
Get a free API key from [Web3Forms](https://web3forms.com/) and replace `YOUR_WEB3FORMS_ACCESS_KEY` in:
- `contact.html`
- `inschrijven.html`

### 5. Deploy
Upload all files to your web hosting or use services like:
- [Netlify](https://netlify.com) (free)
- [Vercel](https://vercel.com) (free)
- [GitHub Pages](https://pages.github.com) (free)

## Configuration

### js/config.js
This file contains all customizable settings:

```javascript
const SITE_CONFIG = {
    business: {
        name: "Your Dental Clinic",
        tagline: "Premium Dental Care",
    },
    contact: {
        phone: "+1 (555) 123-4567",
        email: "info@yourdentalclinic.com",
        whatsapp: "15551234567",
    },
    address: {
        street: "123 Main Street",
        city: "Your City",
        // ...
    },
    // ... more settings
};
```

### Social Media Feeds (Optional)
To add live Instagram/TikTok feeds:
1. Create an account at [Elfsight](https://elfsight.com/)
2. Create Instagram and/or TikTok widgets
3. Replace `YOUR_INSTAGRAM_WIDGET_ID` and `YOUR_TIKTOK_WIDGET_ID` in the HTML files

### Blog Integration (Optional)
The template includes an optional blog system using Supabase:
1. Create a free account at [Supabase](https://supabase.com/)
2. Create a `blog_posts` table
3. Add your Supabase URL and anon key to `js/config.js`

## File Structure

```
dental-clinic-theme/
├── index.html              # Homepage
├── behandelingen.html      # Treatments page
├── team.html               # Team page
├── contact.html            # Contact page
├── inschrijven.html        # Booking page
├── tarieven.html           # Pricing page
├── esthetische-analyse.html # Smile makeover page
├── mondhygieniste.html     # Hygienist page
├── blog.html               # Blog listing
├── blog-detail.html        # Blog post detail
├── css/
│   └── style.css           # All styles
├── js/
│   ├── config.js           # Configuration file
│   ├── main.js             # Main JavaScript
│   ├── blog.js             # Blog functionality
│   └── tarieven.js         # Pricing table logic
└── assets/
    ├── logos/              # Logo files
    ├── team/               # Team photos
    ├── icons/              # Service icons
    ├── marquee/            # Partner logos
    └── [workflow images]   # Smile makeover images
```

## Customization Guide

### Changing Colors
Edit CSS variables in `css/style.css`:

```css
:root {
    --primary-gold: #b8a369;    /* Accent color */
    --primary-dark: #1a1a1a;    /* Dark text */
    --off-white: #faf9f6;       /* Background */
    /* ... more variables */
}
```

### Changing Fonts
The template uses Google Fonts (Baskervville). To change:
1. Go to [Google Fonts](https://fonts.google.com/)
2. Select your font and get the embed code
3. Replace the font link in all HTML `<head>` sections
4. Update `--font-body` in `css/style.css`

### Adding New Pages
1. Copy an existing HTML file
2. Update the content
3. Add navigation link to all pages' `<nav>` section

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome for Android)

## Credits

- Font: [Baskervville](https://fonts.google.com/specimen/Baskervville) by Google Fonts
- Icons: Custom SVG icons included
- Form handling: [Web3Forms](https://web3forms.com/)

## Support

For questions or customization help, please contact the theme author.

## License

This template is licensed for use on a single website. Please do not redistribute or resell.

---

**Thank you for purchasing this template!**
