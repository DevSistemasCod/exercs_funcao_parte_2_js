// Função que verifica se um número é par ou ímpar
const verificarPar = (numero) => {
  //prettier-ignore
  if ((numero % 2) === 0) {
    return 'Número Par';
  } else {
    return 'Número Impar';
  }
};

// Função que exibe o resultado na interface
const exibirResultado = (mensagem) => {
  let resultado = document.getElementById('resultado');
  if (resultado instanceof HTMLParagraphElement) {
    resultado.textContent = mensagem;
  }
};

// Função para configurar o evento de clique
const configurarEventoDeVerificacao = () => {
  let verificarBtn = document.getElementById('verificarBtn');
  let numeroInput = document.getElementById('numero');

  if (verificarBtn instanceof HTMLButtonElement) {
    verificarBtn.addEventListener('click', () => {
      if (numeroInput instanceof HTMLInputElement) {
        let numero = parseFloat(numeroInput.value);

        //prettier-ignore
        if (isNaN(numero)) {
          exibirResultado('Por favor, insira um número válido.');
        }
        else {
          let mensagem = verificarPar(numero);
          exibirResultado(mensagem);
        }
      }
    });
  }
};

// Inicializa a configuração do evento no DOMContentLoaded
document.addEventListener('DOMContentLoaded', configurarEventoDeVerificacao);
