import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  private readonly URL = environment.url;

  constructor(private http: HttpClient) {}

  createAccount(name: string) {
    const user = { name: name };
    return this.http.post(this.URL + '/create', user).pipe(
      map((response: any) => {
        this.setData(response.user);
        console.log(response.user);
      }),
      catchError(<T>(error: any, result?: T) => {
        console.log(error);
        return error;
      })
    );
  }

  private setData(data: any) {
    const jsonData = JSON.stringify(data);
    localStorage.setItem('user', jsonData);
  }

  private getData() {
    return localStorage.getItem('user');
  }

  private removeData(key: string) {
    localStorage.removeItem(key)
 }
}
