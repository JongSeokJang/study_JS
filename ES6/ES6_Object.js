const a = 1;
const b = "Wow";
const sayYeah = () =>{
  console.log("Yeah");
}
const object2 = {
  sayHello() {
    console.log("hello")
  },
  sayYeah,
  [a + 3] : "four",
  ["Say" + b](){
    console.log("Wow");
  }
};

