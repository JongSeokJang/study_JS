function Person(name, gender){
  this.name = name;
  this.gender = gender
}

Person.prototype.sayHello = function(){
  console.log(this.name + ' said "hello"');
}

let person1 = new Person("jongseok","m")
//console.l
person1.sayHello()
