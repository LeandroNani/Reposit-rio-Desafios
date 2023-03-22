//2) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa,
// na linguagem que desejar, que calcule e retorne:
// • O menor valor de faturamento ocorrido em um dia do mês;
// • O maior valor de faturamento ocorrido em um dia do mês;
// • Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

// IMPORTANTE:
//a) Podem existir dias sem faturamento, como nos finais de semana e feriados.
//   Estes dias devem ser ignorados no cálculo da média;


const faturamento = require('./dados.json');

const valores = faturamento.map((dia) => dia.valor);
const valoresSem0 = valores.filter(valor => valor !== 0)

const menorFaturamento = Math.min(...valores);
const menorFaturamentoSem0 = Math.min(...valoresSem0)
const maiorFaturamento = Math.max(...valores);

const diasAcimaDaMedia = valores.filter((valor) => valor > (valores.reduce((total, valor) => total + valor, 0) / valoresSem0.length));

console.log(`Menor faturamento: ${menorFaturamento}`);
console.log(`Menor faturamento(desconsiderando faturamentos 0): ${menorFaturamentoSem0}`);
console.log(`Maior faturamento: ${maiorFaturamento}`);
console.log(`Número de dias acima da média de faturamento: ${diasAcimaDaMedia.length}`);
