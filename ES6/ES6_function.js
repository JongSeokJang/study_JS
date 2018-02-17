var object = {
  name : "JongSeok",
  friends : ["one", "two", "three"  ],
  alertFriends : function() {
    var self = this;
    this.friends.forEach(function(friend) {
      console.log(self.name + "and" + friend)
    });
  }
};
object.alertFriends();


const object2 = {
  name : "JongSeok2",
  friends : ["One", "Two", "Three" ],
  alertFriends() {
    this.friends.forEach( friend =>{
      console.log(this.name + "and" + friend);
    });
  }
};

object2.alertFriends();



var long = function(x) {
  return x + 1
};

const short = () => x + 1;




var func = function(msg){
  console.log(msg);
}
func(); // undefined


const func2 = (msg = "hello" ) =>{
  console.log(msg);
}
func2(); // default msg is Hello



var func3 = function(x){
  var args = Array.prototype.slice.call(arguments, 1);
  console.log(args.length);
};
func3(1,2,3,4);


const func4 = (x, ...y) =>{
  console.log(y.length);
};
func4(1,2,3,4);


var array = [1,2,3];
var func5 = function(x,y,z){
  console.log(x + y + z);
}

func5(array[0], array[1], array[2]);


func5.apply(null, array);

func5(...array);


