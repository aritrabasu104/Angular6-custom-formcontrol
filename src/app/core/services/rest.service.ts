import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

export abstract class RestService {

    constructor(private http: HttpClient){}
  
    protected get(url: string): Observable<any> {
      return this.http.get(url)
        
    }
    
    protected post(url: string, data: any) {
        return this.http.post(url,data)
    }
  
  }