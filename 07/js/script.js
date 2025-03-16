const calcularFatorial = (numero) => {
  //prettier-ignore
  if ((numero === 0 ) || (numero === 1)) {
    return 1; // Caso base: 0! = 1 e 1! = 1
  }

  let fatorial = 1;
  for (let i = 2; i <= numero; i++) {
    fatorial = fatorial * i;
  }
  return fatorial;
};

// Função para exibir o fatorial
const exibirFatorial = (numero, callback) => {
  let resultado = callback(numero); // Chama a função callback (calcularFatorial)

  // Exibe o resultado na página
  let resultadoElement = document.getElementById('resultado');
  if (resultadoElement instanceof HTMLParagraphElement) {
    resultadoElement.textContent = `O fatorial de ${numero} é: ${resultado}`;
  }
};

// Função para obter o número do input
const obterNumeroInput = () => {
  let numeroInput = document.getElementById('numero');
  if (numeroInput instanceof HTMLInputElement) {
    return parseInt(numeroInput.value);
  }
  return NaN; // Caso o input não seja válido
};

// Função arrow para configurar o evento de cálculo
const configurarEventoDeCalculo = () => {
  let calcularBtn = document.getElementById('calcularBtn');

  if (calcularBtn instanceof HTMLButtonElement) {
    calcularBtn.addEventListener('click', () => {
      let numero = obterNumeroInput(); // Obtém o número do input

      // Valida o número inteiro é maior ou igual a 0
      if (numero < 0) {
        alert('Por favor, insira um número inteiro válido maior ou igual a 0!');
      } else {
        exibirFatorial(numero, calcularFatorial); // Passa calcularFatorial como callback
      }
    });
  }
};

document.addEventListener('DOMContentLoaded', configurarEventoDeCalculo);
