var mongoose = require("mongoose") ;

module.exports = function(db)
{
  return db.model('dishes',{
    name : String ,
	desc : String ,
	By : String ,
	location : String ,
	price : Number ,
	time : Date ,
	filters : [String]
  });
}