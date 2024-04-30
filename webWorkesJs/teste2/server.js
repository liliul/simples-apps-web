const express = require('express');
const port = 8888;

const app = express();
app.use(express.static(__dirname + '/'));

app.listen(`${port}`);
console.log('http://localhost:', + port);
