// tipo de dados 
// boleanos 
// obs 
// = atribuicao 
// == comparacao de valor 
// === comparacao de valor e tipo 

// conversão implicita 
const numero = 456;
const numeroString = "456"

console.log(numero + numeroString);

// conversão explicita 
let telefone = 12341234;
console.log("O telefone é " + String(telefone)); // teremos a conversão do número 12341234 para uma string “12341234” e assim poderemos fazer a concatenação entre as strings

console.log(numero + Number(numeroString))


var respostaDeTudo = 42
let idade = 29
const pi = 3.14

{
    var respostaDeTudo = 3.14
    let idade = 42
    const pi = 29
    console.log(respostaDeTudo, idade, pi)

}
console.log(respostaDeTudo, idade, pi)