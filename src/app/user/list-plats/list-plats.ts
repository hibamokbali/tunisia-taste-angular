import { Component, inject, OnInit } from '@angular/core';
import { PlatTunisien } from '../../interfaces/plat-tunisien';
import { ServicePlat } from '../../services/service-plat';
import { FormsModule } from '@angular/forms';
import { Menu } from '../menu/menu';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { PlatItem } from '../plat-item/plat-item';

@Component({
  selector: 'app-list-plats',
  imports: [PlatItem,FormsModule],
  templateUrl: './list-plats.html',
  styleUrl: './list-plats.css',
})
export class ListPlats implements OnInit {
  plats: PlatTunisien[] = [];
  filteredPlats: PlatTunisien[] = [];
  nom: string = '';
  categorie: string = '';

  private platService = inject(ServicePlat);

  ngOnInit(): void {
    this.platService.getPlats().subscribe(data => {
      this.plats = data;
      this.filteredPlats = [...this.plats];
    });
  }
  
  rechercher() {
    this.filteredPlats = this.plats.filter(p => {
      // Recherche par nom (si rempli)
      const matchNom = !this.nom || 
        p.nom.toLowerCase().includes(this.nom.toLowerCase());
      
      // Recherche par catégorie (si sélectionnée)
      const matchCategorie = !this.categorie || 
        p.categorie === this.categorie;
      
      // Les deux critères doivent être valides
      return matchNom && matchCategorie;
    });
  }

  resetSearch() {
    this.nom = '';
    this.categorie = '';
    this.filteredPlats = [...this.plats];
  }
  


}
