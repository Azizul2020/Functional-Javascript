function outer(a) {
    let b = 10;

    function sum() {
        let res = a + b;
        return a + b;
    }
    return sum;
}
console.dir(outer(5)); // here a and b are two closure
console.log(outer(20)());