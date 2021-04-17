import { User } from "./user";
import {Album} from "./album";
import {Picture} from './picture'
import {PhotoOrientation} from './photoOrientation';

const user = new User(1, 'mengeroshi','obo', true);

const album = new Album(10, 'vacation');
const picture = new Picture(1, 'Typescript course', PhotoOrientation.Landscape )

user.addAlbum(album);
album.addPicture(picture);

console.log(user);

user.removeAlbum(album);
console.log('user', user);