import { Component, inject, OnInit, Pipe } from '@angular/core';
import { PlatTunisien } from '../../interfaces/plat-tunisien';
import { ServicePlat } from '../../services/service-plat';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-detail-plat',
  imports: [RouterLink,DatePipe],
  templateUrl: './detail-plat.html',
  styleUrl: './detail-plat.css',
})
export class DetailPlat implements OnInit {
  plat!:PlatTunisien;
  readonly platService: ServicePlat = inject(ServicePlat);
  activatedRoute:ActivatedRoute = inject(ActivatedRoute);
    idplat:string="";


  ngOnInit(): void {
    this.idplat =this.activatedRoute.snapshot.params['id'];
    this.platService.getIdPlats(this.idplat).subscribe(data=>this.plat=data);
  }
 
 
  
 
 

}
