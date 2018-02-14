function getClosure(){
  let text = "variable1"
  return function(){
    return text
  };
}


let closure = getClosure();
console.log(closure())


let base = "Hello, ";
function sayHelloTo(name){
  let text = base + name;
  return function(){
    console.log(text);
  };
}

let hello1 = sayHelloTo("JS");
let hello2 = sayHelloTo("YJ");
let hello3 = sayHelloTo("JW");
let hello4 = sayHelloTo("YD");


hello1()
hello2()
hello3()
hello4()


function Hello(name){
  this._name = name;
}

Hello.prototype.say = function(){
  console.log("hello, " + this._name);
}

let h1 = new Hello("JS");
let h2 = new Hello("EJ");
let h3 = new Hello("JW");
let h4 = new Hello("YD");


h1.say()
h2.say()
h3.say()
h4.say()
h1._name = "anonymous"
h1.say()



function hello(name){
  let _name = name;
  return function() {
    console.log("Hello, "+ _name);
  }
}

let hi1 = hello("JS");
let hi2 = hello("EJ");
let hi3 = hello("JW");

hi1()
hi2()
hi3()



let i 
for (i = 0; i < 10; i++){
  setTimeout(function() {
    console.log(i)
  },100)
}


let j
for ( j = 0; j < 10; j++){
  (function(k){
    setTimeout(function() {
      console.log(k)
    },100)
  })(j)
}
