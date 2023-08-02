module.exports = (app)=>{
	return  (req, res)=>{
			res.render('registrar',{
				title:'VShow',
				subtitle:"registrar"
			});
	}
	
}