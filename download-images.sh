#!/bin/bash

# Script om afbeeldingen te downloaden van mondzorgsloterweg.nl
# Uitvoeren met: bash download-images.sh

echo "🖼️  Downloaden van afbeeldingen van mondzorgsloterweg.nl..."
echo ""

# Zorg dat we in de juiste directory zijn
cd "/Users/farazsharifi/MondzorgSloterweg New Website"

# Maak assets mappen aan
mkdir -p assets/team
mkdir -p assets/icons
mkdir -p assets/logos

echo "📁 Mappen aangemaakt..."
echo ""

# Download Logo
echo "📥 Downloaden van logo..."
curl -o assets/logos/logo.png "https://mondzorgsloterweg.nl/wp-content/uploads/2020/10/cropped-Logo-M8-1.png"

# Download Hero/Achtergrond Afbeeldingen
echo "📥 Downloaden van hero afbeeldingen..."
curl -o assets/hero-bg.jpg "https://mondzorgsloterweg.nl/wp-content/uploads/2020/10/SON01149-1024x683.jpg"
curl -o assets/page-hero-bg.jpg "https://mondzorgsloterweg.nl/wp-content/uploads/2020/10/SON01038-scaled.jpg"

# Download Team Foto's
echo "📥 Downloaden van team foto's..."
curl -o assets/team/farbod-sharifi.jpg "https://mondzorgsloterweg.nl/wp-content/uploads/2025/02/PHOTO-2025-02-02-15-18-47.jpg"

# Download Certificering Logo's
echo "📥 Downloaden van certificering logo's..."
curl -o assets/logos/knmt.jpg "https://mondzorgsloterweg.nl/wp-content/uploads/2020/10/knmtlogo2_wit_54px.jpg"
curl -o assets/logos/krm.jpg "https://mondzorgsloterweg.nl/wp-content/uploads/2020/10/Logo_KRM.jpg"
curl -o assets/logos/nvm.jpg "https://mondzorgsloterweg.nl/wp-content/uploads/2020/10/unnamed.jpg"
curl -o assets/logos/invisalign.png "https://mondzorgsloterweg.nl/wp-content/uploads/2021/12/invisalign-vector-logo.png"
curl -o assets/logos/big.jpg "https://mondzorgsloterweg.nl/wp-content/uploads/2020/10/Big_logo.jpg"

echo ""
echo "✅ Klaar! Afbeeldingen gedownload naar:"
echo "   - assets/hero-bg.jpg"
echo "   - assets/page-hero-bg.jpg"
echo "   - assets/team/farbod-sharifi.jpg"
echo "   - assets/logos/ (verschillende certificeringen)"
echo ""
echo "🌐 Nu uw website openen in browser op: http://localhost:8000"
echo ""
