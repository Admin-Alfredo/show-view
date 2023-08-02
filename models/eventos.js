/**
	INSERT INTO `eventos` (`id`, `evento`, `descricao`, `data`, `local`, `quantidadeConvites`, `imgMin`, `imgMed`, `imgMax`, `realizador`, `publicado`) VALUES (NULL, 'GoChallenge', 'um concurso realizado anualmente pela unitel, com objetivo motivar os jovens desenvolvedor a visar em expansão comercial e econômica criando suas startups de sucesso apresentado seu projetos a mesma.', '2020-08-27', 'Angola', '200000', 'image1', 'image2', 'image3', '1', '0');
**/

module.exports = (access, DataType) =>{
	var eventos = access.define('Eventos', {
		id:{
			type:  DataType.INT,
			primaryKey: true,
			autoIncrement:true,
			allowNull: false
		},
		evento:{
			type: "VARCHAR(100)",
			allowNull: true
		},
		descricao:{
			type:DataType.STRING,
		},
		data:{
			type:DataType.DATE,
			allowNull:false
		},
		local:{
			type:DataType.VARCHAR,
			allowNull:false
		},
		quantidadeConvites:{
			type:DataType.INT,
		},
		imgMin:{
			type:DataType.STRING
		},
		imgMed:{
			type:DataType.STRING
		},
		imgMax:{
			type:DataType.STRING
		},
		realizador:{
			type:DataType.INT,
			allowNull: true,
			foreignKey: true
		},
		publicado:{
			type:DataType.BOOLEAN,
			default:0
		}
		
	});
	return eventos;
	
}
//http:localhost:3000/assets/image/parfleto1.png













