# Elegant Landscapes - Professional Website

A high-end, professional website built for **Elegant Landscapes**. This project features a modern, responsive design with a focus on landscaping, paving, and garden maintenance services.

## Features

- **Professional Aesthetic**: Custom-themed with Playfair Display and Lato fonts, deep forest greens, and gold accents.
- **Dynamic Gallery**: Automatically updates when images are added to the `public/gallery` folder (requires server-side execution).
- **WhatsApp Quote System**: Integrated quote generator that formats project details and redirects users to WhatsApp for instant communication.
- **Event & Catering Page**: Showcases specialized garden event services.
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop viewing.
- **Full-Stack Ready**: Includes an Express backend to handle dynamic file serving and API requests.

## Project Structure

- `src/pages/`: Contains the main page components (Home, Gallery, Catering, Quote).
- `src/components/`: Reusable UI elements like the Navbar and Footer.
- `src/constants.ts`: Central location for business details, service descriptions, and static gallery data.
- `server.ts`: Express server that handles API routes and serves the Vite application.
- `public/gallery/`: Drop your project photos here to have them appear in the gallery automatically.

## Setup & Installation

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Development Mode**:
   ```bash
   npm run dev
   ```

3. **Production Build**:
   ```bash
   npm run build
   ```

4. **Start Production Server**:
   ```bash
   npm start
   ```

## Dynamic Gallery Instructions

To add new images to your gallery without editing code:
1. Place your `.jpg`, `.png`, or `.webp` images into the `/public/gallery` directory.
2. If running the server (`npm run dev` or `npm start`), the website will automatically detect these new files and display them in the "Recent Projects" section of the Gallery page.

## Deployment Options

### GitHub Pages (Automated)
I have added a GitHub Action to your project. To use it:
1. Go to your GitHub repository **Settings > Pages**.
2. Under **Build and deployment > Source**, select **GitHub Actions**.
3. Every time you push to the `main` branch, your site will automatically build and deploy to `https://chasechancechange.github.io/Elagant_Landscapes/`.

### Home Server / Google Business
For a truly professional and "always-on" experience:
1. Host this project on a home computer or a VPS using `npm start`.
2. Use a service like **Cloudflare Tunnel** or **Ngrok** to point your domain to your local machine.
3. Link this domain to your **Google Business Profile**.

## Customization

- **Colors & Fonts**: Edit `src/index.css` under the `@theme` block.
- **Business Info**: Update `src/constants.ts` with your actual phone number, email, and address.
- **WhatsApp Number**: Ensure the `whatsapp` field in `src/constants.ts` is your full international number without the `+`.
