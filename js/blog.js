// ================================
// SUPABASE CONFIGURATION
// ================================

// Supabase configuration - Edit these values in js/config.js
// Get your Supabase credentials at: https://supabase.com/
const SUPABASE_URL = (window.SITE_CONFIG && window.SITE_CONFIG.api && window.SITE_CONFIG.api.supabase) 
    ? window.SITE_CONFIG.api.supabase.url 
    : 'YOUR_SUPABASE_URL_HERE';
const SUPABASE_ANON_KEY = (window.SITE_CONFIG && window.SITE_CONFIG.api && window.SITE_CONFIG.api.supabase) 
    ? window.SITE_CONFIG.api.supabase.anonKey 
    : 'YOUR_SUPABASE_ANON_KEY_HERE';
const BLOG_TABLE_NAME = (window.SITE_CONFIG && window.SITE_CONFIG.api && window.SITE_CONFIG.api.supabase) 
    ? window.SITE_CONFIG.api.supabase.tableName 
    : 'blog_posts';

// Initialize Supabase client (loaded from CDN in HTML)
// Note: Add this script tag to your HTML files before blog.js:
// <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>

let supabaseClient = null;

function initializeSupabase() {
    if (typeof window.supabase === 'undefined' || !window.supabase.createClient) {
        console.error('Supabase library not loaded. Please add the Supabase CDN script.');
        return false;
    }
    
    if (SUPABASE_URL === 'YOUR_SUPABASE_URL' || SUPABASE_ANON_KEY === 'YOUR_SUPABASE_ANON_KEY') {
        console.warn('Supabase credentials not configured. Using demo mode.');
        return false;
    }
    
    try {
        supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
        return true;
    } catch (error) {
        console.error('Error initializing Supabase:', error);
        return false;
    }
}

// ================================
// BLOG LIST PAGE
// ================================

async function fetchBlogs() {
    const loadingEl = document.getElementById('blogLoading');
    const sectionEl = document.getElementById('blogSection');
    const emptyEl = document.getElementById('blogEmpty');
    const gridEl = document.getElementById('blogGrid');
    
    if (!loadingEl || !sectionEl || !gridEl) {
        return Promise.resolve(); // Not on blog list page
    }
    
    try {
        const isSupabaseReady = initializeSupabase();
        
        if (!isSupabaseReady) {
            // Demo mode with sample data
            const demoBlogs = getDemoBlogs();
            displayBlogs(demoBlogs);
            return Promise.resolve();
        }
        
        // Fetch from Supabase - only published blogs, ordered by date
        const { data, error } = await supabaseClient
            .from(BLOG_TABLE_NAME)
            .select('*')
            .eq('published', true)
            .order('created_at', { ascending: false })
            .limit(50);
        
        if (error) {
            console.error('Error fetching blogs:', error);
            showError('Er is een fout opgetreden bij het laden van de artikelen.');
            return Promise.resolve();
        }
        
        if (!data || data.length === 0) {
            loadingEl.style.display = 'none';
            emptyEl.style.display = 'block';
            return Promise.resolve();
        }
        
        displayBlogs(data);
        return Promise.resolve();
        
    } catch (error) {
        console.error('Error:', error);
        showError('Er is een fout opgetreden bij het laden van de artikelen.');
        return Promise.resolve();
    }
}

function displayBlogs(blogs) {
    const loadingEl = document.getElementById('blogLoading');
    const sectionEl = document.getElementById('blogSection');
    const gridEl = document.getElementById('blogGrid');
    
    loadingEl.style.display = 'none';
    sectionEl.style.display = 'block';
    
    gridEl.innerHTML = blogs.map(blog => createBlogCard(blog)).join('');
    
    // Add fade-in animation
    setTimeout(() => {
        const cards = gridEl.querySelectorAll('.blog-card');
        cards.forEach((card, index) => {
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 100);
        });
    }, 100);
}

