// Função que calcula o preço com o desconto
const calcularDesconto = (preco, desconto = 10) => {
  let precoComDesconto = preco - preco * (desconto / 100);
  let resultado = document.getElementById('resultado');

  if (resultado instanceof HTMLParagraphElement) {
    //prettier-ignore
    resultado.textContent = `Preço original: R$ ${preco.toFixed(2)} | Desconto: ${desconto}% | Preço com desconto: R$ ${precoComDesconto.toFixed(2)}`;
  }
};

// Função que valida os valores de entrada
const validarEntradas = (precoInput, descontoInput) => {
  let preco = parseFloat(precoInput.value.trim());
  let desconto = parseFloat(descontoInput.value.trim());

  if (preco <= 0) {
    alert('Por favor, insira um preço válido!');
    return null;
  }

  if (desconto <= 0) {
    desconto = 10; // Define desconto padrão
  }

  return { preco, desconto };
};

// Função para configurar o evento de clique
const configurarEventoDeCalculo = () => {
  let calcularBtn = document.getElementById('calcularBtn');
  let precoInput = document.getElementById('preco');
  let descontoInput = document.getElementById('desconto');

  if (calcularBtn instanceof HTMLButtonElement) {
    calcularBtn.addEventListener('click', () => {
      //prettier-ignore
      if ((precoInput instanceof HTMLInputElement) && (descontoInput instanceof HTMLInputElement)) {
        let entradas = validarEntradas(precoInput, descontoInput);

        if (entradas) {
          calcularDesconto(entradas.preco, entradas.desconto);
        }
      }
    });
  }
};

// Evento DOMContentLoaded para inicializar a configuração
document.addEventListener('DOMContentLoaded', configurarEventoDeCalculo);
