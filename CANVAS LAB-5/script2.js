let canvas = document.getElementById("meuCanvas2")
let ctx = canvas.getContext('2d');
ctx.beginPath();
ctx.fillStyle = 'blue';
ctx.strokeStyle = 'blue';
ctx.fillRect(0, 0, 40, 40);
ctx.strokeRect(0, 0, 40, 40);
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = 'red';
ctx.strokeStyle = 'red';
ctx.fillRect(260, 0, 40, 40);
ctx.strokeRect(260, 0, 40, 40);
ctx.closePath();




ctx.beginPath();
ctx.fillStyle = 'red';
ctx.strokeStyle = 'red';
ctx.fillRect(110, 151, 40, 40);
ctx.strokeRect(110, 151 , 40, 40);
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'yellow';
ctx.strokeStyle = 'green';
ctx.arc(220,230,15,1.5*Math.PI,5*Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'yellow';
ctx.strokeStyle = 'green';
ctx.arc(70,230,15,1.5*Math.PI,5*Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();




ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'white';
ctx.strokeStyle = 'green';
ctx.arc(150,300,50,1.5*Math.PI,2.5*Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();


ctx.beginPath();
ctx.fillStyle = 'green';
ctx.strokeStyle = 'green';
ctx.fillRect(150, 150, 0.5, 300);
ctx.strokeRect(150, 150, 0.5, 300);
ctx.closePath();



ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'white';
ctx.strokeStyle = 'green';
ctx.arc(150,300,65,1.*Math.PI,1.5*Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = 'black';
ctx.strokeStyle = 'black';
ctx.fillRect(270, 270, 30, 30);
ctx.strokeRect(270, 270, 30, 30);
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = 'black';
ctx.strokeStyle = 'black';
ctx.fillRect(240, 270, 30, 30);
ctx.strokeRect(240, 270, 30, 30);
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = 'black';
ctx.strokeStyle = 'black';
ctx.fillRect(270, 240, 30, 30);
ctx.strokeRect(270, 240, 30, 30);
ctx.closePath();
// linha quebrada
ctx.beginPath();
ctx.fillStyle = 'yellow';
ctx.strokeStyle = 'yellow';
ctx.fillRect(0, 270, 30, 30);
ctx.strokeRect(0, 270, 30, 30);
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = 'yellow';
ctx.strokeStyle = 'yellow';
ctx.fillRect(30, 270, 30, 30);
ctx.strokeRect(30, 270, 30, 30);
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = 'yellow';
ctx.strokeStyle = 'yellow';
ctx.fillRect(0, 240, 30, 30);
ctx.strokeRect(0, 240, 30, 30);
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = 'aqua';
ctx.strokeStyle = 'aqua';
ctx.fillRect(0, 120, 30, 30);
ctx.strokeRect(0, 120, 30, 30);
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = 'aqua';
ctx.strokeStyle = 'aqua';
ctx.fillRect(0, 150, 30, 30);
ctx.strokeRect(0, 150, 30, 30);
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = 'aqua';
ctx.strokeStyle = 'aqua';
ctx.fillRect(270, 135, 30, 30);
ctx.strokeRect(270, 135, 30, 30);
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = 'green';
ctx.strokeStyle = 'green';
ctx.fillRect(0, 150, 300, 0.5);
ctx.strokeRect(0, 150, 300, 0.5);
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'white';
ctx.strokeStyle = 'green';
ctx.arc(150,150,50,1.*Math.PI,2.*Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'white';
ctx.strokeStyle = 'green';
ctx.arc(138,150,60,1.*Math.PI,1.3*Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'white';
ctx.strokeStyle = 'green';
ctx.arc(162,150,60,1.7*Math.PI,2.*Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'blue';
ctx.strokeStyle = 'blue';
ctx.moveTo(150,150);
ctx.lineTo(10,10);
ctx.fill();
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'red';
ctx.strokeStyle = 'red';
ctx.moveTo(150,150);
ctx.lineTo(290,10);
ctx.fill();
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'aqua';
ctx.strokeStyle = 'green';
ctx.arc(150,120,12,1.5*Math.PI,5*Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();