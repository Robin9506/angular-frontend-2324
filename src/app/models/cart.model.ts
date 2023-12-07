import {Product} from './product.model';

export class Cart {
    private _product: Product;
    private _count: number = 1;

    constructor(product: Product) {
        this._product = product;
    } 

    public get product(){
        return this._product;
    }

    public set product(value: Product){
        this._product = value;
    }

    public get count(){
        return this._count;
    }

    public set count(value: number){
        this._count = value;
    }

}