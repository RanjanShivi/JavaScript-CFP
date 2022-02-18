//Promise is use to handle async func
/*
It has 4 states:
(resolve, reject, pending, settled)
success, failure, waiting, backend operation success but no response
*/
function login (email, phone) {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
        resolve([email, phone])
    },5000)
})
}

function bookticket (email){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
        resolve(["movie1","movie2"])
    },5000)
})
}

function snacks (tickets){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
        resolve(["snack1","snack2"])
    },5000)
})
}

login("dss@hgv",12345)
.then(()=>{
    bookticket()
    .then(()=>{
        snacks()
    })
})
.catch((err)=>{
    console.log(err)
})