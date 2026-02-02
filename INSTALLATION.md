# 🚀 Installatie & Setup Handleiding

## Welkom bij uw nieuwe Mondzorg Sloterweg website!

Deze website is volledig ontwikkeld en klaar voor gebruik. Volg deze stappen om de website te bekijken en live te zetten.

## ✅ Wat is al Af?

✓ Alle 6 pagina's volledig ontwikkeld
✓ Responsive design voor alle apparaten
✓ Premium styling met goud/zwart kleurenschema
✓ Alle formulieren werkend (client-side)
✓ Navigatie met smooth scrolling
✓ Animaties en hover effecten
✓ Cookie consent systeem
✓ SEO-vriendelijke structuur

## 📋 Stap 1: De Website Lokaal Bekijken

### Optie A: Direct Openen (Eenvoudigste)
1. Navigeer naar de project folder
2. Dubbelklik op `index.html`
3. De website opent in uw standaard browser

### Optie B: Lokale Server (Aanbevolen)
Dit voorkomt mogelijk CORS problemen.

**Met Python (Mac/Linux):**
```bash
cd "/Users/farazsharifi/MondzorgSloterweg New Website"
python3 -m http.server 8000
```
Bezoek dan: `http://localhost:8000`

**Met PHP:**
```bash
cd "/Users/farazsharifi/MondzorgSloterweg New Website"
php -S localhost:8000
```
Bezoek dan: `http://localhost:8000`

**Met Node.js (als geïnstalleerd):**
```bash
npx serve "/Users/farazsharifi/MondzorgSloterweg New Website"
```

## 📋 Stap 2: Afbeeldingen Toevoegen

De website werkt zonder afbeeldingen, maar ziet er beter uit met:

