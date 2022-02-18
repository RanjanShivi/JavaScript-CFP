/*
An async function is a function declared with the async keyword,
and the await keyword is permitted within it.
async/await simplify the syntax necessary to consume asynchronous promise-based APIs.

function resolveAfter2Seconds() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('resolved');
    }, 2000);
  });
}
async function asyncCall() {
  console.log('calling');
  const result = await resolveAfter2Seconds();
  console.log(result);
  // expected output: "resolved"
}
asyncCall();
*/

async function display(){
    try{
        let user = await login("sgw@com",12345)
        let ticket = await bookticket(user.email);
        let snacks = await snacks(ticket);
        console.log("DONE");
    }
    catch(err){
        console.log(err)
    }
}
display()