'use strict';

class UserStorages {
    loginUser(id, password, onSuccess, onError) {
        if((id === 'test'&& password === '1234')||(id === 'aaaa'&& password === '1234') ) {
            onSuccess(id,password);
            console.log("loginUser")
        }
        else {
            onError(new Error('not found'));
        }
    };

    getRoles(user, onSuccess, onError){
        if (user === 'test') {
            onSuccess(user)
            console.log("getRoles")
        }
        else {
            onError(new Error('not found'));
        }
    } 
};

const userStorages = new UserStorages();
const id = prompt('id');
const password = prompt('password');

userStorages.loginUser(
    id, 
    password,
    (user,password)=>{
        userStorages.getRoles(
            user,
            (userRole) =>{
                alert(`hello ${userRole}`)
            },
            (err)=>{
                console.log(err);
            }
        )
    },
    (err)=>{
        console.log(err);
    }
);


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


function add(x, callback){
    let sum = x + x;
    console.log(sum);
    callback(sum);
}

add(3, function(result){
    add(result, function(result2){
        add(result2, function(result3){
            add(result3, function(result4){
                console.log("에너지 파")
            })
        })
    })
})