const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(__dirname + '/dist/tarik-uzun-official'));
app.get('/*', function(req,res) {
  res.sendFile(path.join(__dirname+
    '/dist/tarik-uzun-official/index.html'));});
app.listen(process.env.PORT || 8080);