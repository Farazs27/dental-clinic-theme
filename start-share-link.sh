#!/bin/bash

echo "🚀 Starting share link tunnel..."
echo ""
echo "⏳ Please wait while we create your public link..."
echo ""

# Start cloudflared tunnel
npx --yes cloudflared tunnel --url http://localhost:8080 2>&1 | while IFS= read -r line; do
    echo "$line"
    
    # Extract the URL when it appears
    if echo "$line" | grep -q "trycloudflare.com"; then
        URL=$(echo "$line" | grep -oE 'https://[a-zA-Z0-9-]+\.trycloudflare\.com' | head -1)
        if [ ! -z "$URL" ]; then
            echo ""
            echo "✅ =========================================="
            echo "✅ YOUR SHARE LINK (NO PASSWORD NEEDED):"
            echo "✅ =========================================="
            echo "✅"
            echo "✅  $URL"
            echo "✅"
            echo "✅ =========================================="
            echo "✅"
            echo "✅ Share this link with your team!"
            echo "✅ Keep this terminal window open."
            echo "✅ Press Ctrl+C to stop the tunnel."
            echo ""
        fi
    fi
done

