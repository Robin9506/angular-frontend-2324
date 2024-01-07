export class Promo{
    private _id: string;
    private _code: string;
    private _discount: number;

    constructor(id: string, code: string, discount: number){
        this._id = id;
        this._code = code;
        this._discount = discount;

    }

    public get id(){
        return this._id;
    }

    public set id(value: string){
        this._id = value;
    }

    public get code(){
        return this._code;
    }

    public set code(value: string){
        this._code = value;
    }

    public get discount(){
        return this._discount;
    }

    public set discount(value: number){
        this._discount = value;
    }


}