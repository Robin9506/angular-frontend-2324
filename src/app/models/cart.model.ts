import {Product} from './product.model';

export class Cart {
    private _products: Product[];

    constructor(products: Product[]) {
        this._products = products;
    } 

    public get products(){
        return this._products;
    }

    public set products(value: Product[]){
        this._products = value;
    }
}