
export default class Apple {
  constructor(context,appleImg,THING_SIZE, canvas) {
    this.context = context;
    this.appleImg = appleImg;
    this.THING_SIZE = THING_SIZE;
    this.canvas=canvas;
    this.move();
  }

  draw() {
    this.context.drawImage(this.appleImg, this.x, this.y, this.THING_SIZE, this.THING_SIZE);
  }

  move() {
    this.x = this.getRandomNumber(0, this.canvas.width - 1); //THING_SIZE);
    this.y = this.getRandomNumber(0, this.canvas.height - 1); //THING_SIZE);
    this.draw();
  }

  getRandomNumber(min, max) {
    let r = Math.floor(Math.random() * (max - min + 1)) + min;
    r = r - (r % this.THING_SIZE);
    return r;
  }
}
