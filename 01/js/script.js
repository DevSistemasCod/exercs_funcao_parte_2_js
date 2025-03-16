const saudacao = (nomePadrao, mensagemPadrao) => {
  let saida = document.getElementById('resultado');

  if (saida instanceof HTMLElement) {
    saida.textContent = `Olá, ${nomePadrao}! ${mensagemPadrao}`;
  }
};

// Função para lidar com o clique do botão
const cliqueNoBotao = (nomeInput, mensagemInput) => {
  //prettier-ignore
  if ((nomeInput instanceof HTMLInputElement) && (mensagemInput instanceof HTMLInputElement)) {
    let nome = nomeInput.value;
    let mensagem = mensagemInput.value;
   
    nome = nome === '' ? 'Visitante' : nome;
    //mensagem = mensagem === '' ? 'Bem-vindo!' : mensagem;

    /* if (nome === '') {
      nome = 'Visitante';
    } else {
      nome = nome;
    } */

    if (mensagem === '') {
      mensagem = 'Bem-vindo';
    } else {
      mensagem = mensagem;
    }

    saudacao(nome, mensagem);
  }
};

// Função para configurar o evento de clique
const configurarEventoDeSaudacao = () => {
  let exibirBtn = document.getElementById('exibirBtn');
  let nomeInput = document.getElementById('nome');
  let mensagemInput = document.getElementById('mensagem');

  if (exibirBtn instanceof HTMLButtonElement) {
    exibirBtn.addEventListener('click', () => {
      cliqueNoBotao(nomeInput, mensagemInput);
    });
  }
};

// Evento DOMContentLoaded para inicializar a configuração
document.addEventListener('DOMContentLoaded', configurarEventoDeSaudacao);
