const os = require('os')

console.log(os.arch());
console.log(os.platform());
console.log('Cores: ' + os.cpus().length);
// console.log(os.constants);

const size = 1024
function kilobytes(bytes) {
	return bytes / size
}

function megabytes(bytes) {
	return kilobytes(bytes) / size
}

function gigabytes(bytes) {
	return megabytes(bytes) / size
}
console.log('Free memory: ' + os.freemem() + ' Bytes');
console.log(kilobytes(os.freemem()) + ' KiloBytes');
console.log(megabytes(os.freemem()) + ' MegaBytes');
console.log(gigabytes(os.freemem()) + ' GigaBytes');
console.log('total memory: ' + gigabytes(os.totalmem()) + ' GigaBytes');

console.log(os.homedir());
console.log(os.tmpdir());
console.log(os.hostname());
console.log(os.networkInterfaces());