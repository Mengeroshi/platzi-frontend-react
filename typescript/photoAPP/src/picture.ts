import {Item} from './item';
import {PhotoOrientation} from './photoOrientation';

export class Picture extends Item{
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