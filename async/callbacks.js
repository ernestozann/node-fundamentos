function soyAsincrona(callback) {
	console.log('Its a me Async function');
	setTimeout(() => {
		console.log('Hackeo async realizado');
		console.log('Balance de cuenta bancaria = -100000 USD');
		callback();
	}, 2500);
}

console.log('Iniciando proceso para nada malicioso');
soyAsincrona(() => {
	console.log('Terminado proceso para nada malicioso');
});