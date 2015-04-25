module.exports = function(db)
{
 return function(req,res,next)
 { 
   req.body.price = parseInt(req.body.price,10);
   db.dishes.insert(req.body,function(err,docs)
   {
    if(err)
	 console.log(err);
   }) ;
   res.redirect('/add');
 }
}