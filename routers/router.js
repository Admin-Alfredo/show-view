module.exports = (app)=>{
	app.get('/',app.controllers.home);
	app.get('/registrar', app.controllers.registrar);
	app.get('/login', app.controllers.login);
	app.get('/conta', app.authenticate.auth(), app.controllers.conta);
	app.get('/comprar/:evento/:id', app.controllers.comprar);
	app.post('/galeria/eventos/:idUser',app.controllers.galeria.eventos);
	app.post('/galeria/usuario/:IdUser',app.controllers.galeria.usuario);
	app.get('/logout',app.controllers.logout);
}