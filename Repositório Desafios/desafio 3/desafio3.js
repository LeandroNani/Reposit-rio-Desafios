// 3) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:

// SP – R$67.836,43
// RJ – R$36.678,66
// MG – R$29.229,88
// ES – R$27.165,48
// Outros – R$19.849,53

// Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado
// teve dentro do valor total mensal da distribuidora.

const faturamentoMensal = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
  };
  
  const valorTotalMensal = Object.values(faturamentoMensal).reduce((acc, cur) => acc + cur);
  
  const percentualDosEstado = {};
  for (const estado in faturamentoMensal) {
    const percentual = (faturamentoMensal[estado] / valorTotalMensal) * 100;
    percentualDosEstado[estado] = percentual.toFixed(2); // arredonda para 2 casas decimais
  }
  console.log('A representação que cada estado teve dentro do valor total mensal da distribuidora em porcentagem foi:')
  console.log(percentualDosEstado);