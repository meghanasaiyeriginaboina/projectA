import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Navbar } from '../models/navbar';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {
 private url="assets/navbar.json ";
  constructor(
    private http:HttpClient  
  ) { }
  getdata():Observable<Navbar[]>{
     return this.http.get<Navbar[]>(this.url);

  }

}
