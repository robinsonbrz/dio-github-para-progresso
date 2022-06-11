function validaArrays(arr, num) {
	try {
		if (!arr && !num) throw new ReferenceError('Envie os parâmetros!');

		if (typeof arr !== 'object')
			throw new TypeError('Envie um elemento do tipo Array!');

		if (typeof num !== 'number')
			throw new TypeError('Envie um elemento do tipo Number!');

		if (arr.length !== num) throw new RangeError('Tamanho do array inválido!');

		return arr;
	} catch (e) {
		if (e instanceof RangeError) {
			console.log('RangeError!');
			console.log(e.message);
            
		} else if (e instanceof ReferenceError) {
			console.log('ReferenceError!');
			console.log(e.message);
            
		} 
        else if (e instanceof TypeError) {
			console.log('TypeError!');
			console.log(e.message);
            
		} else {
			console.log('Outro tipo de erro!');
			console.log(e.stack);
		}
	}
}
console.log("\n\n\n");
console.log("\n\n\n");
console.log("##############################################################");
console.log("\n\n\n");
console.log("\n\n\n");
console.log(`""`);
console.log(validaArrays());
console.log("\n\n\n");
console.log("\n\n\n");

console.log("validaArrays([1, 2, 3], 3) Correto");
console.log(validaArrays([1, 2, 3], 3));
console.log("\n\n\n");
console.log("\n\n\n");

console.log("validaArrays([1, 2, 3], 2)");
console.log(validaArrays([1, 2, 3], 2));
console.log("\n\n\n");
console.log("\n\n\n");

console.log("validaArrays(5, 5)");
console.log(validaArrays(5, 5));
console.log("\n\n\n");
console.log("\n\n\n");