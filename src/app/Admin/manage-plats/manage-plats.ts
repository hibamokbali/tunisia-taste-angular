import { Component, inject, NgModule, OnInit } from '@angular/core';
import { PlatTunisien } from '../../interfaces/plat-tunisien';
import { ServicePlat } from '../../services/service-plat';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { pipe } from 'rxjs';
import { FavoriPipe } from '../../pipes/favori-pipe';

@Component({
  selector: 'app-manage-plats',
  standalone:true,
  imports: [ReactiveFormsModule,CommonModule,FormsModule,RouterLink,FavoriPipe],
  templateUrl: './manage-plats.html',
  styleUrl: './manage-plats.css',
})
export class ManagePlats implements OnInit {
  service = inject(ServicePlat);
  router = inject(Router);
  plats: PlatTunisien []= [];
  filteredPlats: PlatTunisien []= [];
  searchCategorie: string = '';
  

  ngOnInit() {
    this.loadPlats();
  }

  loadPlats() {
    this.service.getPlats().subscribe(data => {
      this.plats = data;
      this.filteredPlats = [...this.plats];  // ✅ Initialiser filteredPlats
    });
  }

  edit(plat: PlatTunisien) {
    this.router.navigate(['/admin/addplat', plat.id]);
    
  }
  delete(id: string) {
    this.service.deletePlat(id).subscribe(() => {
      this.loadPlats(); // recharge la liste après suppression
    });
  }

   // ✅ Méthode de recherche
   rechercher() {
    if (!this.searchCategorie) {
      this.filteredPlats = [...this.plats];
    } else {
      this.filteredPlats = this.plats.filter(p => 
        p.categorie === this.searchCategorie
      );
    }
  }

  // ✅ Réinitialiser la recherche
  resetSearch() {
    this.searchCategorie = '';
    this.filteredPlats = [...this.plats];
  }
 

  
 

  
  
 


}