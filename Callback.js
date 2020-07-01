// function print(data) {
//     console.log(data)
// }

// function a() {
//     print("Hello User")
// }
// a();

var UserData = {
    name: "Azizul Islam",
    age: 18,
    email: 'azizuls@gmail.com'
}

function User(data, callback) {
    console.log(`User Name is ${data.name} and age is ${data.age}`);
    callback(data.email)
}
//first way
// User(UserData, function(a) {
//     console.log(`User E-mail is ${a}`)
// })

//second way
User(UserData, email);

function email(a) {
    console.log(`User E-mail is ${a}`)
}


//afdddddddddddfadsssssssssssssssssssssssssssssssssssssssss
function print(data, c1, c2) {
    console.log(`Original value is ${data}`);
    c1(data);
    c2(data);
}
print("My name is Azizul Islam", function(a) {
    console.log(`Uppercase: ${a.toUpperCase()}`)
}, function(b) {
    console.log(`Lowercase : ${b.toLowerCase()}`)
})