var jwt = require("jwt-simple");
module.exports = (app)=>{
	var jwtSecret = app.libs.config.auth.jwtSecret;
	var usuarios = app.db.models.Usuarios;
	var isPassword = app.libs.config.isPassword;
	
	app.post('/token', (req, res)=>{
		
		if(req.body.email && req.body.password){
			var email = req.body.email;
			var password = req.body.password;
			usuarios.findOne({email})
				.then(usuario =>{
					if(isPassword(password, usuario[0].password)){
						
						var payload = {id:usuario[0].idUser}
						var token = jwt.encode(payload, jwtSecret);
						res.json({token});
						
					}else{
						res.status(401).json({msg:"Não autenticado."})
					}
					
				}).catch(err =>{
					res.status(401).json({msg:"Não autenticado."})
				})
		}else{
			res.status(401).json({msg:"Não autenticado."});
		}
	})
}