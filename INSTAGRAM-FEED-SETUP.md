# 📸 Instagram Feed Setup - Auto-Sync met @dentistfarbod

## ⚡ Snelle Setup (5 minuten)

Je website is nu voorbereid voor een **automatisch synchroniserende** Instagram feed. Volg deze stappen om je echte Instagram posts te tonen.

---

## Stap 1: Maak een Elfsight Account

1. Ga naar: **https://elfsight.com/instagram-feed-widget/**
2. Klik op **"Create widget for FREE"**
3. Maak een gratis account aan (email of Google)

---

## Stap 2: Maak je Instagram Feed Widget

1. Na inloggen, klik op **"Add App"** → **"Instagram Feed"**
2. Klik op **"Connect Instagram Account"**
3. Log in met je Instagram account (@dentistfarbod)
4. Geef Elfsight toestemming om je feed te lezen

---

## Stap 3: Configureer je Feed

In de Elfsight editor, stel deze opties in:

### Layout
- **Layout:** Grid
- **Columns:** 6 (desktop) / 2 (mobiel)
- **Rows:** 2
- **Gap:** 0px (voor edge-to-edge look)

### Source
- **Source:** Je verbonden @dentistfarbod account
- **Post Count:** 12

### Design
- **Hover Effect:** Aan (Instagram icon)
- **Popup:** Aan (voor grotere weergave)

---

## Stap 4: Kopieer je App ID

1. Klik op **"Add to website"** (rechtsboven)
2. Je krijgt een code die er zo uitziet:
   ```html
   <script src="https://static.elfsight.com/platform/platform.js" async></script>
   <div class="elfsight-app-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx" data-elfsight-app-lazy></div>
   ```
3. Kopieer de **App ID** (het lange deel na `elfsight-app-`)
   Voorbeeld: `xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx`

---

## Stap 5: Vervang de Placeholder in je Website

Open elke HTML file en zoek naar:
```html
<div class="elfsight-app-YOUR-APP-ID" data-elfsight-app-lazy></div>
```

Vervang `YOUR-APP-ID` met je echte App ID:
```html
<div class="elfsight-app-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx" data-elfsight-app-lazy></div>
```

### Bestanden die je moet aanpassen:
- `index.html`
- `behandelingen.html`
- `team.html`
- `contact.html`
- `esthetische-analyse.html`
- `inschrijven.html`
- `tarieven.html`

**Tip:** Gebruik zoek & vervang (CMD+H) om `YOUR-APP-ID` in alle bestanden tegelijk te vervangen!

---

## ✅ Klaar!

Na deze stappen:
- ✅ Je echte Instagram posts worden getoond
- ✅ Feed synchroniseert automatisch (elke 24 uur)
- ✅ Nieuwe posts verschijnen automatisch
- ✅ Desktop: 6 kolommen
- ✅ Mobiel: 2 kolommen

---

## 📋 Elfsight Gratis Plan

Het gratis plan biedt:
- 200 views per maand
- Volledige Instagram integratie
- Automatische sync

Voor meer views, bekijk hun betaalde plannen op elfsight.com/pricing

---

## 🔧 Alternatieven

Als je geen Elfsight wilt gebruiken, hier zijn andere opties:

### 1. LightWidget (Gratis)
- Website: https://lightwidget.com
- Ook gratis optie beschikbaar

### 2. SnapWidget (Gratis)
- Website: https://snapwidget.com
- Free plan met basic features

### 3. Behold.so (Premium look)
- Website: https://behold.so
- Mooie, moderne widgets

---

## ❓ Hulp Nodig?

- Elfsight Help: https://help.elfsight.com
- Instagram API docs: https://developers.facebook.com/docs/instagram

---

**Veel succes met je Instagram feed!** 🦷✨

