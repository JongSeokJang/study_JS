var sayYeah = function(){
  console.log("Yeah");
}

var a = 1;
var b = "Wow";
var object = {
  sayHello: function(){
    console.log("hello");
  },
  sayYeah : sayYeah
};

object[a + 3] = "four"
object["say" + b] = function(){
  console.log("Wow");
};
