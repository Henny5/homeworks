(function () {
  "use strict";

  const canvas = document.getElementById("theCanvas");
  const context = canvas.getContext("2d");

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  window.addEventListener("resize", resizeCanvas);
  resizeCanvas();

  class Ant {
    constructor(color) {
      this.color = color;

      this.x = canvas.width / 2;
      this.y = canvas.height / 2;
      this.setDirection();

      console.log(this.dx, this.dy);
    }

    move() {
      this.x += this.dx;
      this.y += this.dy;

      if (this.y < 0) {
        this.y = canvas.height;
      } else if (this.y > canvas.height) {
        this.y = 0;
      }

      if (this.x < 0) {
        this.x = canvas.width;
      } else if (this.x > canvas.width) {
        this.x = 0;
      }

      context.fillStyle = this.color;
      context.beginPath();
      context.fillRect(this.x, this.y, 4, 4);
      context.fill();

      this.moves++;
      if (this.moves > this.times) {
        this.setDirection();
      }
    }

    setDirection() {
      this.dx = Math.random() * 2 - 1;
      this.dy = Math.random() * 2 - 1;
      this.times = Math.floor(Math.random() * 50);
      this.moves = 0;
    }
  }

  const ants = [];
  ants.push(new Ant("black"));

  setInterval(() => {
    context.clearRect(0, 0, canvas.width, canvas.height);
    ants.forEach((ant) => ant.move());
  }, 20);

  const antColorInput = document.getElementById("color");
  const antAmntInput = document.getElementById("numofAnts");
  document.getElementById("addAnt").addEventListener("submit", (e) => {
    e.preventDefault();
    for (let i = 0; i < antAmntInput.value; i++) {
      ants.push(new Ant(antColorInput.value));
    }
  });
})();
