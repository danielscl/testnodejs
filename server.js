var myserver = require('socket.io').listen(8080);

myserver.sockets.on('connection',arranque);

function arranque(usuario){
	usuario.on('nuevoDato',emitir);
}

function emitir(data){
	myserver.sockets.emit('mensajeServidor',data);
}