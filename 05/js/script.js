// Função para encontrar o maior número usando compararNumeros
const encontrarMaiorNumero = (n1, n2, n3) => {
  let maior;

  //prettier-ignore
  if ((n1 > n2) && (n1 > n3)) {
    maior = n1;
    return maior;
  } 
  //prettier-ignore
  else if ((n2 > n1) && (n2 > n3)) {
    maior = n2;
    return maior;
  } 
  //prettier-ignore
  else if ((n3 > n1 && n3 > n2)) {
    maior = n3;
    return maior;
  }
  else{
    alert("Existem núemros iguais !")
    return null;
  }
};

// Exibir o resultado
const exibirResultado = (mensagem) => {
  let resultado = document.getElementById('resultado');
  if (resultado instanceof HTMLParagraphElement) {
    resultado.textContent = mensagem;
  }
};

// Configurar o evento para o botão
const configurarEventoDeComparacao = () => {
  let compararBtn = document.getElementById('compararBtn');
  let numero1Input = document.getElementById('numero1');
  let numero2Input = document.getElementById('numero2');
  let numero3Input = document.getElementById('numero3');

  if (compararBtn instanceof HTMLButtonElement) {
    compararBtn.addEventListener('click', () => {
      //prettier-ignore
      if ((numero1Input instanceof HTMLInputElement) && (numero2Input instanceof HTMLInputElement) && (numero3Input instanceof HTMLInputElement)) {
        let n1 = parseFloat(numero1Input.value);
        let n2 = parseFloat(numero2Input.value);
        let n3 = parseFloat(numero3Input.value);

          let maior = encontrarMaiorNumero(n1, n2, n3);
          if (maior != null) {
            exibirResultado(`O maior número é: ${maior}`);
          }
          
      }
    });
  }
};

// Aguarda o carregamento completo da página para configura o evento de comparação
document.addEventListener('DOMContentLoaded', configurarEventoDeComparacao);
