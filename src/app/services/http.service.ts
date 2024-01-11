import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment.prod";

@Injectable({
    providedIn: 'root',
  })
export class HttpService{

    constructor(private http: HttpClient){}

    makeGetRequest(query: string): Observable<any> {
        return this.http.get(environment.apiUrl + query);
      }
    
    makePostRequest(query: string, body: any): Observable<any> {
        return this.http.post(environment.apiUrl + query, body);
      }
    
    makePutRequest(query: string, body: any) {
        return this.http.put(environment.apiUrl + query, body);
      }
    
    makeDeleteRequest(query: string) {
        return this.http.delete(environment.apiUrl + query);
    
      }
}