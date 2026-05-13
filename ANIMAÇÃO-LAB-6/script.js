// pega o canvas
let canvas = document.getElementById("meuCanvas");

// cria o contexto 2d
let ctx = canvas.getContext("2d");


// ---------------------------------------------------
// OBJETO DA IMAGEM
// ---------------------------------------------------
let personagem = {

  x: 120,
  y: 120,

  largura: 60,
  altura: 60,

  imagem: new Image()

};


// imagem de exemplo
personagem.imagem.src =
"https://cdn-icons-png.flaticon.com/512/616/616408.png";



// ---------------------------------------------------
// MOVIMENTO DO MOUSE
// ---------------------------------------------------
document.addEventListener("mousemove", function(evento) {

  // pega a posição do canvas na tela
  let rect = canvas.getBoundingClientRect();

  // posição do mouse relativa ao canvas
  let mouseX = evento.clientX - rect.left;
  let mouseY = evento.clientY - rect.top;


  // centraliza a imagem no ponteiro do mouse
  personagem.x = mouseX - personagem.largura / 2;
  personagem.y = mouseY - personagem.altura / 2;


  // ---------------------------------------------------
  // TRAVA DE SEGURANÇA DAS BORDAS
  // ---------------------------------------------------

  // trava esquerda
  if (personagem.x < 0) {
    personagem.x = 0;
  }

  // trava direita
  if (personagem.x + personagem.largura > canvas.width) {
    personagem.x = canvas.width - personagem.largura;
  }

  // trava superior
  if (personagem.y < 0) {
    personagem.y = 0;
  }

  // trava inferior
  if (personagem.y + personagem.altura > canvas.height) {
    personagem.y = canvas.height - personagem.altura;
  }

});



// ---------------------------------------------------
// FUNÇÃO DE ANIMAÇÃO
// ---------------------------------------------------
function animar() {

  // limpa o canvas a cada frame
  ctx.clearRect(0, 0, canvas.width, canvas.height);


  // desenha a imagem
  ctx.drawImage(
    personagem.imagem,
    personagem.x,
    personagem.y,
    personagem.largura,
    personagem.altura
  );


  // chama o próximo frame
  requestAnimationFrame(animar);

}


// inicia a animação
animar();