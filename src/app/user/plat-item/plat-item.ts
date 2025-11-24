import { Component, inject, Input } from '@angular/core';
import { PlatTunisien } from '../../interfaces/plat-tunisien';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-plat-item',
  imports: [RouterLink,CommonModule],
  templateUrl: './plat-item.html',
  styleUrl: './plat-item.css',
})
export class PlatItem {
  @Input()plat!: PlatTunisien;
  readonly router :Router=inject(Router);
  ajoutFavori(plat: PlatTunisien) {
    plat.favori = !plat.favori;
    plat.nombreLikes += plat.favori ? 1 : -1;
  
   
  

}
}
