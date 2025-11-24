import { Component, inject } from '@angular/core';
import { Authservice } from '../services/authservice';
import { Router, RouterLink} from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
   private readonly router:Router = inject(Router);
   private readonly authService: Authservice= inject(Authservice);

   onDisconnect() {
    if (confirm('Êtes-vous sûr de vouloir vous déconnecter ?')) {
      this.authService.logout(); 
      this.router.navigate(['/acceuil']);
    }

}}
