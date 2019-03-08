const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname, '..', 'public');
const port = process.env.PORT || 3000; // Heroku gives you a dynamic port

app.use(express.static(publicPath));

// req is for the request and respone we need to send back
// sends all the requests to index.html where our router takes care of it
app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});
app.listen(port, () => {
  console.log('Server is up!');
});