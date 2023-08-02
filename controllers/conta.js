module.exports = (app) => {
	var eventos = app.db.models.Eventos;
	var usuarios = app.db.models.Usuarios;
	return (req, res)=>{
		
		usuarios.findById(req.user.id)
			.then(usuario =>{
				console.log(usuario)
				//=======USUARIO==========
				eventos.findOne({realizador: usuario.idUser})
					.then(eventos =>{
						//======EVENTOS DO USUARIO======
						res.render('conta',{
							title:"VShow",
							subtitle:"conta",
							realizador:usuario,
							eventos
						})
					}).catch(err =>{throw err;})
			}).catch(err =>{throw err;})
	}
}