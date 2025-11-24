import { Component, inject, OnInit } from '@angular/core';
import { PlatTunisien } from '../../interfaces/plat-tunisien';
import { ServicePlat } from '../../services/service-plat';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact implements OnInit {
  topPlats: PlatTunisien[] = [];
  service:ServicePlat=inject(ServicePlat);

ngOnInit() {
  this.service.getTop3Plats().subscribe(plats => this.topPlats = plats);
}


}
