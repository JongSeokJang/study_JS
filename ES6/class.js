var Human = function(type){
  this.type = type || "human";
};

Human.isHuman = function(human){
  return human instanceof Human
}

Human.prototype.breathe = function(){
  console.log("h-a-a-a-m");
};


var JS = function(type, firstName, lastName){
  this.firstName = firstName;
  this.lastName = lastName;
}

JS.prototype = Object.create(Human.prototype);
JS.prototype.constructor = JS;
JS.prototype.sayName = function(){
  console.log(this.firstName + " " + this.lastName);
};

var oldJS = new JS("human", "JongSeok", "Jang");
Human.isHuman(oldJS);



class Human2 {
  constructor(type = "human"){
    this.type = type;
  }

  static isHuman(human){
    return human instanceof Human;
  }

  breath(){
    console.log("h-a-a-a-m");
  }
}


class JS2 extends Human2{
  constructor(type, firstName, lastName){
    super(type);
    this.firstName = firstName;
    this.lastName = lastName;
  }

  sayName(){
    super.breathe();
    console.log(`${this.firstName} ${this.lastName}`);
  }
}

const NewJS = new JS2("human", "JS", "Jang");
Human2.isHuman(NewJS);