function createBlogCard(blog) {
    // Map fields from your blog_posts table structure
    const publishedDate = formatDate(blog.date || blog.created_at);
    const excerpt = blog.meta_description || truncateText(stripHtml(blog.content), 150);
    const author = (window.SITE_CONFIG && window.SITE_CONFIG.team && window.SITE_CONFIG.team.dentists && window.SITE_CONFIG.team.dentists[0]) 
        ? window.SITE_CONFIG.team.dentists[0].name 
        : 'Clinic Team';
    const category = blog.category || 'Algemeen';
    const slug = blog.slug || blog.id;
    
    // Use featured image or fallback to placeholder
    const imageUrl = blog.featured_image || 'assets/team/dentist-1.jpg';
    
    return `
        <article class="blog-card" style="opacity: 0; transform: translateY(30px); transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);">
            <a href="blog-detail.html?slug=${slug}" class="blog-card-link">
                <div class="blog-card-image" style="background-image: url('${imageUrl}');">
                    <span class="blog-card-category">${category}</span>
                </div>
                <div class="blog-card-content">
                    <div class="blog-card-meta">
                        <span class="blog-card-date">${publishedDate}</span>
                        <span class="blog-card-author">${author}</span>
                    </div>
                    <h3 class="blog-card-title">${blog.title}</h3>
                    <p class="blog-card-excerpt">${excerpt}</p>
                    <span class="blog-card-read-more">Lees meer →</span>
                </div>
            </a>
        </article>
    `;
}

// ================================
// BLOG DETAIL PAGE
// ================================

async function fetchBlogDetail() {
    const detailLoading = document.getElementById('detailLoading');
    const detailEl = document.getElementById('blogDetail');
    const errorEl = document.getElementById('blogError');
    
    if (!detailEl) {
        return; // Not on blog detail page
    }
    
    const urlParams = new URLSearchParams(window.location.search);
    const slug = urlParams.get('slug');
    
    if (!slug) {
        showBlogError();
        return;
    }
    
    try {
        const isSupabaseReady = initializeSupabase();
        
        if (!isSupabaseReady) {
            // Demo mode
            const demoBlog = getDemoBlogDetail(slug);
            if (demoBlog) {
                displayBlogDetail(demoBlog);
            } else {
                showBlogError();
            }
            return;
        }
        
        // Fetch from Supabase - first try by slug
        let { data, error } = await supabaseClient
            .from(BLOG_TABLE_NAME)
            .select('*')
            .eq('slug', slug)
            .single();
        
        // If not found by slug and slug looks like a number, try by id
        if (error && !isNaN(slug)) {
            const result = await supabaseClient
                .from(BLOG_TABLE_NAME)
                .select('*')
                .eq('id', parseInt(slug))
                .single();
            data = result.data;
            error = result.error;
        }
        
        if (error || !data) {
            console.error('Error fetching blog:', error);
            showBlogError();
            return;
        }
        
        displayBlogDetail(data);
        
    } catch (error) {
        console.error('Error:', error);
        showBlogError();
    }
}

function displayBlogDetail(blog) {
    const detailLoading = document.getElementById('detailLoading');
    const detailEl = document.getElementById('blogDetail');
    
    detailLoading.style.display = 'none';
    detailEl.style.display = 'block';
    
    // Update page title and meta
    const siteName = (window.SITE_CONFIG && window.SITE_CONFIG.business) ? window.SITE_CONFIG.business.name : 'Dental Clinic';
    document.getElementById('pageTitle').textContent = `${blog.title} - ${siteName}`;
    document.getElementById('pageDescription').setAttribute('content', blog.meta_description || truncateText(stripHtml(blog.content), 160));
    
    // Update hero section
    const heroEl = document.getElementById('blogHero');
    if (blog.featured_image) {
        heroEl.style.backgroundImage = `url('${blog.featured_image}')`;
        heroEl.style.backgroundSize = 'cover';
        heroEl.style.backgroundPosition = 'center';
    }
    
    // Update meta information
    document.getElementById('blogDate').textContent = formatDate(blog.date || blog.created_at);
    document.getElementById('blogCategory').textContent = blog.category || 'Algemeen';
    document.getElementById('blogTitle').textContent = blog.title;
    
    // Parse and render content - handle markdown-style frontmatter if present
    let contentHtml = blog.content;
    if (contentHtml && contentHtml.startsWith('--')) {
        // Remove frontmatter (between -- markers)
        const parts = contentHtml.split('--');
        if (parts.length >= 3) {
            contentHtml = parts.slice(2).join('--').trim();
        }
    }
    // Convert markdown headings and formatting to HTML if needed
    contentHtml = convertMarkdownToHtml(contentHtml);
    document.getElementById('blogContent').innerHTML = contentHtml;
    
    // Fade in
    setTimeout(() => {
        detailEl.style.opacity = '1';
    }, 100);
}

