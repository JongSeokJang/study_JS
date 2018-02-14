function Person(gender) {
  this.gender = gender;
  console.log("Person instantiated");
}

Person.prototype.sayHello = function(){
  console.log("Hello");
}
Person.prototype.sayGender = function(){
  console.log(this.gender)
}

let person1 = new Person("Male");
let person2 = new Person("feMale");
let genderTeller = person1.sayGender;


console.log( "person1 is a " + person1.gender)
person1.sayHello()
person1.sayGender()
genderTeller()
console.log( genderTeller === person1.sayGender);
console.log( genderTeller === Person.prototype.sayGender)

