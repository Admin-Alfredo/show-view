module.exports = app =>{
	app.server.listen(3000, () => {
		console.log("O seu servidor NODE em execução na porta "+ app.get('port')+"...");
	})
}