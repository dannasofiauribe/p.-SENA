import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;
const HOST = '0.0.0.0';

const publicDir = path.join(__dirname, 'public');

// Serve static files from public directory
app.use(express.static(publicDir));

// Fallback compatibility for legacy "/p. SENA" references
app.use('/p.%20SENA', express.static(publicDir));
app.use('/p. SENA', express.static(publicDir));

// Explicit root route
app.get('/', (req, res) => {
  res.sendFile(path.join(publicDir, 'index.html'));
});

app.listen(PORT, HOST, () => {
  console.log(`Server running at http://${HOST}:${PORT}`);
});
