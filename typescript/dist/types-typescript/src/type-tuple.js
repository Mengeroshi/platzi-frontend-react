"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user;
user = [1, 'obo'];
console.log('user: ', user);
//Tuplas con varios valores
var userInfo;
userInfo = [2, 'Angello', true];
// array de tuplas
var array = [];
array.push([1, 'AN21']);
array.push([2, 'Vangelli']);
array.push([3, 'Swoon']);
console.log('array', array);
//uso de funciones
array[2][1] = array[2][1].concat('001');
console.log('array', array);