1. **Lees** `IMAGES-NEEDED.md` voor complete lijst
2. **Verzamel** de afbeeldingen (team foto's, hero afbeeldingen, iconen)
3. **Plaats** ze in de juiste mappen:
   - `/assets/` - Hero afbeeldingen
   - `/assets/team/` - Team foto's
   - `/assets/icons/` - Service iconen

## 📋 Stap 3: Personaliseren

### Eenvoudige Aanpassingen:

1. **Teksten wijzigen**: 
   - Open de HTML bestanden in een text editor
   - Zoek en vervang tekst
   - Sla op

2. **Kleuren aanpassen**:
   - Open `css/style.css`
   - Wijzig de CSS variabelen bovenaan:
   ```css
   :root {
       --primary-gold: #C8A882;  /* Verander naar uw kleur */
       --primary-dark: #1a1a1a;
   }
   ```

3. **Contact informatie**:
   - Zoek in alle HTML bestanden naar telefoonnummers/emails
   - Vervang met correcte gegevens

## 📋 Stap 4: Formulieren Activeren

De formulieren zijn nu alleen client-side. Voor echte functionaliteit:

### Optie A: Formspree (Eenvoudigste - Gratis)
1. Ga naar [Formspree.io](https://formspree.io)
2. Maak een gratis account
3. Creëer een nieuw formulier
4. Kopieer de action URL
5. Vervang in de HTML:
   ```html
   <form action="JOUW-FORMSPREE-URL" method="POST">
   ```

### Optie B: Netlify Forms (Als je host op Netlify)
1. Voeg toe aan form tag: `netlify`
2. Netlify handelt de rest af

### Optie C: Custom Backend
Voor volledige controle, ontwikkel een eigen backend met:
- PHP + Email
- Node.js + Express + Nodemailer
- Python + Flask/Django

## 📋 Stap 5: Website Live Zetten

### Hosting Opties:

#### 1. Netlify (Aanbevolen - Gratis)
```bash
# Installeer Netlify CLI
npm install -g netlify-cli

# Deploy
cd "/Users/farazsharifi/MondzorgSloterweg New Website"
netlify deploy
```

#### 2. Vercel (Gratis)
1. Ga naar [vercel.com](https://vercel.com)
2. Maak account aan
3. Drag & drop de project folder
4. Klaar!

#### 3. Traditionele Hosting (cPanel, FTP)
1. Log in op uw hosting
2. Upload alle bestanden naar `public_html` of `www`
3. Behoud de mapstructuur
4. Klaar!

#### 4. GitHub Pages (Gratis)
1. Creëer GitHub repository
2. Push de code
3. Activeer GitHub Pages in settings
4. Website is live op `username.github.io/repo-name`

## 📋 Stap 6: Google Maps Integratie

De contact pagina heeft een Google Maps embed. Om deze te activeren:

1. Ga naar [Google Cloud Console](https://console.cloud.google.com)
2. Creëer een project
3. Activeer Maps JavaScript API
4. Genereer een API key
5. Ga naar [Google Maps Embed](https://www.google.com/maps)
6. Zoek: "Sloterweg 1160, Amsterdam"
7. Klik op "Delen" → "Kaart insluiten"
8. Kopieer de iframe code
9. Vervang in `contact.html` de bestaande iframe

## 🔧 Veelvoorkomende Problemen

### Probleem: Formulieren werken niet
**Oplossing**: Volg Stap 4 hierboven voor formulier integratie

### Probleem: Afbeeldingen worden niet geladen
**Oplossing**: 
- Check of afbeeldingen in de juiste mappen staan
- Check of bestandsnamen exact overeenkomen (hoofdlettergevoelig!)
- Check bestandspermissies op de server

### Probleem: Website ziet er kapot uit
**Oplossing**:
- Check of `css/style.css` correct geladen wordt
- Check of `js/main.js` correct geladen wordt
- Open browser console (F12) voor errors

### Probleem: Mobile menu werkt niet
**Oplossing**: JavaScript is vereist. Check of JS enabled is in browser.

## 📱 Browser Testing Checklist

Test de website in:
- [ ] Chrome (Desktop)
- [ ] Safari (Desktop)
- [ ] Firefox
- [ ] Safari (iPhone)
- [ ] Chrome (Android)
- [ ] Edge

## 🎯 Performance Optimalisatie

Na het live zetten:

1. **Comprimeer afbeeldingen**
   - Gebruik TinyPNG.com
   - Of ImageOptim

2. **Minify CSS/JS**
   - Online tools of build tools

3. **Enable Caching**
   - Via .htaccess of hosting settings

4. **CDN overwegen**
   - Cloudflare (gratis tier beschikbaar)

## 📊 Analytics Toevoegen

Voeg Google Analytics toe:

1. Maak account op [analytics.google.com](https://analytics.google.com)
2. Krijg tracking code
3. Voeg toe voor `</head>` in alle HTML bestanden:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🔒 Security Checklist

Voor live website:
- [ ] HTTPS certificaat geïnstalleerd (gratis via Let's Encrypt)
- [ ] Formulier spam bescherming toegevoegd
- [ ] Contact email niet zichtbaar als plain text (of gebruik contact form)
- [ ] .htaccess beveiligingsregels toegevoegd

## 📞 Support & Ondersteuning

Als u hulp nodig heeft:
1. Check `README.md` voor algemene informatie
2. Check `IMAGES-NEEDED.md` voor afbeeldingen lijst
3. Google voor specifieke technische vragen
4. Overweeg een webdeveloper in te huren voor complexere aanpassingen

## 🎉 Gefeliciteerd!

Uw premium Mondzorg Sloterweg website is klaar! 

**Next Steps:**
1. ✓ Bekijk de website lokaal
2. ⏳ Voeg afbeeldingen toe
3. ⏳ Personaliseer teksten
4. ⏳ Activeer formulieren
5. ⏳ Zet live
6. ⏳ Test grondig
7. ⏳ Deel met de wereld!

---

**Ontwikkeld met zorg voor Mondzorg Sloterweg**
Design geïnspireerd door premium tandheelkundige praktijken wereldwijd.

