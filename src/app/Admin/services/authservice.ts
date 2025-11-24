import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { Admin } from '../admin';
const API_URL = 'http://localhost:3000/admin';
@Injectable({
  providedIn: 'root',
})
export class Authservice {
  private readonly http:HttpClient=inject(HttpClient);

  login(username: string, password: string): Observable<boolean> {
    return this.getAdmin().pipe(
      map(data => {
        const connected = username === data.username && password === data.password;
        localStorage.setItem('connected', connected ? 'true' : 'false');
        return connected;
      })
    );
  }

  getAdmin(): Observable<any> {
    return this.http.get<any>(API_URL); // renvoie un objet unique {username, password, ...}
  }

  logout() {
    localStorage.setItem('connected', 'false');
  }

  changerMdp(nouveauMdp: string): Observable<any> {
    const updatedAdmin = {
      username: 'admin',
      password: nouveauMdp
    };
    return this.http.put(API_URL, updatedAdmin);
  }
  
}
