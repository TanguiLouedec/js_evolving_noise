const canvas = document.getElementById('grain');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.fillStyle = 'black';
ctx.globalAlpha = 0.7;

for (let i = 0; i < canvas.width; i++) {
  for (let j = 0; j < canvas.height; j++) {
    let x = Math.random();
    if (x < 0.1) {
      ctx.fillRect(i, j, 1, 1);
    }
  }
}
