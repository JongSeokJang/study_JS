function Person(name, gender){
  this.name = name;
  this.gender = gender;

  this.sayHello = function() {
    console.log(this.name + ' said "hello"');
  }
}

let zero = new Person("zero", "m");
let hero = new Person("Hero", "f");

zero.sayHello();
hero.sayHello();
