import express from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  // API Route for Dynamic Gallery
  app.get('/api/gallery', (req, res) => {
    const galleryPath = path.join(process.cwd(), 'public', 'gallery');
    
    // Ensure directory exists
    if (!fs.existsSync(galleryPath)) {
      fs.mkdirSync(galleryPath, { recursive: true });
    }

    try {
      const files = fs.readdirSync(galleryPath);
      const images = files
        .filter(file => /\.(jpg|jpeg|png|webp|gif)$/i.test(file))
        .map(file => ({
          url: `/gallery/${file}`,
          alt: file.replace(/\.[^/.]+$/, "").replace(/-/g, ' '),
          category: 'Recent Work'
        }));
      res.json(images);
    } catch (error) {
      console.error('Error reading gallery directory:', error);
      res.status(500).json({ error: 'Failed to read gallery' });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
