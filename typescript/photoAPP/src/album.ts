import{Item} from './item';
import{Picture} from './picture';

export class Album extends Item{
    private _pictures: Picture[];

    public constructor(id: number, title:string){
        super(id, title)
        this._pictures = [];
    }   
    public addPicture(picture: Picture){
        this._pictures.push(picture);
    }
    
}
