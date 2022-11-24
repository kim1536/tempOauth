'use strict';



// function add(x, callback){
//     let sum =+ x;
//     console.log(sum);
//     callback(sum);
// }

// add(3, function(result){

//     add(result, function(result2){

//         add(result2, function(result3){

//             add(result3, function(result4){

//                 console.log(result4);
//             })
//         })
//     })
// });

// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("ellie");
//     },2000)
// })

// promise.then((data) => {
//     console.log(data);
// }).catch;




const userInfo = (users, callback) => {
    const usersInfo = JSON.parse(users)
    console.log(usersInfo);
    callback();
}

const userInfo2 = (users, callback) => {
    const usersInfo = JSON.parse(users)
    console.log(usersInfo);
    callback();
}

const userInfo3 = (users, callback) => {
    const usersInfo = JSON.parse(users)
    console.log(usersInfo);
    callback();
}






// const getUser = new Promise ((resolve, reject) => {
//     console.log("promise 영역")

//     const req = new XMLHttpRequest();
//     req.open('GET','http://localhost:3001/users');
//     req.onload = () => {
//         if (req.status === 200) {
//             resolve(req.response);
//             userInfo(req.response, () => {
//                 console.log("req 영역",1)
//             });

//             const req2 = new XMLHttpRequest();
//             req2.open('GET','http://localhost:3001/users');
//             req2.onload = () => {
//                 if (req2.status === 200) {
//                     resolve(req2.response);
//                     userInfo(req2.response, () => {
//                         console.log("req 영역",2)
//                     })
//                 }
//                 else{
//                     reject(new Error("서버와 거래 불가"))
//                 }

//                 const req3 = new XMLHttpRequest();
//                 req3.open('GET','http://localhost:3001/users');
//                 req3.onload = () => {
//                     if (req3.status === 200) {
//                         resolve(req3.response);
//                         userInfo(req3.response, () => {
//                             console.log("req 영역",3)
//                         })
//                     }
//                     else{
//                         reject(new Error("서버와 거래 불가"))
//                     }
//                 };
//                 req3.send();
//             };
//             req2.send();
//         }
//         else{
//             reject(new Error("서버와 거래 불가"))
//         }
//     };
//     req.send();    
// });

// getUser.then((data) => userInfo(data, () => {
//     console.log("then영역")
// })).catch();

const getUser2 =  new Promise ((resolve, reject) => {
    console.log("promise 영역")
    const req = new XMLHttpRequest();
    req.open('GET','http://localhost:3001/users');
    req.onload = () => {
        if (req.status === 200) {
            resolve(req.response);
            userInfo(req.response, () => {
                console.log("req 영역",1)
            });
        }
        else{
            reject(new Error("서버와 거래 불가"))
        }
    };
    req.send();
    
    const req2 = new XMLHttpRequest();
        req2.open('GET','http://localhost:3001/users');
        req2.onload = () => {
            if (req2.status === 200) {
                resolve(req2.response);
                userInfo(req2.response, () => {
                    console.log("req 영역",2)
                })
            }
            else{
                reject(new Error("서버와 거래 불가"))
            }
        };
    req2.send();

    const req3 = new XMLHttpRequest();
    req3.open('GET','http://localhost:3001/users');
    req3.onload = () => {
        if (req3.status === 200) {
            resolve(req3.response);
            userInfo(req3.response, () => {
                console.log("req 영역",3)
            })
        }
        else{
            reject(new Error("서버와 거래 불가"))
        }
    };
    req3.send();
});


getUser2


   