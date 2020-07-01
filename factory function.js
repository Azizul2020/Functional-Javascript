//Factory function means the factory of object
function factory(name) {
    return {
        name, //[this means name:name]
        b() { //[this means function b()]
            return "This is a function";
        }
    }
}
console.log(factory("Azizul Islam"));
console.log(factory("Azizul Islam").b());

c() {
    return "hello";

}
console.log(c())