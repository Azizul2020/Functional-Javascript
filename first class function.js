// If any function to be a first class function must have following condition;

// 1.variable store

let add = function(a, b) {
    return a + b;
}
console.log(add(10, 50));

// 2.Declaration as an object element
let obj = {
    name: "Azizul Islam",
    add: function(a, b) {
        return a + b;
    }
}
let show = obj;
console.log(show.add(20, 10));

// 3. Passed as a argument;

function argument(name, sum) {
    return name + sum();
}

function a() {
    return "How are you?"
}
var c = argument("Azizul Islam, ", a);
console.log(c);

//4. returning a function inside a function

function abc() {
    return function(a, b) {
        //return a + b;
        return a + b;
    }
}
console.log(abc()(10, 20))



// // Scope
// const i = 30;

// function a() {
//     const i = 20;

//     return i;
// }
// console.log(a());
// console.log(i)