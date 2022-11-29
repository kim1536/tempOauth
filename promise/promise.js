'use strict';



// add(x, callback){
//     let sum =+ x;
//     console.log(sum);
//     callback(sum);
// }

// add(3, result){

//     add(result, result2){

//         add(result2, result3){

//             add(result3, result4){

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




// const userInfo = (users, callback) => {
//     const usersInfo = JSON.parse(users)
//     console.log(usersInfo);
//     callback();
// }

// const userInfo2 = (users, callback) => {
//     const usersInfo = JSON.parse(users)
//     console.log(usersInfo);
//     callback();
// }

// const userInfo3 = (users, callback) => {
//     const usersInfo = JSON.parse(users)
//     console.log(usersInfo);
//     callback();
// }






// const getUser = new Promise ((resolve, reject) => {
//     console.log("promise 영역")

//     const req = new XMLHttpRequest();
//     req.open('GET','http://localhost:3001/users');
//     req.onload = () => {
//         if (req.status === 200) {
//             resolve(req.response);
//             userInfo(req.response, () => {
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

// const getUser2 =  new Promise ((resolve, reject) => {
//     console.log("promise 영역")
//     const req = new XMLHttpRequest();
//     req.open('GET','http://localhost:3001/users');
//     req.onload = () => {
//         if (req.status === 200) {
//             resolve(req.response);
//             userInfo(req.response, () => {
//             });
//         }
//         else{
//             reject(new Error("서버와 거래 불가"))
//         }
//     };
//     req.send();
    
//     const req2 = new XMLHttpRequest();
//         req2.open('GET','http://localhost:3001/users');
//         req2.onload = () => {
//             if (req2.status === 200) {
//                 resolve(req2.response);
//                 userInfo(req2.response, () => {
//                     console.log("req 영역",2)
//                 })
//             }
//             else{
//                 reject(new Error("서버와 거래 불가"))
//             }
//         };
//     req2.send();

//     const req3 = new XMLHttpRequest();
//     req3.open('GET','http://localhost:3001/users');
//     req3.onload = () => {
//         if (req3.status === 200) {
//             resolve(req3.response);
//             userInfo(req3.response, () => {
//                 console.log("req 영역",3)
//             })
//         }
//         else{
//             reject(new Error("서버와 거래 불가"))
//         }
//     };
//     req3.send();
// });

// getUser2




// order(callback) {
//     setTimeout(){
//       console.log('초코칩 프라푸치노 나왔습니다.');
//       () {
//         setTimeout(){
//           console.log('티라미수 나왔습니다.');
//           () {
//             setTimeout(){
//               console.log('그린티라떼 나왔습니다.');
//               () {
//                 setTimeout(){
//                   console.log('망고 블렌디드 나왔습니다.');
//                   callback();
//                 },1500);
//               })();
//             },1500);
//           })();
//         },1500);
//       })();
//     }, 1500);
//   }
//   order() {
//     console.log('아메리카노 나왔습니다.');
//   });

//   let order1 = (name) => {
//     console.log(name + ' 나왔습니다.');
//     setTimeout(order2, 500, '티라미수');
//   };
  
//   let order2 = (name) => {
//     console.log(name + ' 나왔습니다.');
//     setTimeout(order3, 500, '그린티라떼');
//   };
  
//   let order3 = (name) => {
//     console.log(name + ' 나왔습니다.');
//     setTimeout(order4, 500, '망고 블렌디드');
//   };
  
//   let order4 = (name) => {
//     console.log(name + ' 나왔습니다.');
//     order5('아메리카노');
//   }
  
//   let order5 = (name) => {
//     console.log(name + ' 나왔습니다.');
//   }
  
//   setTimeout(() => {
//     order1('초코칩 프라푸치노')
//   }, 500);





//   new Promise((resolve) => {
//     setTimeout(() =>  {
//       resolve( console.log('초코칩 프라푸치노 나왔습니다.'));
//     }, 500);
//   })
//   .then(() => {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve(console.log('티라미수 나왔습니다.'));
        
//       }, 500);
//     });
//   })
//   .then(() => {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve(console.log('그린티라떼 나왔습니다.'));
//       }, 500);
//     });
//   })
//   .then(() => {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve(console.log('망고 블렌디드 나왔습니다.'));
//       }, 500);
//     });
//   })
//   .then(() => {
//     return new Promise((resolve) => {
//       resolve(console.log('아메리카노 나왔습니다.'));
//     });
//   });


  

//   order1()
// .then(order2)
// .then(order3)
// .then(order4)
// .then(order5)

// order1() => {
//   return new Promise((resolve) {
//     setTimeout(() {
//       resolve();
//       console.log('초코칩 프라푸치노 나왔습니다.');
//     }, 500);
//   });
// }

// order2() {
//   return new Promise((resolve) {
//     setTimeout(() {
//       resolve();
//       console.log('티라미수 나왔습니다.');
//     }, 500);
//   });
// }

// order3() {
//   return new Promise((resolve) {
//     setTimeout(() {
//       resolve();
//       console.log('그린티라떼 나왔습니다.');
//     }, 500);
//   });
// }

// order4() {
//   return new Promise((resolve) {
//     setTimeout(() {
//       resolve();
//       console.log('망고 블렌디드 나왔습니다.');
//     }, 500);
//   });
// }

// order5() {
//   return new Promise((resolve) {
//     resolve();
//     console.log('아메리카노 나왔습니다.');
//   });
// }


// console.log('number 1')
// new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         resolve('number 2')},2000)
// }).then((res)=>{
//     console.log(res)
//     new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             resolve('number 3')},2000)
//         }).then((res) => {
//             console.log(res)
//         });
// });


async function order() {
    await order1('초코칩 프라푸치노');
    await order1('티라미수');
    await order1('그린티라떼');
    await order1('망고 블렌디드');
    await order2('아메리카노');
  }

function order1(item) {
   return new Promise((resolve, reject) => {
        setTimeout(()=> {
            resolve(console.log(item + ' 나왔습니다.'))
        },500)
    })
  }
  
  function order2() {
    return new Promise(resolve => {
      console.log('아메리카노 나왔습니다.');
      resolve();
    });
  }
  
  order();


