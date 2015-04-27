var express = require("express");
var bodyParser = require("body-parser");
var mainRouter = require("./routers/main.js");

app = express() ; 


app.set('view engine', 'ejs')
app.set('views','./pages')
app.use(express.static('./public'));
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended : true}));

app.use('/',mainRouter)

app.listen(8888);
console.log('server listening on 8888');