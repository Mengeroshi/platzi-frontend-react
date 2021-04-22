export {}
let userName: any;
userName = 'mengeroshi';

let message: string = (<string>userName).length > 5 ? 
                        `Welcome ${userName}`: 
                        'Username is too short';

console.log('message', message);


let userNameWithId: any = 'dopellganger';

userName = (<string>userNameWithId).substring(0,10);

console.log('userName: ',userName)



//Sinatxis as

message = (userName as string).length > 5 ? 
                        `Welcome ${userName}`: 
                        'Username is too short';

let helloUser: any;
helloUser = 'hello obo';
userName = (helloUser as string).substring(6);
console.log(userName);

