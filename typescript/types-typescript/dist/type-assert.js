"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var userName;
userName = 'mengeroshi';
var message = userName.length > 5 ?
    "Welcome " + userName :
    'Username is too short';
console.log('message', message);
var userNameWithId = 'dopellganger';
userName = userNameWithId.substring(0, 10);
console.log('userName: ', userName);
//Sinatxis as
message = userName.length > 5 ?
    "Welcome " + userName :
    'Username is too short';
var helloUser;
helloUser = 'hello obo';
userName = helloUser.substring(6);
console.log(userName);
