async function hola(nombre) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log('Hola, ' + nombre);
			resolve(nombre);
		}, 1500);
	})
}

function hablar(nombre) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log('Lorem ipsum dolor sit amet.');
			resolve(nombre);
			// reject('error')
		}, 1000);
	})
}

function adios(nombre) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log('adios, ' + nombre);
			resolve(nombre);
		}, 1000);
	})
}

async function main() {
	let nombre = await hola('Eru')
	await hablar()
	await hablar()
	await hablar()
	await hablar()
	await adios(nombre)
}

main();