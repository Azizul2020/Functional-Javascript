function first(name) {
    console.log("Hello " + name)
}
var show = first;
show("Azizul Islam");

//Inner Function
function Alladd(a, b) {
    function sum() {
        return a + b;
    }

    function sub() {
        return a - b;
    }

    function multiply() {
        return a * b;
    }

    function divided() {
        return a / b;
    }
    return sum() + sub() + multiply() + divided();
}
console.log(Alladd(20, 10))

// function in array
//let arr = [1, 2, 3, 4, 5, 6];

function some(a, b, c) {
    let arr = [a, b, c];

    function inner() {
        let add = a + b + c;
        return add;
    }
    //console.log(inner())
    arr.push(inner());
    return arr;
}

console.log(some(212, 325, 111))
console.log(some(212, 54454, 2416))
console.log(some(20, 30, 10))