import modificador from "./modificador.js";

console.log(modificador);

var ingredientes = ['mel', 'água', 'sal', 'mostarda'];
var resultadoCapitalizado = capitalizar(ingredientes);
var resultadoOrdenacao = ordenar(resultadoCapitalizado);
var resultadoCaixaAlta = modificador.caixaAlta(ingredientes);

console.log(resultadoCapitalizado);
console.log(resultadoOrdenacao);
console.log(resultadoCaixaAlta);



//console.log(modificado.sort());