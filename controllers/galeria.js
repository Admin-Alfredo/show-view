var formidable = require('formidable');
var fs = require('fs');
var util = require('util');
var multer = require('multer')
var jwt = require('jwt-simple');
module.exports = (app)=>{
	var jwtSecret = app.libs.config.auth.jwtSecret;
	return {
		eventos:(req, res)=>{
			var form = formidable.IncomingForm();
			form.parse(req, (err, fields, files)=>{
				console.log(util.inspect({fields,files}));
				/**if(files.imgMin){
					res.send({fields,files})
				}else{
					res.status(412).json({msg:"anexas as imagens."})
				}*/
				res.redirect('/conta?vskey='+jwt.encode({id:req.params.idUser}, jwtSecret))
			})
		},
		usuario:(req, res)=>{
			var form = formidable.IncomingForm();
			form.parse(req, (err, fields, files)=>{
				
			})
		}
	}
}