// E S 5

function add(a, b) {
    return a + b;
}
console.log(add(20, 30));

// Arrow
var add = (a, b) => a + b;
console.log(add(50, 545))
    //E S 5
function name(name) {
    return "Hello " + name;
}
console.log(name("Azizul"))


//Arrow
var name = name => "Hello " + name;
console.log(name("Azizul"))


//E S 5
function some() {
    return "Hello how are you?"
}
console.log(some());


//Arrow

var some = () => "Hello how are you?";
console.log(some());


//E S 5
function other() {
    var arr = [10, 20, 50, 52, 21, 25];
    return arr;
}
console.log(other());



// Arrow;

var other = () => {
    var arr = [10, 20, 50, 52, 21, 25];
    return arr;
}
console.log(other());


for (i in other()) {
    console.log(other()[i])
}

other().forEach(element => {
    console.log(element)
});