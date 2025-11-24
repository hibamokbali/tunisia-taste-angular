import { Component, inject } from '@angular/core';
import { RouterLinkActive } from '@angular/router';
import { Unsplash } from '../../services/unsplash';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-photo-api',
  imports: [CommonModule],
  templateUrl: './photo-api.html',
  styleUrl: './photo-api.css',
})
export class PhotoApi {
  private unsplashService= inject(Unsplash);
  
  photos: any[] = [];
  chargement = false;
  erreur = '';

  chercher(sujet: string) {
    this.chargement = true;
    this.erreur = '';
    
    this.unsplashService.getPhotos(sujet).subscribe({
      next: (reponse) => {
        this.photos = reponse.results;
        this.chargement = false;
      },
      error: (err) => {
        this.erreur = 'Erreur lors du chargement des photos. Vérifiez votre connexion.';
        this.chargement = false;
        console.error('Erreur API:', err);
      }
    });
  }
  
  
  ngOnInit() {
    this.chercher('food');
  }

}
