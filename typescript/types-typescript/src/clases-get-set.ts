export{}

enum PhotoOrientation {
    Landscape,
    Portrait,
    Square, 
    Panorama,
}


class Picture{
    private _id:number;
    private _title: string;
    private _orientation: PhotoOrientation;

    public constructor(id: number, title:string, orientation: PhotoOrientation){
        this._id = id;
        this._title = title;
        this._orientation  = orientation;
    }

    public toString(){
        return `id:${this._id}
                title: ${this._title}
                orientation: ${this._orientation}`;
        
    }
    get id(){
        return this._id
    }
    set id(id:number){
        this._id = id;
    }
    get title(){
        return this._title;
    }
    set title(title:string){
        this._title = title;
    }
    get orientation (){
        return this._orientation;
    }
    set orientation(o:PhotoOrientation){
        this._orientation = o;
    }

}

class Album{
    private _id:number;
    private _title: string;
    private _pictures: Picture[];

    public constructor(id: number, title:string){
        this._id = id; 
        this._title = title;
        this._pictures = [];
    }   
    public addPicture(picture: Picture){
        this._pictures.push(picture);
    }
    get id(){
        return this._id
    }
    set id(id:number){
        this._id = id;
    }
    get title(){
        return this._title;
    }
    set title(title:string){
        this._title = title;
    }
}

const album: Album = new Album(1, 'personal');
const picture: Picture = new Picture(1, 'Platzi sesion', PhotoOrientation.Square);

album.addPicture(picture);
console.log('album', album);

console.log('picture id', picture.id)

picture.id = 100;
picture.title = 'Dude';
album.title = 'zzzzzz';

console.log('album', album);