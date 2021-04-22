"use strict";
function showInfo(user) {
    console.log('UserInfo', user.id, user.name, user.firstName);
}
showInfo({
    id: 1,
    name: "mengeroshi",
    firstName: "Javier",
});
var showFormatedInfo = function (user) {
    console.log('UserInfo', "\n    id: " + user.id + ",\n    userName: " + user.name + ",\n    fistName: " + user.firstName + "\n    ");
};
showFormatedInfo({
    id: 1,
    name: "mengeroshi",
    firstName: "Javier",
});
//tipo void como tipo de dato
// let unusable:void;
// unusable = null;
// unusable = undefined
//NEVER
var handleError = function (code, message) {
    //Process Your Code here
    //Generate a message
    throw new Error(message + ". Code: " + code);
};
try {
    handleError(404, "notFound");
}
catch (_a) {
}
var someNumbers = function (limit) {
    var sum = 0;
    while (true) {
        sum++;
    }
};
someNumbers(10);
