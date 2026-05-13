// pega o canvas
let canvas = document.getElementById("meuCanvas");
let ctx = canvas.getContext("2d");


// FUNDO DO CHÃO
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = "gray";
ctx.strokeStyle = "gray";

ctx.fillRect(0, 210, 300, 90);
ctx.strokeRect(0, 210, 300, 90);

ctx.closePath();


// CASA
ctx.beginPath();
ctx.fillStyle = "brown";
ctx.strokeStyle = "brown";

ctx.fillRect(110, 140, 80, 70);
ctx.strokeRect(110, 140, 80, 70);

ctx.closePath();


// JANELA ESQUERDA
ctx.beginPath();
ctx.fillStyle = "blue";
ctx.strokeStyle = "blue";

ctx.fillRect(120, 160, 18, 18);
ctx.strokeRect(120, 160, 18, 18);

ctx.closePath();


// JANELA DIREITA
ctx.beginPath();
ctx.fillStyle = "blue";
ctx.strokeStyle = "blue";

ctx.fillRect(162, 160, 18, 18);
ctx.strokeRect(162, 160, 18, 18);

ctx.closePath();


// PORTA
ctx.beginPath();
ctx.fillStyle = "black";
ctx.strokeStyle = "black";

ctx.fillRect(145, 180, 15, 30);
ctx.strokeRect(145, 180, 15, 30);

ctx.closePath();


// TRONCO DIREITO
ctx.beginPath();
ctx.fillStyle = "brown";
ctx.strokeStyle = "brown";

ctx.fillRect(250, 190, 15, 40);
ctx.strokeRect(250, 190, 15, 40);

ctx.closePath();


// TRONCO ESQUERDO
ctx.beginPath();
ctx.fillStyle = "brown";
ctx.strokeStyle = "brown";

ctx.fillRect(40, 180, 15, 40);
ctx.strokeRect(40, 180, 15, 40);

ctx.closePath();


// ÁRVORE ESQUERDA
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = "green";
ctx.strokeStyle = "green";

ctx.arc(48, 160, 28, 0, Math.PI * 2);

ctx.fill();
ctx.stroke();

ctx.closePath();


// ÁRVORE DIREITA
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = "green";
ctx.strokeStyle = "green";

ctx.arc(258, 180, 28, 0, Math.PI * 2);

ctx.fill();
ctx.stroke();

ctx.closePath();


// SOL
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = "yellow";
ctx.strokeStyle = "yellow";

ctx.arc(230, 60, 35, 0, Math.PI * 2);

ctx.fill();
ctx.stroke();

ctx.closePath();


// TELHADO
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = "red";
ctx.strokeStyle = "red";

ctx.moveTo(190, 140);
ctx.lineTo(150, 100);
ctx.lineTo(110, 140);

ctx.fill();
ctx.stroke();

ctx.closePath();


// ÁGUA ESQUERDA
ctx.beginPath();
ctx.fillStyle = "#4682B4";
ctx.strokeStyle = "#4682B4";

ctx.fillRect(0, 210, 40, 90);
ctx.strokeRect(0, 210, 40, 90);

ctx.closePath();


// ÁGUA INFERIOR
ctx.beginPath();
ctx.fillStyle = "#4682B4";
ctx.strokeStyle = "#4682B4";

ctx.fillRect(40, 260, 80, 40);
ctx.strokeRect(40, 260, 80, 40);

ctx.closePath();


// CURVA DA ÁGUA
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = "#4682B4";
ctx.strokeStyle = "#4682B4";

ctx.arc(120, 300, 35, Math.PI, 1.5 * Math.PI);

ctx.fill();
ctx.stroke();

ctx.closePath();


// CURVA SUPERIOR DA ÁGUA
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = "#4682B4";
ctx.strokeStyle = "#4682B4";

ctx.arc(0, 210, 40, 1.5 * Math.PI, 0.5 * Math.PI);

ctx.fill();
ctx.stroke();

ctx.closePath();