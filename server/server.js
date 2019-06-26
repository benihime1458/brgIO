const express = require('express');
const path = require('path');
const app = express();
const port = 8080;

app.use((req, res, next) => {
  console.log('from server app.use ', req.method, req.path);
  next();
});

// server static assets
app.use(express.static(path.join(__dirname, '../client/dist')));

// server connection
app.listen(port, () => console.log(`Listening on port ${port}!`));

