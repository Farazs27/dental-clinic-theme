# Blog System - Mondzorg Sloterweg

## ✅ Status: LIVE

Your blog is now live at: **https://mondzorgsloterweg.nl/blog.html**

---

## Configuration

**Supabase Table:** `blog_posts` (your existing table)

**Fields Used:**
- `title` - Blog title
- `slug` - URL identifier
- `content` - Blog content (markdown or HTML)
- `meta_description` - Used as excerpt
- `featured_image` - Header image URL
- `category` - Blog category
- `date` / `created_at` - Publication date
- `published` - Must be `true` to show on website

---

## How It Works

1. Your n8n workflow pushes blogs to Supabase `blog_posts` table
2. Website automatically fetches all blogs where `published = true`
3. Blogs are displayed with Drs. Farbod Sharifi as author (always)
4. Content is converted from markdown to HTML if needed

---

## Key Features

- ✅ Automatic fetching from Supabase
- ✅ Drs. Farbod Sharifi appears on every blog post
- ✅ Markdown to HTML conversion
- ✅ Responsive design
- ✅ Share buttons (WhatsApp, Facebook, Twitter)
- ✅ SEO-friendly

---

## Files

- `blog.html` - Blog listing page
- `blog-detail.html` - Individual blog page
- `js/blog.js` - Supabase integration

---

## URLs

- Blog list: `/blog.html`
- Blog detail: `/blog-detail.html?slug=your-blog-slug`
