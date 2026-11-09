# 🌸 Shubh Vivah | Saurav & Saumya — Royal Wedding Invitation

> **Devbhoomi Uttarakhand Sacred Heritage**  
> Saurav Singh Bisht (Son of Smt. Anita Bisht & Shri Rajinder Singh Bisht)  
> *weds*  
> Saumya Latwal (Daughter of Smt. Tara Devi & Shri Anand Singh Latwal)  

---

## 🏛️ Architectural Overview

An ultra-luxurious, state-of-the-art interactive digital wedding invitation web application featuring:
- **3D Royal Welcome Gate (Apple 120Hz Feel)**: Dual swinging carved palace doors with swallowtail silk ribbon, 3D wax seal latch, and sacred Vedic invocations (`॥ श्री गणेशाय नमः ॥`, `॥ मां नंदा देवी प्रसन्न ॥`).
- **Interactive Gold Foil Scratch Card**: Real-time `<canvas>` foil scratch-to-reveal engine with touch/mouse physics, sparkle dust particles, and auto-burst confetti unveil of the Shubh Muhurat.
- **Digital Security Guardian & Anti-Tamper Shield**:
  - Right-click context menu protection + branded golden toast notifications.
  - Developer inspection keyboard locks (F12, Ctrl+Shift+I/J/C, Ctrl+U, Ctrl+S).
  - Anti-drag and image protection.
  - Comprehensive HTTP Security headers via `vercel.json` (CSP, HSTS, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy).
- **Background Shehnai Audio Engine**: Smooth volume transitions, equalizer wave visualizer, fixed floating music controls, and intelligent auto-pause on screen lock / visibility change with resume on return.
- **120 FPS Ambient Petals & Confetti Engine**: GPU-accelerated falling rose and saffron marigold blossom drifts.
- **Calendar & Navigation Suite**:
  - 1-Click Google Calendar synchronization.
  - Dynamic RFC 5545 Apple Calendar (`.ics`) file generator for iPhone / Mac.
  - Interactive Google Maps embeds and 1-touch GPS navigation.
  - WhatsApp RSVP integration for Bisht & Latwal Parivar.

---

## 🚀 Local Development

To run locally:
1. Double click `run_card.bat`, or
2. Run in terminal:
   ```bash
   python -m http.server 8088
   ```
   and navigate to `http://localhost:8088`.

---

## 🌐 Deployment to Vercel

- **Live Production URL**: [https://marriage-invitation-mu-weld.vercel.app](https://marriage-invitation-mu-weld.vercel.app)
- **GitHub Repository**: [https://github.com/BishtNikhil/marriage-invitation](https://github.com/BishtNikhil/marriage-invitation)

To redeploy or update manually:
```bash
npx vercel --prod
```

