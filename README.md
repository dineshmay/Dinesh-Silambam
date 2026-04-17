# ⚔ Silambam Coach Portfolio
Full-stack portfolio — React + Vite frontend, Node.js + Express backend.

---

## 📁 Project Structure

```
silambam/
├── client/                  ← React (Vite) — source code
│   ├── src/components/      ← One component + CSS module per section
│   ├── vite.config.js       ← Builds into server/public automatically
│   └── package.json
│
└── server/                  ← Node.js (Express) — runs everything
    ├── index.js             ← API routes + serves React in production
    ├── public/              ← React build output (auto-generated)
    ├── .env.example         ← Copy to .env and fill in
    └── package.json
```

---

## 🚀 Two Ways to Run

### Mode 1 — Development (two terminals, hot reload)

```bash
# Terminal 1 — Backend
cd server
npm install
cp .env.example .env    # fill in email + set NODE_ENV=development
npm run dev             # http://localhost:5000

# Terminal 2 — Frontend
cd client
npm install
npm run dev             # http://localhost:5173  ← open this
```

Vite proxies `/api/*` to Express automatically. Edit React files and see changes instantly.

---

### Mode 2 — Production (single server, one port) ✅ MERGED

```bash
cd server
npm install
cp .env.example .env    # fill in email + set NODE_ENV=production

# Build React and start everything on one port
npm run setup           # installs client deps + builds React into server/public

npm start               # http://localhost:5000  ← open this
```

That's it. One terminal, one port, one URL. Express serves the React app AND handles `/api/contact`.

**When you change React code later, rebuild with:**
```bash
cd server
npm run build   # rebuilds client and copies into server/public
npm start
```

---

## ⚙ Environment Variables (server/.env)

```env
EMAIL_USER=your_gmail@gmail.com
EMAIL_PASS=your_gmail_app_password
EMAIL_TO=your_gmail@gmail.com
PORT=5000
NODE_ENV=production
```

> **Gmail App Password:**
> myaccount.google.com → Security → 2-Step Verification → App Passwords → Mail

---

## ✏ Personalise Your Content

| File | What to update |
|------|----------------|
| `client/src/components/Hero.jsx` | Your name |
| `client/src/components/About.jsx` | Credentials, guru, school |
| `client/src/components/Tournaments.jsx` | Real tournament records |
| `client/src/components/Students.jsx` | Real student stories |
| `client/src/components/Contact.jsx` | WA_NUMBER, IG_HANDLE |
| `client/src/components/SocialBar.jsx` | WA_NUMBER, IG_HANDLE |
| `client/src/components/Footer.jsx` | Your name |

After editing, rebuild: `cd server && npm run build && npm start`

---

## ✅ Feature Checklist

| Feature | Status |
|---------|--------|
| React component architecture | ✅ |
| CSS Modules (scoped styles) | ✅ |
| Node.js + Express backend | ✅ |
| Contact form → Gmail via Nodemailer | ✅ |
| Auto-reply email to enquirer | ✅ |
| WhatsApp + Instagram bottom bar | ✅ |
| Video upload & play | ✅ |
| Mobile responsive | ✅ |
| Single server production mode | ✅ |

---

## 🌐 Deploy Free Online

Push the whole project to GitHub, then:

**Backend + Frontend → [Render.com](https://render.com) (free)**
- Create a Web Service → connect your repo
- Root directory: `server`
- Build command: `npm run setup`
- Start command: `npm start`
- Add environment variables from `.env`

Your site will be live at `https://your-app.onrender.com` 🎉
