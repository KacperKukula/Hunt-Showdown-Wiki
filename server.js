const port = 2115
var express = require('express');

var app = express();

app.use(express.static('./public'));

app.set("view engine", "ejs")

app.get('/', (req, res) => {

    res.render('index.ejs')
})

app.listen(port)