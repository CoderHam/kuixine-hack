module.exports = function (db)
{
 return function(req,res,next)
 { 
  var query = req.query.s ; 
  db.dishes.find( { $text : {$search : query}},{ _id : 0 }, function(err,docs)
  {
   if(err)
   console.log(err);
   else
   res.writeHead(200,{'content-type':'text/plain'});
   docs = JSON.stringify(docs);
   res.write(docs);
   res.end();
  })  ;
 } 
}