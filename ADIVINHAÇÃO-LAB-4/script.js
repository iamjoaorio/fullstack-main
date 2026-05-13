// gera um número aleatório inteiro entre 0 e 10
let numeroSecreto = Math.floor(Math.random() * 11);

// função para verificar o número digitado
function verificarNumero() {

  // pega o valor digitado no input
  let chute = Number(document.getElementById("chute").value);

  // pega o elemento da mensagem
  let mensagem = document.getElementById("mensagem");

  // verifica se acertou
  if (chute === numeroSecreto) {

    mensagem.innerHTML = "Você acertou!";

    // muda o fundo para verde
    document.getElementById("mensagem")
    .style.setProperty("background-color", "green");

  }

  // verifica se o número digitado é menor
  else if (chute < numeroSecreto) {

    mensagem.innerHTML = "O número secreto é maior!";

    // requisito obrigatório do exercício
    document.getElementById("mensagem")
    .style.setProperty("background-color", "red");

  }

  // caso o número digitado seja maior
  else {

    mensagem.innerHTML = "O número secreto é menor!";

    // requisito obrigatório do exercício
    document.getElementById("mensagem")
    .style.setProperty("background-color", "red");

  }

}