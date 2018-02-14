function Person(){}

Person.prototype.walk = function(){
  console.log("I am walking");
}

Person.prototype.sayHello = function(){
  console.log("Hello");
}


function Student(){
  Person.call(this);
}

Student.prototype = new Person();
Student.prototype.constructor = Student
Student.prototype.sayHello = function(){
  console.log("hi, I am a student");
}

Student.prototype.sayGoodBye = function(){
  console.log("GoodBye");
}


let student1 = new Student();
student1.sayHello();
student1.walk();
student1.sayGoodBye();

console.log(student1 instanceof Person);
console.log(student1 instanceof Student)

