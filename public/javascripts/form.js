var emailValido = /^[a-z0-9]{1,}@\w+.com$/;
function usuarioLogin(email, password){
	return new Promise(function(resolve, reject){
		if(typeof email === "string" && emailValido.test(email)){
			if(typeof password === "string" && password.length > 0){
				resolve({email,password})
			}else{
				reject("password incorreta!")
			}
		}else{
			reject("Email invalido!")
		}
	})
}
function usuarioRegistrar(nome, email, telefone, password, passwordConf, notificacao){
	return new Promise(function(resolve, reject){
		if(nome.length > 10){
			if(emailValido.test(email)){
				var _telefone_ = telefone.replace(/\s/g,'');
				if( _telefone_.length === 9){
					if(password.length >= 6){
						if(password === passwordConf){
							resolve({nome,email,telefone:_telefone_,password,notificacao});
						}else{
							reject("password não compativel")
						}
					}else{
						reject("password deve conter pelomenos 6 caracter.")
					}
				}else{
					reject("Número do telefone incorreto")
				}
			}else{
				reject("email Invalido.")
			}
		}else{
			reject("caracter insuficiente no campo Nome.")
		}
	})
}
$("[data-registrar]").on('submit', function(event){
	event.preventDefault();
	var nome = event.target.nome.value;
	var email = event.target.email.value;
	var telefone = event.target.telefone.value;
	var password = event.target.password.value;
	var passwordConf = event.target.passwordConf.value;
	var notificacao = event.target.notificacoa.checked;
	
	usuarioRegistrar(nome, email, telefone, password,passwordConf,notificacao)
		.then(user =>{
			request({
				uri:"/usuarios",
				method:"POST",
				json:true,
				body:{
					nome:user.nome,
					email:user.email,
					telefone:user.telefone,
					password:user.password,
					notificacao:user.notificacao
				}
			},function(err, res, data){
				if(res.status === 412){
					var erro = JSON.parse(res.response)
					alerta("erro",{destaque:erro.msg}).show(3000);
				}else if(res.status === 201){
					if(localStorage.getItem('vskey'))
						localStorage.removeItem('vskey');
					
					var valido = JSON.parse(res.response)
					alerta("sucesso",{destaque:valido.msg}).show(3000);
					location.replace("/login");
				}
			})
		}).catch(function(msg){ alerta("aviso",{destaque:msg}).show(3000);})
})


$("[data-login]").on('submit', function(event){
	event.preventDefault();
	
	var email = event.target.email.value;
	var password = event.target.password.value;
	
	usuarioLogin(email,password)
		.then(login =>{
			var xhr = request({
				uri:"/token",
				method:"POST",
				json:true,
				body:{
					email:login.email,
					password:login.password
				}
			},function(err, res, data){
				if(res.status === 401){
					var erro = JSON.parse(res.response)
					alerta("erro",{destaque:erro.msg}).show(3000);
				}else{
					if(!localStorage.getItem('vskey')){
						localStorage.setItem('vskey', data.token);
						location.replace("/conta?vskey="+localStorage.getItem('vskey'))						
					}else{
						
					}
				}
				
			})
			
		}).catch(function(msg){alerta("erro",{destaque:msg}).show(3000);})
})
