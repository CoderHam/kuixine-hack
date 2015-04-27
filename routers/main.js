var mongojs = require ("mongojs");
var express = require("express");

var connecturl = "kuixine" ;

var db = mongojs(connecturl,['dishes','users']);

var search = require("../core/search.js")(db);
var subpost = require("../core/atd.js")(db);
var pred = require ("../core/predsearch.js")(db);
var router = express.Router() ; 


router.get('/',function(req,res,next){
    res.render('index',{});
});

router.get('/search',search)
router.get('/add',function(req,res,next)
{
 res.render('submit',{});
})

router.post('/add',subpost);
router.get('/pred',pred);

module.exports = router ; 