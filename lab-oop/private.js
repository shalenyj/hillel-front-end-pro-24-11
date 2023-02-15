class Shape{
  #secret = 'My secret';
  constructor(name, color){
    this.name = name;
    this.color = color;
  }
  paint(){
    console.log(`Painting ${this.name} with color ${this.color}`)
  }
  #secretPaint(){
    console.log('We have some secret method')
  }
  //TODO: getter for private
}

const redTriangle = new Shape('triangle', 'green');
redTriangle.paint();
//redTriangle.#secretPaint()

class Rectangle extends Shape {
  constructor({name, color, width, height}){
    super(name, color)
    this.width = width;
    this.height = height;
  }
  get p(){
    return this.width + this.height
  }
  somePaint(){
   // this.#secretPaint()
   //TODO: show secret
   //TODO: change secret
  }
}

const blueRectangle = new Rectangle({ name: 'rectangle', color: 'blue', width: 15, height: 2 })

console.log(blueRectangle.p)
//blueRectangle.somePaint()