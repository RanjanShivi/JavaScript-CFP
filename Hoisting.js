//Hoisting:Hoisting is the default behavior of moving all the declarations at the top of the scope before code execution.

//Practice Program1
function codeHoist(){
    a = 10;
    let b = 50;
}
codeHoist();
console.log(a); // 10
console.log(b); // ReferenceError : b is not defined

//program2
// var code (global)
console.log(name); // undefined
var name = 'Mukul Latiyan';

//program3
// program to display value
a = 5;
console.log(a);
var a; // 5  