"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["Landscape"] = 0] = "Landscape";
    PhotoOrientation[PhotoOrientation["Portrait"] = 1] = "Portrait";
    PhotoOrientation[PhotoOrientation["Square"] = 2] = "Square";
    PhotoOrientation[PhotoOrientation["Panorama"] = 3] = "Panorama";
})(PhotoOrientation || (PhotoOrientation = {}));
var showPicture = function (picture) {
    console.log("\n                title: " + picture.title + ", \n                date: " + picture.date + ",\n                orintation: " + picture.orientation);
};
var myPic = {
    title: 'Test Title',
    date: '2020-03',
    orientation: PhotoOrientation.Landscape
};
showPicture(myPic);
showPicture({
    title: 'TEST1',
    date: '2020-03',
    orientation: PhotoOrientation.Portrait,
});
var generatePicture = function (config) {
    var pic = { title: 'default', date: '2020-03', };
    if (config.title) {
        pic.title = config.title;
    }
    if (config.date) {
        pic.date = config.date;
    }
    return pic;
};
var picture = generatePicture({});
console.log('picture', picture);
picture = generatePicture({ title: 'Travel Pic' });
console.log('picture', picture);
picture = generatePicture({ date: '2021-04' });
console.log('picture', picture);
var user;
user = { id: 10, username: 'mengeroshi', isPro: true };
console.log(user);
user.username = 'dopellganger';
console.log(user);
