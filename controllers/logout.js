module.exports = (app)=>{
	return (req, res)=>{
		req.logout();
		res.redirect('/')
	}
}