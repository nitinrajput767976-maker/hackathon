import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import dotenv from 'dotenv';
import { handleCampusPulseApi } from './server/apiMiddleware';

// Load server environment variables from .env
dotenv.config();

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'campus-pulse-api-server',
      configureServer(server) {
        server.middlewares.use(async (req, res, next) => {
          if (req.url && req.url.startsWith('/api')) {
            try {
              const handled = await handleCampusPulseApi(req, res);
              if (handled) return;
            } catch (err) {
              console.error('API middleware error:', err);
              res.statusCode = 500;
              res.end(JSON.stringify({ error: 'Internal Server Error' }));
              return;
            }
          }
          next();
        });
      }
    }
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  server: {
    port: 5173,
    host: true
  }
});
