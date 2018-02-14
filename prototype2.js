function Vehicle(name, speed){
  this.name = name;
  this.speed = speed;
}

Vehicle.prototype.drive = function() {
  console.log(this.name + ' runs at ' + this.speed);
}

let tico = new Vehicle("tico", 50);
tico.drive();

function Sedan(name, speed, maxSpeed){
  Vehicle.apply(this, arguments);
  this.maxSpeed = maxSpeed;
}
Sedan.prototype = Object.create(Vehicle.prototype);
Sedan.prototype.constructor = Sedan;
Sedan.prototype.boost = function(){
  console.log(this.name + ' boosts its speed at ' + this.maxSpeed);
};

let sonata = new Sedan('sonata', 100,200);
sonata.drive();
sonata.boost();


function Truck(name, speed, capacity){
  Vehicle.apply(this, arguments);
  this.capacity = capacity;
}
Truck.prototype = Object.create(Vehicle.prototype);
Truck.prototype.constructor = Truck
Truck.prototype.load = function(weight){
  if(weight > this.capacity){
    return console.error("Can't load this");
  }
  else{
    return console.log("done loading");
  }
};

let boongboong = new Truck("boongboong", 40, 100);
boongboong.drive();
boongboong.load(120);

