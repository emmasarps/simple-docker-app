const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = 3000;

// Connect to MongoDB
mongoose.connect('mongodb://mongo:27017/mydatabase');

app.get('/', (req, res) => {
  res.send('Hello, Docker + MongoDB! 🚀');
});

// Export app (so tests can import it)
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

module.exports = app;  // ✅ Now Supertest can use it


