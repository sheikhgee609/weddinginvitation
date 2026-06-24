# 💍 Pakistani Wedding Invitation Website

**Ali & Ayesha** — A luxury, viral-worthy wedding invite built for Pakistani couples.

---

## ✨ Features

| Feature | Status |
|---|---|
| 🌸 Floating petal animation (Canvas) | ✅ |
| ⏱️ Live countdown timer | ✅ |
| 🎊 Confetti burst on load | ✅ |
| 📖 Scroll-triggered story timeline | ✅ |
| 🃏 3D hover tilt on timeline cards | ✅ |
| 📸 Masonry gallery with lightbox | ✅ |
| 🗂️ Gallery filter tabs (Engagement/Nikkah/Highlights) | ✅ |
| 🪟 Glassmorphism event cards | ✅ |
| 📆 Add to Google Calendar button | ✅ |
| 💌 Animated RSVP form with floating labels | ✅ |
| 🎊 RSVP success confetti animation | ✅ |
| 💾 RSVP data saved to localStorage | ✅ |
| 🎵 Vinyl record audio player | ✅ |
| ✨ Custom sparkle cursor (desktop) | ✅ |
| 🌀 Islamic geometric loader | ✅ |
| 📱 WhatsApp share button | ✅ |
| 🔗 Copy link button | ✅ |
| 📲 Mobile-first responsive | ✅ |
| 🔤 Urdu + English (Noto Nastaliq Urdu) | ✅ |
| 🔝 Blur navbar on scroll | ✅ |
| 🖼️ Parallax hero background | ✅ |
| 🎨 Gold + Ivory + Blush theme | ✅ |
| 🗺️ Google Maps embed | ✅ |
| 🔍 SEO meta tags + OG tags | ✅ |

---

## 📁 Folder Structure

```
wedding-invite/
├── index.html     ← Main website (saara code yahan hai)
├── config.js      ← Content reference file (comments mein guide)
├── vercel.json    ← Vercel deployment config
└── README.md      ← Yeh file
```

---

## ✏️ Content Edit Karna (index.html mein)

### 1. Couple Names
```html
<!-- Line ~280 ke qareeb -->
<h1 class="hero-names" id="heroNames">
  Ali          ← Apna naam
  <span class="hero-ampersand">&amp;</span>
  Ayesha       ← Dulhan ka naam
</h1>
```

### 2. Wedding Date (Countdown ke liye)
```javascript
// CONFIG object mein (~Line 530)
weddingDate: "2025-12-15T16:00:00",  ← Apni date
```

### 3. Hero Photo
```javascript
// heroBg div ki background-image, ya CONFIG mein
heroBgPhoto: "https://your-photo-url.jpg",
```

### 4. Music
```javascript
musicSrc: "https://your-cdn.com/song.mp3",
musicLabel: "♪ Meri Mehbooba",
```

### 5. Events
```html
<!-- ~Line 370-420 ke darmiyan -->
<!-- Har event-card mein naam, date, time, venue edit karein -->
```

### 6. Gallery Photos
```html
<!-- masonry div ke andar -->
<div class="masonry-item" data-category="engagement" onclick="openLightbox(this)">
  <img src="YOUR_PHOTO_URL" alt="Caption" loading="lazy" />
</div>
```

### 7. RSVP + Formspree
```javascript
// CONFIG mein
formspreeId: "xYourFormID",
// Phir submitRSVP() function mein uncomment karein Formspree section
```

### 8. Google Maps
```html
<!-- events section mein map-wrapper -->
<iframe src="YOUR_GOOGLE_MAPS_EMBED_URL" ...>
```

---

## 🚀 Vercel par Deploy Karna

### Step 1: GitHub
1. [github.com](https://github.com) par jaao
2. "New Repository" → `ali-ayesha-wedding`
3. Saari teen files upload karo (index.html, vercel.json, README)

### Step 2: Vercel
1. [vercel.com](https://vercel.com) → GitHub se login
2. "Add New Project" → Apna repo select karo
3. Settings chhodo jaise hain → **"Deploy"** click karo
4. 30 seconds mein live! 🎉

### Custom Domain (Optional — ~$10/year)
```
vercel.com → Your Project → Settings → Domains
ali-ayesha.com → Connect
```

---

## 📱 WhatsApp Share Customise Karna

```javascript
// CONFIG mein
whatsappMsg: "💍 Ali & Ayesha ki shaadi mein aap sab ko khush aamdeed!\nDekhein hamara invite 👇\n",
```

---

## 🎨 Colors Customise Karna

```css
/* CSS :root mein */
--gold:        #C9A84C;  /* ← Apna gold shade */
--blush:       #F2D0C0;  /* ← Apna blush shade */
--ivory:       #FAF6F0;  /* ← Background */
--deep:        #2C1A0E;  /* ← Dark sections */
```

---

## 🙏 Credits

- Fonts: Google Fonts (Playfair Display, Poppins, Noto Nastaliq Urdu)
- Photos: Unsplash (placeholder — apni photos replace karein)
- Maps: Google Maps Embed API (free)
- Hosting: Vercel (free tier)
- RSVP Storage: Browser localStorage + optional Formspree

---

*Made with ❤️ and دعا*
