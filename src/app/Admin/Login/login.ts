import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Authservice } from '../services/authservice';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login implements OnInit {
  loginForm !:FormGroup;
  invalid!:boolean;
  readonly fb:FormBuilder=inject(FormBuilder);
  readonly router:Router = inject(Router);
  readonly authService: Authservice = inject(Authservice);
  ngOnInit(): void {
    this.loginForm=this.fb.nonNullable.group({username:[''], password:['']});
  }

  onSubmit(){
    const username = this.loginForm.get('username')?.value;
    const password = this.loginForm.get('password')?.value;

    this.authService.login(username, password).subscribe((connected) => {
      if (connected) {
        this.router.navigate(['/admin']);
      } else {
        this.invalid = true;
      }
    });
  
    }
  }    




  


