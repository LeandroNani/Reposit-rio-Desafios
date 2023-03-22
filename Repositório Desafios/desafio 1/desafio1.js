// 1) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores
//anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde,
//informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado
//pertence ou não a sequência.

//IMPORTANTE:
//Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido
//no código;

let number = parseInt(prompt("Digite um número inteiro:"));

// Calcula a sequência de Fibonacci até o número informado 
let fibonacci = [0, 1];
while (fibonacci[fibonacci.length - 1] < number) {
  let nextNumber = fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2];
  fibonacci.push(nextNumber);
}

// Condicional que verifica se o número digitado pertence a sequência e alerta na tela a resposta
if (fibonacci.includes(number)) {
  alert(`${number} pertence à sequência de Fibonacci: ${fibonacci.join(', ')}`);
} else {
  alert(`${number} não pertence à sequência de Fibonacci.`);
}