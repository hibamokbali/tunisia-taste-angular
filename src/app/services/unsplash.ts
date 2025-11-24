import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Unsplash {
  private http = inject(HttpClient);

  private apiKey = 'MC6i5Bsbkyl3TG8hK0EDoxKqMStN3ERyQAAy_bHGnGE';
  getPhotos(sujet: string): Observable<any> {
    const url = `https://api.unsplash.com/search/photos?query=${sujet}&per_page=9&client_id=${this.apiKey}`;
    return this.http.get(url);
  }
  
}
