function hola(nombre, callback) {
	setTimeout(() => {
		console.log('Hola, ' + nombre);
		callback(nombre);
	}, 1500);
}

function hablar(calbackTalk) {
	setTimeout(() => {
		console.log('Lorem ipsum dolor sit amet.');
		calbackTalk();
	}, 100);
}

function adios(nombre, anotherCallback) {
	setTimeout(() => {
		console.log('adios, ' + nombre);
		anotherCallback(nombre);
	}, 1000);
}

function conversation(nombre, times, callback) {
	if (times > 0) {
		hablar(() => {
			conversation(nombre, --times, callback);
		})
	} else {
		adios(nombre, callback);
	}
}

//-------------------------------------------------------

// console.log('Iniciando proceso para nada malicioso');
// hola('Carlos', (nombre) => {
// 	hablar(() => {
// 		hablar(() => {
// 			hablar(() => {
// 				adios(nombre, () => {
// 					console.log('Terminando proceso para nada malicioso');
// 				})
// 			})
// 		})
// 	})
// })

//-------------------------------------------------------

console.log('Iniciando proceso para nada malicioso');
hola('Eru', (nombre) => {
	conversation(nombre, 5, () => {
		console.log('Terminando proceso para nada malicioso');
	})
});