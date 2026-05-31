# Swapnosiri Builders Ltd. (SBL) — Luxury Real Estate Portal

A premium, state-of-the-art web portal engineered for **Swapnosiri Builders Ltd. (SBL)**, representing the peak of modern architectural digital presence. 

Designed with a high-end luxury aesthetic tailored for premium developers (inspired by *Sobha Realty*, *Emaar*, and *DAMAC*), this Next.js application delivers an immersive, high-fidelity experience to prospective buyers of ultra-luxury residences.

---

## ✨ Architectural Features & Design Philosophy

*   **Luxury Monochromatic Visual Theme:** A crafted `radial-gradient` that layers absolute luxury black (`#050505`), architectural charcoal (`#1a1a1a`), and sophisticated ash grey (`#787878`) with warm, rich Gold (`#D4AF37`) accents.
*   **Modern Premium Typography:** Utilizes **Fira Sans** as the unified font family to bring a clean, technical, yet elegant build-blueprint atmosphere to the copy.
*   **Interactive Blueprint Grid Texture:** Backdrops embedded with an interactive, subtle grid lines pattern (`opacity: 0.03`) evoking architectural building plans and building plans.
*   **Dynamic Cinematic Hero Slider:** An advanced image slider with progressive, ultra-smooth scaling micro-animations (slow zoom scale `1` &rarr; `1.08` over 30s) to captivate visitors instantly.
*   **Instant Admin Notification System:** Secure SMTP nodemailer integration that forwards high-end buyer inquiry forms directly to Hostinger mail (`info@swapnosiribuilders.com`) and CCs `sshahbuddin@gmail.com` with a luxurious, responsive email layout.
*   **Premium Interactive Portfolios:** Responsive showcase layout with smooth filtering transitions for projects (Ongoing, Upcoming, Completed).

---

## 🛠️ Technology Stack

*   **Framework:** [Next.js (App Router)](https://nextjs.org/) for high-performance server-side rendering and routing.
*   **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) utilizing absolute CSS variables for fluid design control.
*   **Animations:** [Framer Motion](https://www.framer.com/motion/) for premium, lag-free hardware-accelerated animations.
*   **Mailing:** [Nodemailer](https://nodemailer.com/) with custom HTML luxury mail templating.
*   **Icons:** [Lucide React](https://lucide.dev/) for precise developer iconography.

---

## 🚀 Getting Started

### 📋 Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed (v18.x or later recommended).

### ⚙️ Environment Variables Setup

For security, API keys and SMTP credentials have been abstracted out of the code. 
1. Create a `.env.local` file in the root directory.
2. Copy the template from `.env.example`:
   ```bash
   cp .env.example .env.local
   ```
3. Update `.env.local` with your secure credentials:
   ```env
   SMTP_HOST=smtp.hostinger.com
   SMTP_PORT=465
   SMTP_USER=info@swapnosiribuilders.com
   SMTP_PASS=your_actual_password_here
   SMTP_CC=sshahbuddin@gmail.com
   ```

### 💻 Running Locally

1. Install dependencies:
   ```bash
   npm install
   ```
2. Launch the development server:
   ```bash
   npm run dev
   ```
3. Open [http://localhost:3000](http://localhost:3000) (or the port shown in terminal) to view the portal.

### 🏗️ Build and Deployment

To construct the optimized production bundle:
```bash
npm run build
npm run start
```
Ready to deploy seamlessly on platforms like **Vercel** or **Hostinger Node App Hosting**.

---

*Engineered with precision for Swapnosiri Builders Ltd. &copy; 2026. All Rights Reserved.*
