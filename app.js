var Pessoa = function(nome, sobrenome){
	_nome = nome;
	_sobrenome = nome;
	this.getNome = function(){
		return _nome;
	}
	this.setNome = function(n){
		_nome = n;
	}
	this.getSobrenome = function(){
		return _sobrenome;
	}
	this.setSobrenome = function(n){
		_sobrenome = n;
	}
	funestudar(){
		console.log("estou estudando!")
	}
	
}
object = {
	msg:"erro na linha 1",
	alerta(){
		console.log(this.msg)
	} 
}

p1=new Pessoa();
p1.estudar()








