"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Picture = void 0;
const item_1 = require("./item");
const photoOrientation_1 = require("./photoOrientation");
class Picture extends item_1.Item {
    constructor(id, title, orientation) {
        super(id, title);
        this._orientation = orientation;
    }
    toString() {
        return `id:${this._id}
                title: ${this._title}
                orientation: ${this._orientation}`;
    }
    get orientation() {
        return this._orientation;
    }
    set orientation(o) {
        this._orientation = o;
    }
}
exports.Picture = Picture;
Picture.photoOrientattion = photoOrientation_1.PhotoOrientation;
