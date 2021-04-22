"use strict";
//corchetes []
//tipo Explicito
var users;
users = ['axwell', 'ingrosso', 'angello'];
//users =[1,true, 'test'] ERROR
//tipo inferido
var otherUsers = ['axwell', 'ingrosso', 'angello'];
//users =[1,true, 'test'] ERROR
//ARRAY <TIPO>
var pictureTitles;
pictureTitles = ['Dallback', 'Wyman', 'Vangellis'];
//accediendo a los valores
console.log(users[0]);
console.log(otherUsers[0]);
//Propiedades en Array
console.log('users length', users.length);
//uso de funciones
users.push('prydz');
users.sort();
console.log('users', users);
