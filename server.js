const express = require('express');
const path = require('path');

app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './src/index.html'));
});

app.listen(PORT, () => {
    console.log('Started: ' + new Date())
    console.log('port: ' + PORT)
})
