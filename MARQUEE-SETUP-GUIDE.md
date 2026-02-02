# Logo Marquee Setup - Quick Guide

## ✅ What Has Been Done

I've added **3 scrolling logo marquee sections** to your homepage:

### 📍 Locations:
1. **Marquee 1** - After "OVER MONDZORG SLOTERWEG" section
2. **Marquee 2** - After "WAAR KUNNEN WE U MEE HELPEN?" section  
3. **Marquee 3** - After "IN DE MEDIA" section

### 📁 Folder Structure Created:
```
assets/marquee/
├── README.md (detailed instructions)
├── section1/
│   └── PLACE_LOGOS_HERE.txt
├── section2/
│   └── PLACE_LOGOS_HERE.txt
└── section3/
    └── PLACE_LOGOS_HERE.txt
```

## 🎯 How to Add Your Logos

### Step 1: Prepare Your Logo Files
- Format: PNG with transparent background (recommended)
- Size: Around 400x200px works best
- Name them: `logo1.png`, `logo2.png`, `logo3.png`, etc.

### Step 2: Place Logos in Folders

**For Section 1** (after About section):
- Place files in: `assets/marquee/section1/`
- Suggested logos: KNMT, KRM, NVM, BIG, Invisalign, dental associations

**For Section 2** (after Services section):
- Place files in: `assets/marquee/section2/`
- Suggested logos: Dental brands, equipment manufacturers, product partners

**For Section 3** (after Media section):
- Place files in: `assets/marquee/section3/`
- Suggested logos: RTL, NRC, NPO Radio 1, TikTok, Instagram, media outlets

### Step 3: Upload to Git and Deploy
```bash
cd "/Users/farazsharifi/MondzorgSloterweg New Website"
git add "v3 2026/"
git commit -m "Add logo marquee sections to homepage"
git push origin main
```

## ✨ Features

- **Smooth scrolling animation** - Logos scroll continuously from right to left
- **Hover to pause** - Animation stops when you hover over a logo
- **Grayscale effect** - Logos are grayscale by default, full color on hover
- **Fully responsive** - Looks great on mobile, tablet, and desktop
- **Auto-hide missing logos** - If a logo file doesn't exist, it won't show
- **Seamless loop** - Each logo appears twice for continuous scrolling

## 🎨 Customization

The marquee is already styled to match your website's design:
- Clean white cards with subtle shadows
- Smooth animations
- Professional grayscale effect
- Elegant hover interactions

## 📝 Example Logo Files

You already have these logos in your existing folders that you can use:
- `assets/logos/knmt.jpg` → Convert to PNG and add to section1
- `assets/logos/krm.jpg` → Convert to PNG and add to section1
- `assets/logos/nvm.jpg` → Convert to PNG and add to section1
- `assets/logos/invisalign.png` → Copy to section1
- `assets/logos/big.jpg` → Convert to PNG and add to section1

## 🔧 Need to Adjust?

- **Speed**: Edit animation duration in `css/style.css` (line with `animation: marquee 40s`)
- **Spacing**: Adjust `gap: 80px` in `.marquee-track`
- **Size**: Modify `width: 180px` and `height: 100px` in `.marquee-logo`

## 📱 Test Your Changes

1. Open `index.html` in a browser locally
2. Scroll down to see all three marquees
3. Hover over logos to see the color effect
4. Check on mobile by resizing your browser

---

**Need help?** Read the detailed `assets/marquee/README.md` for more information!
