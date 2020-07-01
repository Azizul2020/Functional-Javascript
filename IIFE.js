//Immediately Invoked Function Expression
//It is also call as self-executed-function;
(function(a) {
    let b = 10;
    console.log(a + b)
})(20);

(function() {
    let b = 10;
    console.log(`My roll number is ${b+29}`)
})();