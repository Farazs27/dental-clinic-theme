# Icon Upload Guide

## How to Upload Your Custom Icons

I've updated the website to use image files instead of SVG icons. Here's how to add your custom icons:

### Step 1: Prepare Your Images

Create 6 icon images for the service cards. Recommended specifications:
- **Format**: PNG, JPG, or SVG (PNG with transparency recommended)
- **Size**: 48x48 pixels minimum (will be scaled automatically)
- **Aspect Ratio**: Square (1:1)
- **Background**: Transparent or white (depending on your design)

### Step 2: Name Your Files

Name your image files exactly as follows and place them in the `assets/icons/` folder:

1. **icon-orthodontics.png** - For "Rechte Tanden?" (Straight Teeth)
2. **icon-pain.png** - For "Kiespijn?" (Toothache)
3. **icon-hygiene.png** - For "Controles & Mondhygiëne" (Check-ups & Oral Hygiene)
4. **icon-implant.png** - For "Afgebroken of Missende Tanden" (Broken or Missing Teeth)
5. **icon-veneers.png** - For "Smile Makeovers"
6. **icon-emergency.png** - For "Tandheelkundige Spoedgevallen" (Dental Emergencies)

### Step 3: Upload the Files

**Option A: Using File Explorer/Finder**
1. Navigate to: `MondzorgSloterweg New Website/assets/icons/`
2. Copy your 6 image files into this folder
3. Make sure the filenames match exactly (case-sensitive)

**Option B: Using Drag & Drop in Cursor**
1. Open the `assets/icons/` folder in Cursor
2. Drag and drop your image files into the folder
3. Verify the filenames are correct

### Step 4: Verify

After uploading, refresh your website. The icons should appear automatically. If an image doesn't load, it will be hidden gracefully (the card will still display, just without the icon).

### File Structure

Your final structure should look like this:
```
assets/
  icons/
    icon-orthodontics.png
    icon-pain.png
    icon-hygiene.png
    icon-implant.png
    icon-veneers.png
    icon-emergency.png
```

### Tips

- **File Formats**: PNG is recommended for icons with transparency. JPG works too if you don't need transparency.
- **File Size**: Keep images under 50KB each for fast loading
- **Testing**: If you want to test with one icon first, upload just one file and check if it appears on the website
- **Backup**: The old SVG icons are still in the code as fallback, but they won't show if image files are present

### Need Help?

If your icons don't appear:
1. Check that the filenames match exactly (including file extension: .png, .jpg, etc.)
2. Check that files are in the `assets/icons/` folder (not `assets/icon/` or another location)
3. Clear your browser cache and refresh
4. Check the browser console (F12) for any error messages

