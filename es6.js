//ES6

var Default_function_parameter;
function multiply(a, b = 2) {
    return a * b;

}
console.log(multiply(5,2));
// expected output:10
console.log(multiply(5));
// expected output: 10

var Template_Literals;
// In ES6, we can use a new syntax ${PARAMETER} inside of the back-ticked string.
let firstName = "smita"
let lastName = "shinde"
console.log(`Your name is ${firstName} ${lastName}`)

var Mluti_line_Strings;
let poemData = `Johny Johny Yes Papa,     
                Eating sugar?  No, papa!
                Telling lies? No, papa!
                Open your mouth Ah, ah, ah!`

console.log(poemData)

var spread_operator;
var arr1 = [0, 1, 2];
var arr2 = [3, 4, 5];
var arr3 = [...arr1, ...arr2];// Append all elements in arr2 after arr1 and return
console.log(arr3);
//Equate to
var arr4 = arr1.concat(arr2);
console.log(arr4);

//clone object
var obj1 = { foo: 'bar', x: 42 };
var obj2 = { foo: 'baz', y: 13 };
var clonedObj = { ...obj2 };
console.log(clonedObj)

//mergeddb
var mergedObj = { ...obj1, ...obj2 };
console.log(mergedObj)

var destructuring_assignment
// it possible to unpack values from arrays, or properties from objects, into distinct variables.
let a, b, rest;
[a, b] = [10, 20];
console.log(a);
// expected output: 10
console.log(b);
// expected output: 20
[a, b, ...rest] = [10, 20, 30, 40, 50];
console.log(a);
// expected output: 10
console.log(b);
// expected output: 20
console.log(rest);
// expected output: Array [30,40,50]

//const string

const foo = ['one', 'two', 'three'];

const [red, yellow, green] = foo
console.log(red); // "one"
console.log(yellow); // "two"
console.log(green); // "three"

var obj;
({ a, b, ...rest } = { a: 10, b: 20, c: 30, d: 40 });
console.log(a); // 10
console.log(b); // 20
console.log(rest); // {c: 30, d: 40}

//variable assing
const user = {
    id: 42,
    isVerified: true
};
const { id, isVerified } = user;
console.log(id); // 42
console.log(isVerified); // true

var Arrow_Functions;
//already done
var Promises;
//done
var Block_Scoped_Construct_LetandConst;
//done

let Module;
//Modules with import and export operands.
//We can import userID variable and getName method using import Statement
export var userID = 10;
export function getName(name) {

};

import {console} from 'console';
import {userID, getName } from 'mosule';
console.log(userId);//10

