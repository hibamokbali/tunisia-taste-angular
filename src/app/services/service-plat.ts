import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { PlatTunisien } from '../interfaces/plat-tunisien';
import { map, Observable } from 'rxjs';

 let URL= "http://localhost:3000/plats";

@Injectable({
  providedIn: 'root',
})
export class ServicePlat {
  private readonly http:HttpClient=inject(HttpClient);
  
  getPlats(nom?: string, categorie?: string): Observable<PlatTunisien[]> {
    return this.http.get<PlatTunisien[]>(URL);
  
  }
  

  getIdPlats(id:string):Observable<PlatTunisien>{
    return this.http.get<PlatTunisien>(URL+"/"+ id);
      }

      addPlat(p:PlatTunisien):Observable<PlatTunisien>{
        return this.http.post<PlatTunisien>(URL, p);
       }
  
       updatePlat(id: string, p: PlatTunisien): Observable<PlatTunisien> {
        return this.http.put<PlatTunisien>(`${URL}/${id}`, p);
    }
   
   deletePlat(id:string):Observable<void>{
     return this.http.delete<void>(URL+"/"+ id);}
     
     getTop3Plats(): Observable<PlatTunisien[]> {
      return this.getPlats().pipe(
        map(plats =>
          [...plats]                     
            .sort((a, b) => b.nombreLikes - a.nombreLikes)
            .slice(0, 3)
        )
      );
      

  
}}
