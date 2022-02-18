//Callback is a func passed as an argument to another function
/*
function myDisplayer(some) {
    console.log(some);
}
function myCalculator(num1, num2, myCallback) {
    let sum = num1 + num2;
    myCallback(sum);
}
myCalculator(5, 5, myDisplayer);
*/

function login (email, phone, callback) {
    setTimeout(()=>{
        callback([email, phone])
    },5000)
}

function bookticket (email, callback){
    setTimeout(()=>{
        callback(["movie1","movie2"])
    },5000)
}

function snacks (tickets, callback){
    setTimeout(()=>{
        callback(["snack1","snack2"])
    },5000)
}

const user = login("email", "23456", (val)=>{
                bookticket(val, ()=>{
                    snacks(val, ()=>{
                        console.log("DONE");
                    });
                });
            });