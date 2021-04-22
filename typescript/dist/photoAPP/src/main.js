"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user_1 = require("./user");
var album_1 = require("./album");
var picture_1 = require("./picture");
var photoOrientation_1 = require("./photoOrientation");
var user = new user_1.User(1, 'mengeroshi', 'obo', true);
var album = new album_1.Album(10, 'vacation');
var picture = new picture_1.Picture(1, 'Typescript course', photoOrientation_1.PhotoOrientation.Landscape);
user.addAlbum(album);
album.addPicture(picture);
console.log(user);
user.removeAlbum(album);
console.log('user', user);
