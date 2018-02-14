function Car(){
  this.wheels = 4
  this.maxSpeed = 100

  this.goSide = function(side){
    console.log(side);
  }
  this.sound = function(){
    console.log("!!!!!!!!!");
  }

}
function Bus(){
  Car.call(this);
}

Bus.prototype = new Car();
Bus.prototype.constructor = Bus
Bus.prototype.sound = function(){
  console.log("!@#!$!@$!@#@!#!@#");
}


let car1 = new Car();
console.log(car1)
car1.goSide("left")
car1.sound()

let bus1 = new Bus();
bus1.sound()

