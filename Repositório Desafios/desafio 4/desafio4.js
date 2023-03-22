//4) Escreva um programa que inverta os caracteres de um string em javascript

//IMPORTANTE:
//a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser 
//   previamente definida no código;
//b) Evite usar funções prontas, como, por exemplo, reverse;

// Definindo a string a ser invertida
const frase = prompt("Digite uma frase")

const reversed = [];


for (let i = frase.length - 1; i >= 0; i--) {
  // Adicionando o caractere atual no array de caracteres invertidos
  reversed.push(frase[i]);
}
const invertedString = reversed.join("");

alert(invertedString);