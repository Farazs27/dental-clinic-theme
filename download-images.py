#!/usr/bin/env python3
"""
Script om afbeeldingen te downloaden van mondzorgsloterweg.nl
Uitvoeren met: python3 download-images.py
"""

import urllib.request
import os

print("🖼️  Downloaden van afbeeldingen van mondzorgsloterweg.nl...")
print("")

# Maak mappen aan
os.makedirs("assets/team", exist_ok=True)
os.makedirs("assets/icons", exist_ok=True)
os.makedirs("assets/logos", exist_ok=True)

print("📁 Mappen aangemaakt...")
print("")

# Afbeeldingen om te downloaden
images = [
    # Logo
    ("https://mondzorgsloterweg.nl/wp-content/uploads/2020/10/cropped-Logo-M8-1.png", "assets/logos/logo.png"),
    
    # Hero/Achtergrond Afbeeldingen
    ("https://mondzorgsloterweg.nl/wp-content/uploads/2020/10/SON01149-1024x683.jpg", "assets/hero-bg.jpg"),
    ("https://mondzorgsloterweg.nl/wp-content/uploads/2020/10/SON01038-scaled.jpg", "assets/page-hero-bg.jpg"),
    
    # Team Foto's
    ("https://mondzorgsloterweg.nl/wp-content/uploads/2025/02/PHOTO-2025-02-02-15-18-47.jpg", "assets/team/farbod-sharifi.jpg"),
    ("https://mondzorgsloterweg.nl/wp-content/uploads/2020/10/SON01038-scaled.jpg", "assets/team/team-member-2.jpg"),
    
    # Certificering Logo's
    ("https://mondzorgsloterweg.nl/wp-content/uploads/2020/10/knmtlogo2_wit_54px.jpg", "assets/logos/knmt.jpg"),
    ("https://mondzorgsloterweg.nl/wp-content/uploads/2020/10/Logo_KRM.jpg", "assets/logos/krm.jpg"),
    ("https://mondzorgsloterweg.nl/wp-content/uploads/2020/10/unnamed.jpg", "assets/logos/nvm.jpg"),
    ("https://mondzorgsloterweg.nl/wp-content/uploads/2021/12/invisalign-vector-logo.png", "assets/logos/invisalign.png"),
    ("https://mondzorgsloterweg.nl/wp-content/uploads/2020/10/Big_logo.jpg", "assets/logos/big.jpg"),
]

# Download elke afbeelding
for url, filepath in images:
    try:
        print(f"📥 Downloaden: {os.path.basename(filepath)}...")
        urllib.request.urlretrieve(url, filepath)
        print(f"   ✅ Opgeslagen naar: {filepath}")
    except Exception as e:
        print(f"   ❌ Fout bij downloaden: {e}")

print("")
print("✅ Klaar! Afbeeldingen gedownload naar:")
print("   - assets/hero-bg.jpg")
print("   - assets/page-hero-bg.jpg")
print("   - assets/team/farbod-sharifi.jpg")
print("   - assets/logos/ (verschillende certificeringen)")
print("")
print("🌐 Refresh uw browser op: http://localhost:8000")
print("   (Druk CMD + R om te vernieuwen)")
print("")


