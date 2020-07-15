import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap, map } from 'rxjs/operators';
 
const httpOptionsPlain = {
  headers: new HttpHeaders({
    'Accept': 'text/plain',
    'Content-Type': 'text/plain'
  }),
  'responseType': 'text'
};

@Injectable({ 
  providedIn: 'root'
})
export class RequestsService {
  constructor(
    private http: HttpClient
  ) { }

  public get(point) {

    return this.http.get(point, { observe: 'response', responseType: 'json' }) 
    .pipe(tap((res) => { }, (err) => {
     
      console.log(`Houve um erro tente novamente!# \n ${err.statusText}`);
      return false;

    }))
    .pipe(map((res) => {
      return res.body as Object;
    }))
    .toPromise();

  }
}
