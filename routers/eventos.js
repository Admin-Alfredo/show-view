//STATUS 
//=> 201 created
//=> 412 precondition failed
//=> 204 not Content
/**
REGISTRO "EVENTO DE TESTE"
INSERT INTO `eventos` (`id`, `evento`, `descricao`, `data`, `local`, `quantidadeConvites`, `imgMin`, `imgMed`, `imgMax`, `realizador`) VALUES (NULL, 'FullStack', 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis volutpat laoreet magna, nec placerat nisl egestas id. Maecenas a nulla vel arcu viverra lobortis. In ligula nunc, cursus non faucibus sed, hendrerit id est. Maecenas felis neque, porta et sagittis faucibus.', '2020-08-02', 'Benguela', '5000', 'C:\\xampp\\htdocs\\ShowView\\public\\images\\gravity-falls(1).jpg', 'C:\\xampp\\htdocs\\ShowView\\public\\images\\gravity-falls(2).jpg', 'C:\\xampp\\htdocs\\ShowView\\public\\images\\gravity-falls(3).jpg', '3');
*/
module.exports = (app) =>{
	var eventos = app.db.models.Eventos;
	
	app.route('/eventos')
		.all((req,res, next)=>{
			next()
		})
		.get((req, res)=>{
			eventos.findAll([])
				.then(data =>{
					res.json(data)
				}).catch(err =>{
					res.status(412).json({msg:err.message});
				})
		})
		.post(app.authenticate.auth(), (req, res)=>{
			eventos.create(req.body)
				.then(data =>{
					res.status(201).json({msg:"Evento criado."})
				}).catch(err =>{
					res.status(412).json({msg:err.message})
				})
			
		})
	app.route('/eventos/:id')
		.all((req, res,next)=>{
			next()
		})
		.get((req , res)=>{
			eventos.findById(req.params.id)
				.then(data =>{
					res.json(data)
				}).catch(err =>{
					res.status(412).json({msg:err.message})
				})
		})
		.put((req, res)=>{
			eventos.update(req.params.id, req.body)
				.then( data=>{
					res.status(201).json({msg:"Evento atualizado."})
				}).catch(err =>{
					res.status(412).json({msg:err.message})
				})
		})
		.delete((req,res)=>{
			eventos.delete(req.params.id)
				.then(data =>{
					res.status(204).json({msg:"Evento excluido."})
				}).catch(err =>{
					res.status(412).json({msg:err.message})
				})
		})
}
