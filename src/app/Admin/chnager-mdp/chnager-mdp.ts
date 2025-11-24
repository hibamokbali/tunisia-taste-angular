import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Authservice } from '../services/authservice';

@Component({
  selector: 'app-chnager-mdp',
  standalone:true,
  imports: [ReactiveFormsModule],
  templateUrl: './chnager-mdp.html',
  styleUrl: './chnager-mdp.css',
})
export class ChnagerMdp implements OnInit {
  
  fb = inject(FormBuilder);
  authService = inject(Authservice);
  
  passForm!: FormGroup;
  successMessage = '';
  errorMessage = '';

  ngOnInit(): void {
    this.passForm = this.fb.group({
      mdp: ['', [
        Validators.required, 
        Validators.minLength(6)
      ]],
      confpwd: ['', Validators.required]
    });
  }


  get password() {
    return this.passForm.get('mdp');
  }

  get confpassword() {
    return this.passForm.get('confpwd');
  }

  //  changer le mot de passe
  changer() {
    this.successMessage = '';
    this.errorMessage = '';

    // Vérifier que les champs sont remplis
    if (this.passForm.invalid) {
      this.errorMessage = 'Veuillez remplir tous les champs';
      return;
    }

    // Vérifier que les mots de passe correspondent
    if (this.password?.value !== this.confpassword?.value) {
      this.errorMessage = 'Les mots de passe ne correspondent pas';
      return;
    }

    // Appeler le service
    this.authService.changerMdp(this.password?.value).subscribe({
      next: (response) => {
        this.successMessage = 'Mot de passe modifié avec succès !';
        this.passForm.reset();
      },
      error: (err) => {
        console.error('Erreur:', err);
        this.errorMessage = 'Erreur lors du changement de mot de passe';
      }
    });
  }
}
