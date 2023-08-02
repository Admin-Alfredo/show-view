module.exports = (app)=>{
	var eventos = app.db.models.Eventos;
	var usuario = app.db.models.Usuarios;
	return (req, res)=>{
		eventos.findById(req.params.id)
			.then((evento)=>{
				usuario.findById(evento.realizador)
					.then(realizador =>{
						res.render('comprar', {
						title:"VShow",
						subtitle:"compra",
						eventos:evento,
						realizador:realizador
					});
					}).catch(err =>{
						
					})
				
			}).catch((err)=>{
				throw err;
			})
	}
}