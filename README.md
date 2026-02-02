# Mondzorg Sloterweg - Premium Website

Een modern, luxe en professioneel website voor Mondzorg Sloterweg, geïnspireerd door het Oral Design Beverly Hills design maar met een eigen Nederlandse premium identiteit.

## 🎨 Design Kenmerken

### Premium Kleurenpalet
- **Primary Gold**: #C8A882 - Luxe goud voor accenten
- **Primary Dark**: #1a1a1a - Diep zwart voor contrast
- **Light Cream**: #F7F5F2 - Warme achtergrondkleur
- **Pure White**: #FFFFFF - Schone, heldere achtergrond

### Typografie
- **Serif Font**: Cormorant Garamond - Voor headings (elegant en klassiek)
- **Sans-serif Font**: Montserrat - Voor body tekst (modern en leesbaar)

## 📁 Projectstructuur

```
MondzorgSloterweg New Website/
├── index.html              # Homepage
├── behandelingen.html      # Behandelingen overzicht
├── team.html              # Team pagina
├── inschrijven.html       # Inschrijf/registratie formulier
├── tarieven.html          # Prijzen overzicht
├── contact.html           # Contact pagina
├── css/
│   └── style.css          # Alle styling
├── js/
│   └── main.js            # JavaScript functionaliteit
├── assets/
│   ├── icons/             # Iconen voor diensten
│   ├── team/              # Team foto's
│   └── (andere afbeeldingen)
└── README.md              # Deze file
```

## 🌟 Pagina's

### 1. Homepage (index.html)
- Hero sectie met grote impact
- Over Mondzorg Sloterweg
- Service preview met 6 diensten
- Features (Passie, Technieken, Natuurlijke Look)
- Persoonlijk advies sectie
- Media coverage
- Certificeringen
- Footer met contactinformatie

### 2. Behandelingen (behandelingen.html)
Uitgebreide behandelingencatalogus georganiseerd in categorieën:
- Algemene Tandheelkunde
- Mondhygiëne
- Esthetische Tandheelkunde
- Implantologie
- Orthodontie
- Kronen & Bruggen
- Spoedzorg

### 3. Ons Team (team.html)
- Team introductie
- 6 teamleden met foto's en specialisaties:
  - Dr. Farbod Sharifi (Tandarts & Eigenaar)
  - Dr. Sarah van den Berg (Tandarts)
  - Linda Jansen (Mondhygiënist)
  - Mark de Vries (Tandarts Implantoloog)
  - Emma Bakker (Orthodontist)
  - Sophie Peters (Mondhygiënist)
- Filosofie sectie (Biomimetisch, Minimaal Invasief, etc.)

### 4. Inschrijven (inschrijven.html)
Uitgebreid registratieformulier met:
- Persoonlijke gegevens
- Adresgegevens
- Verzekeringsinformatie
- Behandeling voorkeuren
- Medische informatie
- Privacy & toestemming checkboxes
- Info sectie over eerste consult en spoedzorg

### 5. Tarieven (tarieven.html)
Transparante prijsoverzicht met:
- Algemene tandheelkunde prijzen
- Mondhygiëne behandelingen
- Esthetische tandheelkunde (veneers, bonding, bleaching)
- Implantologie & reconstructies
- Orthodontie (Invisalign, beugels)
- Verzekeringsinformatie
- Betalingsmogelijkheden

### 6. Contact (contact.html)
- Contactinformatie
- Contact formulier
- Google Maps integratie
- Bereikbaarheid informatie (auto, OV, fiets)
- FAQ sectie

## 🎯 Features

### Responsive Design
- Volledig responsive voor alle schermformaten
- Mobile-first approach
- Hamburger menu voor mobiel

### Animaties
- Smooth scroll
- Fade-in effecten bij scroll
- Hover effecten op cards en buttons
- Loading states voor formulieren

### Formulieren
- Client-side validatie
- Notification systeem
- Gebruiksvriendelijke error handling

### Cookie Consent
- Automatische cookie consent popup
- LocalStorage voor preferences

### Navigation
- Sticky navigation bar
- Active page highlighting
- Smooth transitions

## 🖼️ Afbeeldingen Toevoegen

### Hero Afbeeldingen
Plaats in `/assets/`:
- `hero-bg.jpg` - Homepage hero achtergrond
- `page-hero-bg.jpg` - Subpagina's hero achtergrond

### Team Foto's
Plaats in `/assets/team/`:
- `farbod-sharifi.jpg`
- `team-member-2.jpg`
- `team-member-3.jpg`
- `team-member-4.jpg`
- `team-member-5.jpg`
- `team-member-6.jpg`

Aanbevolen formaat: 800x1000px, verticale portretten

### Service Iconen
Plaats in `/assets/icons/`:
- `orthodontics.svg`
- `tooth-pain.svg`
- `hygiene.svg`
- `implant.svg`
- `veneers.svg`
- `emergency.svg`

## 🚀 Deployment

### Lokaal Testen
1. Open `index.html` in je browser
2. Of gebruik een lokale server:
   ```bash
   python -m http.server 8000
   ```
3. Bezoek `http://localhost:8000`

### Live Deployment
Upload alle bestanden naar je webserver via FTP of hosting control panel.

Zorg ervoor dat de mapstructuur behouden blijft.

## 🔧 Aanpassingen

### Kleuren Wijzigen
Bewerk de CSS variabelen in `css/style.css`:
```css
:root {
    --primary-gold: #C8A882;
    --primary-dark: #1a1a1a;
    /* etc. */
}
```

### Teksten Aanpassen
Bewerk de HTML bestanden direct. Alle teksten zijn in het Nederlands en komen van de originele website.

### Formulier Integratie
De formulieren zijn momenteel client-side. Voor echte functionaliteit:
1. Voeg een backend toe (PHP, Node.js, etc.)
2. Integreer met email service (SendGrid, Mailgun, etc.)
3. Of gebruik een formulier service (Formspree, Netlify Forms, etc.)

## 📱 Browser Ondersteuning

- Chrome (laatste 2 versies)
- Firefox (laatste 2 versies)
- Safari (laatste 2 versies)
- Edge (laatste 2 versies)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 Licentie

© 2025 Mondzorg Sloterweg - Alle rechten voorbehouden

## 🆘 Support

Voor vragen of ondersteuning, neem contact op met het ontwikkelteam.

---

**Ontwikkeld met**: HTML5, CSS3, JavaScript (Vanilla)
**Design Inspiratie**: Oral Design Beverly Hills
**Fonts**: Google Fonts (Cormorant Garamond, Montserrat)

