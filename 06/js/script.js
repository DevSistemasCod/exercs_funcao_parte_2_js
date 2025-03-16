const calcularImposto = (valorCompra, percentualImposto) => {
  //prettier-ignore
  return (valorCompra * (percentualImposto / 100));
};

const exibirValorTotal = (valorCompra, percentualImposto) => {
  let imposto = calcularImposto(valorCompra, percentualImposto);
  let valorTotal = valorCompra + imposto;

  // Exibe o resultado na tela
  let resultado = document.getElementById('resultado');
  if (resultado instanceof HTMLParagraphElement) {
    //prettier-ignore
    resultado.textContent = `Valor da compra: R$ ${valorCompra.toFixed(2)} | Imposto: R$ ${imposto.toFixed(2)} | Valor total: R$ ${valorTotal.toFixed(2)}`;
  }
};

// Função para configurar o evento de cálculo
const configurarEventoDeCalculo = () => {
  let calcularBtn = document.getElementById('calcularBtn');
  let valorCompraInput = document.getElementById('valorCompra');
  let percentualImpostoInput = document.getElementById('percentualImposto');

  if (calcularBtn instanceof HTMLButtonElement) {
    calcularBtn.addEventListener('click', () => {
      //prettier-ignore
      if ((valorCompraInput instanceof HTMLInputElement) && (percentualImpostoInput instanceof HTMLInputElement)) {
        let valorCompra = parseFloat(valorCompraInput.value);
        let percentualImposto = parseFloat(percentualImpostoInput.value);

        //prettier-ignore
        if ((valorCompra <= 0) || (percentualImposto < 0)) {
          alert('Por favor, insira valores válidos para a compra e o imposto!');
        } 
        else {
          exibirValorTotal(valorCompra, percentualImposto);
        }
      }
    });
  }
};

// Aguarda o carregamento completo da página para configura o evento de calculo
document.addEventListener('DOMContentLoaded', configurarEventoDeCalculo);
