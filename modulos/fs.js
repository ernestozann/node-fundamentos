const fs = require('fs')

function leer(ruta, cb) {
	fs.readFile(ruta, (err, data) => {
		cb(data.toString());
	})
}

function escribir(ruta, contenido, cb) {
	fs.writeFile(ruta, contenido, (err) => {
		if (err) {
			console.error('me olvidar como escribir ',err);
		} else {
			console.log('se a escribido correctamente');
		}
	})
}

function borrar(ruta, cb) {
	fs.unlink(ruta, cb)
}

//escribir(__dirname + '/archivo1.txt', 'Soy un nuevo, elegante y elitista archivo', console.log)
// leer(__dirname + '/archivo.txt', console.log)
borrar(__dirname + '/archivo1.txt', console.log)