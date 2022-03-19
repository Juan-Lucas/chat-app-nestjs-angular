import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, catchError } from "rxjs/operators";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private readonly URL = environment.url;

  constructor(private http: HttpClient) { }

  createAccount(name: string){
    const user = {name: name};
      return this.http.post(this.URL + '/create',user).pipe(
        catchError(<T>(error: any, result?: T) => {
          console.log(error);
          return error;
        })
      );
  }
}
