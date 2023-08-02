module.exports = (access, DataType)=>{
	var Usuarios = access.define("Usuarios",{
		idUser: {
			type:DataType.INT,
			primaryKey: true,
			autoIncrement:true
		},
		nome:{
			type:DataType.VARCHAR,
			allowNull:false
		},	
		email:{
			type:DataType.VARCHAR,
			allowNull: false,
		},
		telefone:{
			type:DataType.INT
		},
		password:{
			type:DataType.VARCHAR,
		},
		notificacao:{
			type:DataType.BIT
		},
		image:{
			type:DataType.STRING,
			allowNull:true
		}
	})
	return Usuarios;
}