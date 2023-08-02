var passport = require('passport');
var {Strategy, ExtractJwt} = require('passport-jwt');


module.exports = (app) =>{
	var jwtFromRequest = ExtractJwt.fromUrlQueryParameter('vskey');
	var secretOrKey = app.libs.config.auth.jwtSecret;
	//==============Usuario=========================
	var usuarios = app.db.models.Usuarios;
	
	var setting = {jwtFromRequest, secretOrKey};
	var strategy = new Strategy(setting, (payload, done)=>{
		
		usuarios.findById(payload.id)
			.then( usuario =>{
				//console.log(usuario)
				if(usuario){
					var id = usuario.idUser;
					var email = usuario.email;
					
					return done(null, {id,email})
				}
				done(null, false);
				
			}).catch((err)=>{
				return done(err, null);
			});
	})
	passport.use(strategy);
	
	return{
		init: ()=>{
			return passport.initialize();
		},
		auth:()=>{
			return passport.authenticate('jwt',{session: false});
		}
	}
}
