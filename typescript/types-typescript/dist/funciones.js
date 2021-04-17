"use strict";
// const createPicture = (title:string, date:string, size:SquareSize)=>{
//     console.log('Creating Picture: ', title, date, size);
// }
// createPicture('My birthday', '2020-03-10','100x100');
// //createPicture('Colombia trip', '2020-03-10' ) //error
var createPicture = function (title, date, size) {
    console.log('Creating Picture: ', title, date, size);
};
createPicture('My birthday', '2020-03-10', '100x100');
createPicture('Colombia trip', '2020-03-10');
var createPic = function (title, date, size) {
    return {
        title: title,
        date: date,
        size: size,
    };
};
var picture = createPic('Platzi Session', '2020-03-10', '1000x1000');
console.log('picture', picture);
//Tipo de retonrno
var handleErrorObo = function (code, message) {
    if (message == 'error') {
        throw new Error(message + ". Code Error: " + code);
    }
    else {
        return 'An Error has ocurred';
    }
};
try {
    var result = handleErrorObo(200, 'OK');
    console.log(result);
    result = handleErrorObo(404, 'error');
    console.log(result);
}
catch (_a) {
}
