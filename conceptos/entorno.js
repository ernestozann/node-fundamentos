//En la terminal NOMBRE=eru node conceptos/entorno.js

let nombre = process.env.NOMBRE || 'nameless';
let web = process.env.WEB || nombre + '.com';

console.log('Hola ' + nombre);
console.log('Mi web es ' + web);