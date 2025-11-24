import { Component, inject, input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ServicePlat } from '../../services/service-plat';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-plat',
  imports: [CommonModule,ReactiveFormsModule,RouterLink],
  standalone: true,
  templateUrl: './add-plat.html',
  styleUrl: './add-plat.css',
})
export class AddPlat  implements OnInit{
  fb = inject(FormBuilder);
  service = inject(ServicePlat);
  route = inject(ActivatedRoute);
  router = inject(Router);

  platForm!: FormGroup;
  isEdit = false;
  platId?: string;

  ngOnInit() {
    this.platForm = this.fb.group({
      nom: ['', Validators.required],
      region: ['', Validators.required],
      photo: ['', Validators.required],
      categorie: ['', Validators.required],
      description: ['', Validators.required],
      ingredients: ['', Validators.required],
      dateDecouverte: ['', Validators.required],
      favori: [false],
      dureeprepa: ['', Validators.required],
      nombreLikes: [0]
    });

    this.platId = this.route.snapshot.params['id'];
    if (this.platId) {
      this.isEdit = true;
      this.service.getIdPlats(this.platId).subscribe(p => {
        this.platForm.patchValue({ ...p, ingredients: p.ingredients.join(', ') });
      });
    }
  }

  save() {
    const data = { ...this.platForm.value, ingredients: this.platForm.value.ingredients.split(',').map((i: string) => i.trim()) };
    if (this.isEdit && this.platId) {
      this.service.updatePlat(this.platId, data).subscribe(() => this.router.navigate(['/admin/manage']));
    } else {
      this.service.addPlat(data).subscribe(() => this.router.navigate(['/admin/manage']));
    }
  }

}
