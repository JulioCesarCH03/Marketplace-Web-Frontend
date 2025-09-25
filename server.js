// server.js
const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 5173;

app.use(express.static(path.join(__dirname, 'dist')));

// ✅ CORREGIDO: Usa una ruta válida para SPA
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`✅ Frontend corriendo en puerto ${PORT}`);
});