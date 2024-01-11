import { Product } from "./product.model";

export class Order {
    private _id: number;
    private _products: Product[]
  
    constructor(id: number, products: Product[]) {
      this._id = id;
      this._products = products;
      } 
  
    public get id(){
      return this._id;
      }
  
    public set id(value: number){
      this._id = value;
      }

    public get products(){
        return this._products;
        }
    
      public set products(value: Product[]){
        this._products = value;
        }
  
}