export {}

enum PhotoOrientation {
    Landscape,
    Portrait,
    Square, 
    Panorama,
}

interface Entity{
    id: number, 
    title: string,
}

interface Album extends Entity{
    description: string,
}

interface Picture extends Entity{
    orientation: PhotoOrientation,
}

const album:Album = {
    id:1,
    title: 'Meetups',
    description:'here are the meetups',
}

const picture: Picture = {
    id: 1, 
    title: 'Family',
    orientation: PhotoOrientation.Landscape
}

const newPicture = {} as Picture;

newPicture.id = 2;
newPicture.title = 'Moon';

console.log('album', album);
console.log('picture',picture);
console.log('newpicture',newPicture);