const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 5173;

app.use(express.static(path.join(__dirname, 'dist')));

app.get('/:any(*)', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`✅ Frontend corriendo en puerto ${PORT}`);
});