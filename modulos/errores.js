function anotherFunction() {
	seRompe()
}

function seRompe() {
return 3 + z
}

function seRompeAsync(cb) {
	setTimeout(() => {
		try {
			return 3 + z
		} catch (error) {
			console.error('Error en la function async' + error);
			cb(err)
		}
	}) 
}

try {
	anotherFunction()
} catch (error) {
	console.error(error);
}
