(CSS.paintWorklet || paintWorklet).addModule('smooth-corners.js')


registerPaint('smooth-corners', class {
  paint(ctx, size) {
    ctx.fillStyle = 'black'

    // n=4 draw a squircle
    const n = 4

    let m = n
    if (n > 100) m = 100
    if (n < 0.00000000001) m = 0.00000000001
    const r = size.width / 2
    const w = size.width / 2
    const h = size.height / 2

    ctx.beginPath();

    for (let i = 0; i < (2*r+1); i++) {
      const x = (i-r) + w
      const y = (Math.pow(Math.abs(Math.pow(r,m)-Math.pow(Math.abs(i-r),m)),1/m)) + h

      if (i == 0)
        ctx.moveTo(x, y)
      else
        ctx.lineTo(x, y)
    }

    for (let i = (2*r); i < (4*r+1); i++) {
      const x = (3*r-i) + w
      const y = (-Math.pow(Math.abs(Math.pow(r,m)-Math.pow(Math.abs(3*r-i),m)),1/m)) + h
      ctx.lineTo(x, y)
    }

    ctx.closePath()
    ctx.fill()
  }
})

registerPaint('smooth-corners', class {
  static get inputProperties() {
      return [
          '--smooth-corners'
      ]
  }
  paint(ctx, size, styleMap) {
    const exp = styleMap.get('--smooth-corners').toString()

    const n = exp
  }
})














/*
const canvas = document.getElementById("my-canvas");
const ctx = canvas.getContext("2d");
const startBtn = document.getElementById("start-button");

const bgImg = new Image();
bgImg.src = "../images/bg.png";

const playerImg = new Image();
playerImg.src = "../images/flappy.png";

const obstTop = new Image();
obstTop.src = "../images/obstacle_top.png";

const obstBottom = new Image();
obstBottom.src = "../images/obstacle_bottom.png";

let playerX = 20;
let playerY = 20;
const gravitySpeed = 3;
let gravity = gravitySpeed;

function drawBg() {
  ctx.drawImage(bgImg, 0, 0, canvas.width, canvas.height);
}

function drawFlappy() {
  ctx.drawImage(playerImg, playerX, playerY, 40, 30);
}

function drawObstacle() {
  ctx.drawImage(obstTop, 100, 0, 50, 100);
  ctx.drawImage(obstBottom, 100, 300, 50, 200);
}

function animate() {
  playerY += gravity;
  drawBg();
  drawFlappy();
  drawObstacle();

  requestAnimationFrame(animate);
}

function startGame() {
  animate();
}

let gravityFallback;

window.addEventListener("keydown", event => {
  if (event.code === "Space") {
    gravity = -gravitySpeed;
    clearTimeout(gravityFallback);
    gravityFallback = setTimeout(() => {
      gravity = gravitySpeed;
    }, 250);
  }
});

window.addEventListener("load", () => {
  startBtn.addEventListener("click", () => {
    startGame();
  });
});
*/