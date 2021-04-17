// const landscape = 0;
// const portrait = 1;
// const square = 2;
// const panorama = 3;


enum PhotoOrientation {
    Landscape = 0,
    Portrait = 1,
    Square = 2, 
    Panorama = 3,
}


const landscape: PhotoOrientation = PhotoOrientation.Landscape;

console.log('landscape', landscape);

console.log('Landscape', PhotoOrientation[landscape]);

enum PictureOrientation {
    Landscape = 10,
    Portrait,
    Square, 
    Panorama,   
}

console.log('portrait',PictureOrientation.Portrait);

enum Country{
    Bolivia = 'bol',
    Colombia = 'col',
    Mexico = 'mex',
    EEUU = 'usa',
    España = 'esp',
}

const country: Country = Country.Colombia;
console.log('country', country);