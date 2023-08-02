var bodyParser = require('body-parser');
var path = require('path');
var cors = require('cors');
var util = require('util');

module.exports = (app)=>{
	var express = app.express;
	var auth = app.authenticate;
	
	app.set('port', 3000);
	app.set('views','./views');
	app.set('view engine','ejs');
	
	app.set('json spaces',4);
	
	app.use(cors({
		origin:['http://localhost:3000','http://localhost:1000'],
		methods:['GET','POST','PUT', 'DELETE'],
		allowedHeaders:['Content-Type','authorization']
	}))
	app.use(bodyParser.json())
	
	app.use(auth.init());
	app.use(express.static('./public'))
}