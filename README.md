# Muhammad Mehboob — QA Engineer Portfolio

Premium portfolio site built with Eleventy (11ty) + Netlify CMS. 5 color themes, WhatsApp integration, contact form, CV section, and 5 service landing pages.

---

## 🚀 Deploy to Netlify in 5 Steps

### Step 1 — Push to GitHub
1. Create a new repo on GitHub (e.g. `mm-qa-portfolio`)
2. Open terminal in this folder and run:
```bash
git init
git add .
git commit -m "Initial portfolio build"
git branch -M main
git remote add origin https://github.com/mdmehboobdev/mm-qa-portfolio.git
git push -u origin main
```

### Step 2 — Connect to Netlify
1. Go to [netlify.com](https://netlify.com) and sign in
2. Click **"Add new site" → "Import an existing project"**
3. Choose **GitHub** and select your repo
4. Build settings are auto-detected from `netlify.toml`:
   - Build command: `npm run build`
   - Publish directory: `_site`
5. Click **"Deploy site"**

### Step 3 — Enable Netlify Forms
1. After first deploy, go to **Site → Forms**
2. Your contact form will appear automatically
3. Go to **Forms → Settings** to set up email notifications

### Step 4 — Enable Netlify CMS (to update content)
1. Go to **Site → Identity** → Enable Identity
2. Go to **Identity → Settings → Registration** → Set to **Invite only**
3. Go to **Identity → Settings → Git Gateway** → Enable Git Gateway
4. Invite yourself: **Identity → Invite users** → enter your email
5. Visit `yoursite.netlify.app/admin` and set your password
6. You can now update projects, skills, stats — no code needed!

### Step 5 — Custom domain (optional)
1. Go to **Site → Domain management → Add custom domain**
2. Follow Netlify's DNS instructions

---

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── index.njk              # Homepage
│   ├── thank-you.njk          # After form submit
│   ├── _includes/
│   │   ├── base.njk           # Main layout
│   │   └── service.njk        # Service page layout
│   ├── _data/
│   │   └── site.json          # ALL your content lives here
│   ├── services/
│   │   ├── manual-testing.njk
│   │   ├── automation-testing.njk
│   │   ├── api-testing.njk
│   │   ├── test-planning.njk
│   │   └── bug-reporting.njk
│   └── assets/
│       ├── css/style.css      # All styles + 5 themes
│       ├── js/main.js         # Theme switcher + form logic
│       └── images/            # photo.png, logo.jpg
├── admin/
│   ├── index.html             # CMS panel
│   └── config.yml             # CMS fields config
├── .eleventy.js               # Eleventy config
├── netlify.toml               # Netlify build config
└── package.json
```

---

## 🎨 Color Themes

The site has 5 themes users can switch between:
- 🔵 **Navy Blue** (default — matches your LinkedIn)
- 🟣 **Purple**
- 🟢 **Emerald**
- 🔴 **Crimson**
- 🟡 **Gold**

Theme choice is saved in localStorage.

---

## ✏️ Updating Content (Without CMS)

Edit `src/_data/site.json` to update:
- Your stats numbers
- Projects / case studies
- Skills and tools list
- Contact details

Then commit and push — Netlify auto-deploys in ~30 seconds.

---

## 📱 WhatsApp Integration

All WhatsApp links use: `https://wa.me/923355976655`

The contact form has a "Send via WhatsApp" button that pre-fills a message with the form data.

---

## 📄 CV

Replace `src/assets/Muhammad_Mehboob_QA_Resume.pdf` with your updated CV anytime.
Or upload a new one via Netlify CMS → Media.

---

Built with ❤️ — Muhammad Mehboob QA Engineer
