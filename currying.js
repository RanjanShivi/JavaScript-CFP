/*
Currying is a technique in which we simply wrap function inside a function,
which means we are going to return a function from another function.

function calculateVolume(length) {
        return function (breadth) {
            return function (height) {
                return length * breadth * height;
            }
        }
    }
    console.log(calculateVolume(4)(5)(6));
*/
function std(std){
    //filter std wise operations
    return function sec(sec){
        //filter sec wise operations
        return function perct(marks){
            //filter
        }
    }
}

//let val = std("5th")("c")("90");
let val = std("5th")("c");
let ninty = val("90");
let eighty = val("80");
let fifty = val("50");

