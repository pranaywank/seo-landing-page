# SEO Automation Tool Landing Page

This is the Next.js 14 waitlist/early-access landing page for the SEO Automation Tool by Wednesday Solution. It is built using the App Router, customized vanilla CSS (no Tailwind), and Resend for confirmation emails.

## Tech Stack
- **Framework:** Next.js 14 (App Router, TypeScript)
- **Styling:** Custom CSS (`app/globals.css`) matching the wednesday.is aesthetic
- **Email:** Resend
- **Icons:** Lucide React
- **Deployment:** Vercel

## Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd seo-automation-landing
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   - Copy the placeholder environment template:
     ```bash
     cp .env.local.example .env.local
     ```
   - Open `.env.local` and substitute your generated keys explicitly:
     - `RESEND_API_KEY`: Your key from the Resend console (e.g., `re_123456789`).
     - `RESEND_FROM_EMAIL`: The verified sender address (e.g., `hello@yourdomain.com`).
     - `NOTIFY_EMAIL`: An optional internal email to get notified of every new signup (e.g., `pranay@wednesday.is`).

4. **Run the development server locally:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to view the page.

5. **Deployment:**
   - Push your code to GitHub.
   - Connect the repository to Vercel.
   - In the Vercel project settings, explicitly add the environment variables (`RESEND_API_KEY`, `RESEND_FROM_EMAIL`, `NOTIFY_EMAIL`).
   - The default Next.js build commands (`npm run build` and `npm run start`) will work out of the box with Vercel.
