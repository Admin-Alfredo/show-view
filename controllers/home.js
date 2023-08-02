module.exports = (app)=>{
	var eventos = app.db.models.Eventos;
	return (req, res) =>{
			eventos.findAll([])
				.then((data)=>{
					var normalize = app.libs.config.arrayGroups(3, data);
					res.render('index',{
						title:"VShow",
						subtitle:"home",
						typeGride: ['a','b','c'],
						normalize,
						eventos:data
					})
				}).catch((err)=>{
					if(err) throw err;
				})
		}
	
}