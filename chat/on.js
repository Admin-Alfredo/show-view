module.exports =(app)=>{
	var io = app.io;
	io.on('connection', (client)=>{
		client.on('send-server',(cordenadas)=>{
			//client.emit('send-client', cordenadas);
			client.broadcast.emit('send-client', cordenadas)
		})
	})
} 