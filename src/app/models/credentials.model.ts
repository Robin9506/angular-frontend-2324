export class Credentials {
    private _username: string;
    private _password: string;
  
    constructor(username: string, password: string) {
      this._username = username;
      this._password = password;
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
  
}