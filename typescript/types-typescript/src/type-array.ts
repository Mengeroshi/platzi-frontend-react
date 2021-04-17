//corchetes []
//tipo Explicito

let users: string[];

users = ['axwell', 'ingrosso', 'angello'];

//users =[1,true, 'test'] ERROR

//tipo inferido

let otherUsers = ['axwell', 'ingrosso', 'angello'];
//users =[1,true, 'test'] ERROR


//ARRAY <TIPO>
let pictureTitles: Array <string>;
pictureTitles = ['Dallback', 'Wyman', 'Vangellis'];


//accediendo a los valores

console.log(users[0])
console.log(otherUsers[0])


//Propiedades en Array

console.log('users length', users.length)

//uso de funciones

users.push('prydz');
users.sort();
console.log('users',users)