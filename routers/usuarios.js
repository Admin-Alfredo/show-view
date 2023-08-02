//STATUS 
//=> 201 created
//=> 412 precondition failed
//=> 204 not Content
module.exports = (app)=>{
	var usuarios = app.db.models.Usuarios;
	
	app.route('/usuarios')
		.all((req, res, next)=>{
			next()
		})
		.get((req, res)=>{
			usuarios.findAll()
				.then(data =>{
					res.json(data)
				}).catch((err)=>{
					res.status(412).json({msg:err.message})
				})
		})
		.post((req, res)=>{
			usuarios.create(req.body)
				.then(data =>{
					res.status(201).json({msg:"usuario criado."})
				}).catch(err =>{
					res.status(412).json({msg:err.message})
				})
		})
	app.route('/usuarios/:idUser')
		.all((req, res, next)=>{
			next()
		})
		.get((req, res)=>{
			usuarios.findById(req.params.idUser)
				.then(data =>{
					res.json(data)
				}).catch(err =>{
					res.status(412).json({msg:err.message})
				})
		})
		.put((req, res)=>{
			usuarios.update(req.params.idUser, req.body)
				.then(data =>{
					res.status(201).json({msg:"usuario atualizado."})					
				}).catch(err =>{
					res.status(412).json({msg:err.message})
				})
		})
		.delete((req, res)=>{
			usuarios.delete(req.params.idUser)
				.then(data =>{
					res.status(204).json({msg:"usuario excluido."})
				}).catch(err =>{
					res.status(412).json({msg:err.message})
				})
		});
		app.post('/body', (req, res)=>{
			console.log(req.body)
		})
}
