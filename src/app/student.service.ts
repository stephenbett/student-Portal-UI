import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private api = 'https://localhost:44346/api/'

  constructor(private http: HttpClient) { }

  getstudent():Observable<any>{

    return this.http.get(this.api + "student");

  }

  



}
