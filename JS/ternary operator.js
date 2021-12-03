let num = 7;

// Without Ternary Operator...
// if (num === 7) {
// 	console.log('lucky!');
// }
// else {
// 	console.log('BAD!');
// }

// Same thing written with Ternary Operator...
num === 7 ? console.log('lucky!') : console.log('BAD!');

// ==============
// EXAMPLE 2
// ==============

let status = 'offline';

// Without ternary operator
// let color;
// if (status === 'offline') {
// 	color = 'red';
// }
// else {
// 	color = 'green';
// }

// One-liner using Ternary Operator...
let color = status === 'offline' ? 'red' : 'green';
console.log(color);
