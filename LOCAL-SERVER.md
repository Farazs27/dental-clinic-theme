# Local Server - Mondzorg Sloterweg V1

## 🖥️ Local Access

The website is now running locally on your machine.

### Local URLs

- **Main URL**: http://localhost:8080
- **Alternative**: http://127.0.0.1:8080

### Direct Page Links

- **Homepage**: http://localhost:8080/index.html
- **Team Page**: http://localhost:8080/team.html
- **Behandelingen**: http://localhost:8080/behandelingen.html
- **Contact**: http://localhost:8080/contact.html
- **Inschrijven**: http://localhost:8080/inschrijven.html
- **Tarieven**: http://localhost:8080/tarieven.html
- **Smile Makeover**: http://localhost:8080/esthetische-analyse.html

## 📱 Network Access (Same Wi-Fi)

If you want to access from other devices on your local network:

**http://192.168.1.14:8080**

(Replace with your actual local IP if different)

## 🛑 To Stop the Server

Press `Ctrl+C` in the terminal, or run:
```bash
lsof -ti:8080 | xargs kill -9
```

## 🔄 To Restart the Server

```bash
cd "/Users/farazsharifi/MondzorgSloterweg New Website/v1"
python3 -m http.server 8080
```

---

**Status**: ✅ Running locally
**Port**: 8080
**Access**: Local only (no public internet access)

