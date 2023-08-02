module.exports = (access, DataType)=>{
	var Comentarios = access.define("Comentarios",{
		id:{
			type:DataType.INT,
			primaryKey:true,
			autoIncrement: true
		},
		nome:{
			type:DataType.VARCHAR,
			allowNull:false
		},
		text:{
			type:DataType.STRING,
			allowNull: false
		},
		image:{
			type:DataType.STRING
		}
	})
	return Comentarios;
}
