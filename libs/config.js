var bcrypt = require('bcrypt');
var mysql = require('mysql');
module.exports = {
	database:{
		db: "showview",
		user:"root",
		password:"",
		host:"localhost"
	},
	auth:{
		jwtSecret:"ShowView/authe-nticate$1742adimin"
	},
	arrayGroups: function(num, array){
		var index = 0;
		var formalArray = [];
		var elArray = [];
		for(i=0;i<array.length+num;i++){
		   if(index === num){
			   formalArray.push(elArray);
			   elArray = [];
			   index = 0;
		   }
			if(array[i] !== undefined) elArray.push(array[i]);
			index++;
		}
		return formalArray;
	},
	isPassword: function(inserida, contida){
		if(inserida === contida){
			return true;
		}else{
			return false;
		}
	},
	serializeSQL :function(sql, array){
		query = mysql.format(sql,array);
		return query;
	}
}