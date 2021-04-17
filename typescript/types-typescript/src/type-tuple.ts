export{};

let user: [number,string];
user = [1, 'obo'];
console.log('user: ', user)


//Tuplas con varios valores


let userInfo: [number, string, boolean];
userInfo = [2, 'Angello', true];


// array de tuplas

let array: [number, string][] = [];

array.push([1, 'AN21']);
array.push([2, 'Vangelli']);
array.push([3, 'Swoon']);

console.log('array', array );

//uso de funciones

array[2][1] = array[2][1].concat('001');

console.log('array', array );