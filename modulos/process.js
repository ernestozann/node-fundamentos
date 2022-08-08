process.on('beforeExit', () => {
	console.log('va a terminar el proceso');
})

process.on('exit', () => {
	console.log('el proceso a sido ejecutado exitosamente');
})

process.on('uncaughtException', (error, origen) => {
	console.error('olvidamos capturar un error');
	console.error(error);
})

Forzarerror();

console.log('si el error no se recoje, yo no aparezco');