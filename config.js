/**
 * =====================================================
 * 🌹 WEDDING INVITE CONFIG FILE
 * =====================================================
 * Yahan apni saari details edit karein.
 * Phir index.html mein <script> ke andar CONFIG object
 * ko in values se replace karein.
 *
 * HOW TO USE:
 * 1. Neeche apni details bharo
 * 2. index.html ka CONFIG object update karo
 * 3. Vercel par deploy karo (bilkul free!)
 * =====================================================
 */

const WEDDING_CONFIG = {

  // =============================================
  // 👫 COUPLE KE NAAM — Yahan apne naam likhein
  // =============================================
  groomName:     "Ali",           // ← Dulha ka naam
  brideName:     "Ayesha",        // ← Dulhan ka naam
  coupleName:    "Ali & Ayesha",  // ← Dono ka naam saath

  // =============================================
  // 📅 WEDDING DATE — ISO format mein
  // Format: "YYYY-MM-DDTHH:MM:SS"
  // =============================================
  weddingDate:   "2025-12-15T16:00:00",

  // =============================================
  // 📍 MAIN VENUE
  // =============================================
  mainVenue:     "Pearl Continental Hotel, Lahore",
  city:          "Lahore, Pakistan",

  // =============================================
  // 🎵 BACKGROUND MUSIC
  // Kisi bhi free music hosting se MP3 URL daalen
  // Suggested: archive.org, cloudinary, Firebase Storage
  // =============================================
  musicSrc:      "",              // ← MP3 URL yahan
  musicLabel:    "♪ Our Song",   // ← Song ka naam

  // =============================================
  // 📸 HERO BACKGROUND PHOTO
  // Couple ki photo ki URL (min 1600px wide)
  // =============================================
  heroBgPhoto:   "https://images.unsplash.com/photo-1519741497674-611481863552?w=1600&auto=format&fit=crop",

  // =============================================
  // 📸 GALLERY IMAGES
  // Har photo ki URL aur uska category daalen
  // Categories: "engagement" | "nikkah" | "highlights"
  // =============================================
  galleryPhotos: [
    { url: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=600", category: "engagement", alt: "Engagement" },
    { url: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600", category: "nikkah",     alt: "Nikkah" },
    { url: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600", category: "highlights", alt: "Highlights" },
    // ← Apni photos add karo is pattern mein
  ],

  // =============================================
  // 📅 EVENTS — Har taqreeb ki details
  // =============================================
  events: [
    {
      name:     "Nikkah Ceremony",
      nameUrdu: "نکاح",
      icon:     "🕌",
      date:     "Friday, December 13, 2025",
      time:     "11:00 AM — After Zuhr Prayer",
      venue:    "Masjid Al-Noor, Model Town, Lahore",
      dressCode:"Traditional White & Green",
      isoDate:  "2025-12-13T11:00:00",
    },
    {
      name:     "Baraat",
      nameUrdu: "بارات",
      icon:     "🎊",
      date:     "Saturday, December 14, 2025",
      time:     "7:00 PM — Late Evening",
      venue:    "Pearl Continental Hotel, Mall Road, Lahore",
      dressCode:"Formal Sherwani / Gown",
      isoDate:  "2025-12-14T19:00:00",
    },
    {
      name:     "Walima Reception",
      nameUrdu: "ولیمہ",
      icon:     "🌹",
      date:     "Monday, December 15, 2025",
      time:     "4:00 PM — Dinner",
      venue:    "Pearl Continental Hotel, Mall Road, Lahore",
      dressCode:"Elegant Semi-Formal",
      isoDate:  "2025-12-15T16:00:00",
    }
  ],

  // =============================================
  // 🗺️ GOOGLE MAPS EMBED URL
  // maps.google.com par apna venue search karo,
  // "Share > Embed a map" se iframe src URL copy karo
  // =============================================
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3400.2!2d74.3436!3d31.5204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919047ab91c09ab%3A0x74715b3fcf30d6e0!2sPearl%20Continental%20Hotel%2C%20Lahore!5e0!3m2!1sen!2s!4v1234567890",

  // =============================================
  // 📱 WHATSAPP SHARE MESSAGE
  // =============================================
  whatsappMsg: "💍 Ali & Ayesha ki shaadi mein aap sab ko khush aamdeed!\n\nDekhein hamare wedding invite ka jadoo 👇\n",

  // =============================================
  // 📝 RSVP DEADLINE
  // =============================================
  rsvpDeadline: "December 1st, 2025",

  // =============================================
  // 🌐 FORMSPREE ID (RSVP emails ke liye)
  // 1. formspree.io par free account banao
  // 2. Naya form create karo
  // 3. Form ID (jaise "xrgvkpno") yahan daalo
  // =============================================
  formspreeId: "",  // ← "xYourFormID" yahan

};

// =============================================
// 📦 VERCEL DEPLOYMENT GUIDE
// =============================================
/*
VERCEL PAR FREE DEPLOY KAISE KAREIN:

1. GitHub par account banao (github.com)
2. Naya repository banao (+ New Repository)
3. Is folder ki saari files upload karo:
   - index.html
   - config.js
   - vercel.json
4. vercel.com par jaao, GitHub se login karo
5. "New Project" → Apna repo select karo
6. "Deploy" click karo — bas itna!
7. Aapko milegi ek link jaise:
   https://ali-ayesha.vercel.app

CUSTOM DOMAIN (Optional):
- Vercel dashboard → Settings → Domains
- "ali-ayesha-wedding.com" jaise kuch lelo
- Domain connect karein — bilkul free!

UPDATES KAISE KAREIN:
- GitHub par file edit karo → Save
- Vercel automatically redeploy kar dega!
*/
