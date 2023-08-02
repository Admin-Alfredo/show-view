var Access = require('access');
var path = require('path');
var fs = require('fs');
let access = null;
module.exports = (app) =>{
	var config = app.libs.config.database;
	
	if(!access)
		access = new Access(config);
	
	var db = {access, models:{}};
	
	var dir = path.join(__dirname,"models");
	fs.readdirSync(dir).forEach(file =>{
		
		var modalDir = path.join(dir, file);
		var modal = access.loadModel(modalDir);
		
		db.models[modal.name] = modal;
	})
	
	return db;
}








