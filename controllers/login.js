module.exports = (app)=>{
	return (req, res)=>{
			res.render('login', {
				title:"VShow",
				subtitle:"login"
			})
	}
	
}