module.exports = function(db)
{ 
 return function(req,res,next)
 {
  var query = req.query.s ; 
  db.dishes.find( { $text : {$search : query}},{ _id : 0 }, function(err,docs)
  {
   if(err)
    console.log(err);
	else
	filter(docs,res);
  });
 }
}


function filter(docs,res)
 {
    var send = "" ; 
   for( var i = 0 ; i < docs.length ; i++)
   {
    send += "<p class = 'predp'>" + docs[i].name + "</p> </br>" 
   }
   res.writeHead(200,{'content-type' : 'text/html'});
   res.write(send);
   res.send();
 }
