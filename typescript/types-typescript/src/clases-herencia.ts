export{}

enum PhotoOrientation {
    Landscape,
    Portrait,
    Square, 
    Panorama,
}

abstract class Item{
    protected readonly _id: number;
    protected _title: string;
    public constructor(id: number, title:string){
        this._id = id;
        this._title = title;
    }
    get id(){
        return this._id
    }
    // set id(id:number){
    //     this._id = id;
    // }
    get title(){
        return this._title;
    }
    set title(title:string){
        this._title = title;
    }
}


class Picture extends Item{
    static photoOrientattion = PhotoOrientation;
    private _orientation: PhotoOrientation;

    public constructor(id: number, title:string, orientation: PhotoOrientation){
        super(id, title)
        this._orientation  = orientation;
    }

    public toString(){
        return `id:${this._id}
                title: ${this._title}
                orientation: ${this._orientation}`;
        
    }
    
    get orientation (){
        return this._orientation;
    }
    set orientation(o:PhotoOrientation){
        this._orientation = o;
    }

}

class Album extends Item{
    private _pictures: Picture[];

    public constructor(id: number, title:string){
        super(id, title)
        this._pictures = [];
    }   
    public addPicture(picture: Picture){
        this._pictures.push(picture);
    }
    
}

const album: Album = new Album(1, 'personal');
const picture: Picture = new Picture(1, 'Platzi sesion', PhotoOrientation.Square);

album.addPicture(picture);
console.log('album', album);

console.log('picture id', picture.id)

// picture.id = 100;
picture.title = 'Dude';
album.title = 'zzzzzz';

console.log('album', album);

// const item = new Item(1, 'test title');

// console.log('item', item); ERROR

//probar el miembro estatico
console.log('Photoorient', Picture.photoOrientattion.Landscape)