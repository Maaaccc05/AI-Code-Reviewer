// require('dotenv').config()
// const app = require('./src/app')

// app.listen(3000, () => {
//     console.log("Server is running on port http://localhost:3000")
// })
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = require('./src/app');  // Make sure app.js exports the app instance

// Apply middleware here
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:3000`);
});
