let i = 0
let intervalo = setInterval(() => {
	console.log('Hello ' + i);
	if (i === 3) {
		clearInterval(intervalo)
	}
	i++
}, 1000);

setImmediate(() => {
	console.log('saludo inmediato');
})