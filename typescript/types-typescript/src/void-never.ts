function showInfo(user:any):any{
    console.log('UserInfo', user.id, user.name, user.firstName);
}

showInfo({
    id:1,
    name:"mengeroshi",
    firstName: "Javier",
})


const showFormatedInfo = (user:any) =>{
    console.log('UserInfo',`
    id: ${user.id},
    userName: ${user.name},
    fistName: ${user.firstName}
    `)
}

showFormatedInfo({
    id:1,
    name:"mengeroshi",
    firstName: "Javier",
})

//tipo void como tipo de dato
// let unusable:void;
// unusable = null;
// unusable = undefined


//NEVER

const handleError = (code:number, message:string):never =>{
    //Process Your Code here
    //Generate a message
    throw new Error(`${message}. Code: ${code}`)
}

try{
    handleError(404, "notFound");
}catch{

}



const someNumbers = (limit:number):never =>{
    let sum = 0;
    while(true){
        sum++
    }
}

someNumbers(10)