function showBlogError() {
    const detailLoading = document.getElementById('detailLoading');
    const errorEl = document.getElementById('blogError');
    
    if (detailLoading) detailLoading.style.display = 'none';
    if (errorEl) errorEl.style.display = 'block';
}

// ================================
// UTILITY FUNCTIONS
// ================================

function formatDate(dateString) {
    if (!dateString) return '';
    
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('nl-NL', options);
}

function truncateText(text, maxLength) {
    if (!text) return '';
    if (text.length <= maxLength) return text;
    return text.substr(0, maxLength).trim() + '...';
}

function stripHtml(html) {
    if (!html) return '';
    const tmp = document.createElement('div');
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || '';
}

function convertMarkdownToHtml(content) {
    if (!content) return '';
    
    // If content already has proper HTML structure, return as-is
    if (content.includes('<h2>') && content.includes('<p>') && !content.includes('####')) {
        return content;
    }
    
    let html = content;
    
    // Convert markdown headings (most specific first)
    html = html.replace(/^#{4,}\s*(.+)$/gm, '<h4>$1</h4>');
    html = html.replace(/^###\s*(.+)$/gm, '<h3>$1</h3>');
    html = html.replace(/^##\s*(.+)$/gm, '<h2>$1</h2>');
    html = html.replace(/^#\s*(.+)$/gm, '<h1>$1</h1>');
    
    // Also handle "#### Title" format without leading newline
    html = html.replace(/####\s*(.+)/g, '<h4>$1</h4>');
    
    // Convert bold and italic
    html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
    html = html.replace(/\*(.+?)\*/g, '<em>$1</em>');
    
    // Convert markdown links [text](url)
    html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');
    
    // Convert unordered lists
    html = html.replace(/^- (.+)$/gm, '<li>$1</li>');
    html = html.replace(/(<li>.*<\/li>\n?)+/g, '<ul>$&</ul>');
    
    // Convert numbered lists
    html = html.replace(/^\d+\. (.+)$/gm, '<li>$1</li>');
    
    // Convert paragraphs (double newlines)
    html = html.replace(/\n\n+/g, '</p><p>');
    
    // Single newlines to <br> or paragraph breaks where appropriate
    html = html.replace(/\n/g, '</p><p>');
    
    // Wrap in paragraph tags if not already wrapped
    if (!html.startsWith('<')) {
        html = '<p>' + html + '</p>';
    }
    
    // Clean up empty paragraphs and fix nesting issues
    html = html.replace(/<p><\/p>/g, '');
    html = html.replace(/<p>\s*<h/g, '<h');
    html = html.replace(/<\/h(\d)>\s*<\/p>/g, '</h$1>');
    html = html.replace(/<p><h/g, '<h');
    html = html.replace(/<\/h(\d)><\/p>/g, '</h$1>');
    
    return html;
}

function showError(message) {
    const loadingEl = document.getElementById('blogLoading');
    const emptyEl = document.getElementById('blogEmpty');
    
    if (loadingEl) loadingEl.style.display = 'none';
    
    if (emptyEl) {
        emptyEl.style.display = 'block';
        emptyEl.querySelector('.empty-state h3').textContent = 'Er is een fout opgetreden';
        emptyEl.querySelector('.empty-state p').textContent = message;
    }
}

// ================================
// DEMO DATA (for testing without Supabase)
// ================================

function getDemoBlogs() {
    const authorName = (window.SITE_CONFIG && window.SITE_CONFIG.team && window.SITE_CONFIG.team.dentists && window.SITE_CONFIG.team.dentists[0]) 
        ? window.SITE_CONFIG.team.dentists[0].name 
        : 'Clinic Team';
    
    return [
        {
            id: 'demo-1',
            slug: 'demo-1',
            title: 'The Benefits of Biomimetic Dentistry',
            excerpt: 'Discover why biomimetic dentistry is the future of modern dental care and how it preserves your natural teeth.',
            content: '<p>Biomimetic dentistry is a revolutionary concept that focuses on preserving as much of your natural tooth structure as possible...</p>',
            published_at: '2026-01-15',
            author: authorName,
            category: 'Treatments',
            featured_image: 'assets/team/dentist-1.jpg'
        },
        {
            id: 'demo-2',
            slug: 'demo-2',
            title: 'Invisalign: Is It Right for You?',
            excerpt: 'Everything you need to know about Invisalign treatments, from your first consultation to the final result.',
            content: '<p>Invisalign offers a modern approach to straightening teeth with virtually invisible aligners...</p>',
            published_at: '2026-01-10',
            author: authorName,
            category: 'Orthodontics',
            featured_image: 'assets/team/dentist-1.jpg'
        },
        {
            id: 'demo-3',
            slug: 'demo-3',
            title: 'Tips for Optimal Oral Health',
            excerpt: 'Practical tips and advice from our dentists for a healthy mouth and a radiant smile.',
            content: '<p>Good oral care starts at home. Here are our top recommendations...</p>',
            published_at: '2026-01-05',
            author: authorName,
            category: 'Prevention',
            featured_image: 'assets/team/dentist-1.jpg'
        }
    ];
}

function getDemoBlogDetail(slug) {
    const demoBlogs = getDemoBlogs();
    return demoBlogs.find(blog => blog.slug === slug || blog.id === slug);
}

// ================================
// SUPABASE REALTIME
// ================================

let realtimeChannel = null;

function setupRealtimeUpdates() {
    if (!supabaseClient) return;
    
    // Subscribe to changes on the blog_posts table
    realtimeChannel = supabaseClient
        .channel('blog-changes')
        .on(
            'postgres_changes',
            {
                event: '*', // Listen to all events (INSERT, UPDATE, DELETE)
                schema: 'public',
                table: BLOG_TABLE_NAME
            },
            (payload) => {
                console.log('Blog update received:', payload.eventType);
                handleRealtimeUpdate(payload);
            }
        )
        .subscribe((status) => {
            if (status === 'SUBSCRIBED') {
                console.log('Realtime connected - nieuwe blogs verschijnen automatisch!');
            }
        });
}

function handleRealtimeUpdate(payload) {
    const { eventType, new: newRecord, old: oldRecord } = payload;
    
    // Only act if we're on the blog list page
    const gridEl = document.getElementById('blogGrid');
    if (!gridEl) return;
    
    if (eventType === 'INSERT' && newRecord.published) {
        // New blog post added - add it to the top of the list
        addNewBlogCard(newRecord);
        showNewBlogNotification(newRecord.title);
    } else if (eventType === 'UPDATE') {
        // Blog post updated - refresh the card
        updateBlogCard(newRecord);
    } else if (eventType === 'DELETE') {
        // Blog post deleted - remove the card
        removeBlogCard(oldRecord);
    }
}

function addNewBlogCard(blog) {
    const gridEl = document.getElementById('blogGrid');
    const sectionEl = document.getElementById('blogSection');
    const emptyEl = document.getElementById('blogEmpty');
    
    if (!gridEl) return;
    
    // Hide empty state if visible
    if (emptyEl) emptyEl.style.display = 'none';
    if (sectionEl) sectionEl.style.display = 'block';
    
    // Create new card HTML
    const cardHtml = createBlogCard(blog);
    
    // Insert at the beginning with animation
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = cardHtml;
    const newCard = tempDiv.firstElementChild;
    
    // Add highlight effect for new posts
    newCard.style.boxShadow = '0 0 30px rgba(166, 138, 100, 0.4)';
    newCard.style.transform = 'scale(1.02)';
    
    gridEl.insertBefore(newCard, gridEl.firstChild);
    
    // Animate in
    setTimeout(() => {
        newCard.style.opacity = '1';
        newCard.style.transform = 'translateY(0) scale(1)';
    }, 50);
    
    // Remove highlight after a few seconds
    setTimeout(() => {
        newCard.style.boxShadow = '';
    }, 3000);
}

function updateBlogCard(blog) {
    const slug = blog.slug || blog.id;
    const existingCard = document.querySelector(`a[href*="slug=${slug}"]`);
    
    if (existingCard) {
        const cardEl = existingCard.closest('.blog-card');
        if (cardEl) {
            // Replace with updated content
            cardEl.outerHTML = createBlogCard(blog);
        }
    }
}

function removeBlogCard(blog) {
    const slug = blog.slug || blog.id;
    const existingCard = document.querySelector(`a[href*="slug=${slug}"]`);
    
    if (existingCard) {
        const cardEl = existingCard.closest('.blog-card');
        if (cardEl) {
            cardEl.style.opacity = '0';
            cardEl.style.transform = 'scale(0.8)';
            setTimeout(() => cardEl.remove(), 300);
        }
    }
}

function showNewBlogNotification(title) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'blog-notification';
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-icon">✨</span>
            <span class="notification-text">Nieuw artikel: ${title}</span>
        </div>
    `;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
        color: #fff;
        padding: 16px 24px;
        border-radius: 12px;
        box-shadow: 0 10px 40px rgba(0,0,0,0.3);
        z-index: 10000;
        display: flex;
        align-items: center;
        gap: 12px;
        font-family: inherit;
        font-size: 14px;
        transform: translateX(400px);
        opacity: 0;
        transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        border-left: 4px solid #a68a64;
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
        notification.style.opacity = '1';
    }, 100);
    
    // Remove after 5 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
        notification.style.opacity = '0';
        setTimeout(() => notification.remove(), 400);
    }, 5000);
}

// Clean up realtime subscription when leaving page
window.addEventListener('beforeunload', () => {
    if (realtimeChannel) {
        supabaseClient.removeChannel(realtimeChannel);
    }
});

// ================================
// SHARE FUNCTIONS
// ================================

function shareVia(platform) {
    const currentUrl = window.location.href;
    const pageTitle = document.title;
    const siteName = (window.SITE_CONFIG && window.SITE_CONFIG.business) ? window.SITE_CONFIG.business.name : 'Our Dental Blog';
    const description = document.querySelector('meta[name="description"]')?.content || `Read this article from ${siteName}`;
    
    let shareUrl = '';
    
    switch(platform) {
        case 'whatsapp':
            // WhatsApp share - combine title and URL into one text parameter
            const whatsappText = encodeURIComponent(`${pageTitle}\n\n${currentUrl}`);
            shareUrl = `https://wa.me/?text=${whatsappText}`;
            break;
        case 'facebook':
            shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
            break;
        case 'twitter':
            shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(pageTitle)}`;
            break;
        case 'linkedin':
            shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`;
            break;
        case 'email':
            shareUrl = `mailto:?subject=${encodeURIComponent(pageTitle)}&body=${encodeURIComponent(description + '\n\n' + currentUrl)}`;
            window.location.href = shareUrl;
            return;
        default:
            console.error('Unknown share platform:', platform);
            return;
    }
    
    // Open share window
    window.open(shareUrl, '_blank', 'width=600,height=500,menubar=no,toolbar=no,resizable=yes,scrollbars=yes');
}

function copyPageLink(button) {
    const url = window.location.href;
    
    // Try modern clipboard API first
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(url)
            .then(() => {
                showCopySuccess(button);
            })
            .catch(err => {
                // Fallback to older method
                fallbackCopyTextToClipboard(url, button);
            });
    } else {
        // Fallback for older browsers
        fallbackCopyTextToClipboard(url, button);
    }
}

function fallbackCopyTextToClipboard(text, button) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    
    // Avoid scrolling to bottom
    textArea.style.top = '0';
    textArea.style.left = '0';
    textArea.style.position = 'fixed';
    textArea.style.opacity = '0';
    
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    try {
        const successful = document.execCommand('copy');
        if (successful) {
            showCopySuccess(button);
        } else {
            showCopyError(button);
        }
    } catch (err) {
        showCopyError(button);
    }
    
    document.body.removeChild(textArea);
}

function showCopySuccess(button) {
    const originalText = button.innerHTML;
    button.innerHTML = `
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
        </svg>
        Gekopieerd!
    `;
    button.style.background = '#10b981';
    button.style.color = '#fff';
    
    setTimeout(() => {
        button.innerHTML = originalText;
        button.style.background = '';
        button.style.color = '';
    }, 2000);
}

function showCopyError(button) {
    const originalText = button.innerHTML;
    button.innerHTML = `
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
        </svg>
        Fout
    `;
    button.style.background = '#ef4444';
    button.style.color = '#fff';
    
    setTimeout(() => {
        button.innerHTML = originalText;
        button.style.background = '';
        button.style.color = '';
    }, 2000);
}

// ================================
// INITIALIZATION
// ================================

document.addEventListener('DOMContentLoaded', () => {
    // Check which page we're on and load accordingly
    if (document.getElementById('blogGrid')) {
        fetchBlogs().then(() => {
            // Setup realtime updates after initial load
            setupRealtimeUpdates();
        });
    } else if (document.getElementById('blogDetail')) {
        fetchBlogDetail();
    }
});
