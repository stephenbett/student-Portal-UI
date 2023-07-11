import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'https://localhost:44346/';

  constructor(private http: HttpClient) { }


  register(user: any): Observable<any> {
    return this.http.post(this.apiUrl +'api/Account/register',user)
  }

  login(credentials: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });
    const encoded = `username=${credentials.username}&password=${credentials.password}&grant_type=${credentials.grant_type}`
    return this.http.post(this.apiUrl +'token',encoded,{headers})

  }

  getUserInfo(user: any): Observable<any> {
    const token =localStorage.getItem("token")
    const headers =  new HttpHeaders({
      "Authorization":`Bearer ${token}`

    })
    return this.http.get<any>(this.apiUrl +'api/Account/userInfo',{headers})

  }

    logout(): Observable<any> {
      return this.http.post(this.apiUrl +'api/Account/logout', null)
    }


}
