export default class Snake {
  constructor(
    context,
    THING_SIZE,
    snakeHead,
    canvas,
    gameOver,
    apple,
    speed,
    score,
    crunchSound
  ) {
    this.context = context;
    this.THING_SIZE = THING_SIZE;
    this.snakeHead = snakeHead;
    this.canvas = canvas;
    this.gameOver = gameOver;
    this.apple = apple;
    this.speed = speed;
    this.score = score;
    this.crunchSound = crunchSound;
    this.x = 0;
    this.y = 0;
    this.direction = "ArrowRight";

    document.addEventListener("keydown", (event) => {
      switch (event.key) {
        case "ArrowUp":
        case "ArrowDown":
        case "ArrowLeft":
        case "ArrowRight":
          this.direction = event.key;
      }
    });

    this.draw();
  }

  draw() {
    this.context.drawImage(this.snakeHead, this.x, this.y, this.THING_SIZE, this.THING_SIZE);
  }

  move() {
    let x = this.x;
    let y = this.y;

    switch (this.direction) {
      case "ArrowRight":
        x += this.THING_SIZE;
        break;
      case "ArrowLeft":
        x -= this.THING_SIZE;
        break;
      case "ArrowUp":
        y -= this.THING_SIZE;
        break;
      case "ArrowDown":
        y += this.THING_SIZE;
        break;
    }

    if (
      x < 0 ||
      x > this.canvas.width - this.THING_SIZE ||
      y < 0 ||
      y > this.canvas.height - this.THING_SIZE
    ) {
      this.gameOver = true;
    } else {
      this.x = x;
      this.y = y;
    }

    if (this.x === this.apple.x && this.y === this.apple.y) {
      this.score++;
      this.speed = this.speed * 0.9;
      this.crunchSound.currentTime = 0;
      this.crunchSound.play();
      this.apple.move();
    }
    this.draw();
  }
}
