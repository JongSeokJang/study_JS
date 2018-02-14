function Person(name){
  this.name = name;
}

Person.prototype.sayHello = function(){
  console.log(this.name + ' say "Hello"');
}

let zero = new Person("zero");
console.log(zero.__proto__);
console.log(zero.__proto__.__proto__)
