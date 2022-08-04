const http = require('http')
const port = 3000

http.createServer(router).listen(port)

function router(req, res) {
	console.log('nueva peticion');
	console.log(req.url);

	switch (req.url) {
		case '/hola':
			res.write('Hola, que tal')
			res.end()
			break;
	
		default:
			res.write('Error 404: No se lo que quieres')
			res.end()
			break;
	}

	// res.writeHead(201, { 'Content-Type': 'text/plain'})
	// res.write('hola, ya usar http de NodeJS')

	// res.end()
}

console.log('Escuchando http en puerto ' + port);