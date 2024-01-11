import { Role } from "../enums/role";

export class Account{
    private _id: string;
    private _username: string;
    private _password: string;
    private _role: Role;
    private _address: string;
    private _city: string;
    private _country: string;


    constructor(id: string, username: string, password: string, role: Role, address: string, city: string, country: string){
        this._id = id;
        this._username = username;
        this._password = password;
        this._role = role;
        this._address = address;
        this._city = city;
        this._country  = country;
    }

    public get id(){
        return this._id;
    }

    public set id(value: string){
        this._id = value;
    }

    public get username(){
        return this._username;
    }

    public set username(value: string){
        this._username = value;
    }

    public get password(){
        return this._password;
    }

    public set password(value: string){
        this._password = value;
    }

    public get role(){
        return this._role;
    }

    public set role(value: Role){
        this._role = value;
    }

    public get address(){
        return this._address;
    }

    public set address(value: string){
        this._address = value;
    }

    public get city(){
        return this._city;
    }

    public set city(value: string){
        this._city = value;
    }

    public get country(){
        return this._country;
    }

    public set country(value: string){
        this._country = value;
    }
}