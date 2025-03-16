// Função arrow que calcula o quadrado de um número.
// Neste ponto, ela é apenas uma função normal, não uma callback.
// Ela se torna uma callback quando é passada como argumento para outra função que a utiliza
const calcularQuadrado = (numero) => numero * numero;

// Função que recebe um número e uma função como parâmetros.
// Aqui, o segundo parâmetro (calcularQuadrado) é uma callback, pois será chamada dentro desta função.
const aplicarOperacao = (numero, calcularQuadrado) => calcularQuadrado(numero);

const exibirResultado = (mensagem) => {
  let resultado = document.getElementById('resultado');
  if (resultado instanceof HTMLElement) {
    resultado.textContent = mensagem;
  }
};

/**
 * Função que configura o evento de clique no botão 'calcularBtn'.
 * Também valida o número inserido e usa a função aplicarOperacao para calcular o quadrado.
 */
const configurarEventoDeCalculo = () => {
  let calcularBtn = document.getElementById('calcularBtn');
  let numeroInput = document.getElementById('numero');

  if (calcularBtn instanceof HTMLButtonElement) {
    calcularBtn.addEventListener('click', () => {
      if (numeroInput instanceof HTMLInputElement) {
        let numero = parseFloat(numeroInput.value);

        // Passa a função calcularQuadrado como callback para aplicarOperacao.
        let resultado = aplicarOperacao(numero, calcularQuadrado);
        exibirResultado(`O quadrado de ${numero} é ${resultado}.`);
      }
    });
  }
};

// Aguarda o carregamento completo da página para configurar o evento no botão.
document.addEventListener('DOMContentLoaded', configurarEventoDeCalculo);
