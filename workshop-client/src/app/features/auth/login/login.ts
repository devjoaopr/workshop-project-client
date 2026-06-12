import { Component, inject } from '@angular/core';
import {  Validators } from '@angular/forms';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth-service/auth.service';
import { authRequestDTO } from '../DTOs/auth-request-dto';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  private router = inject(Router);

  login = this.fb.nonNullable.group({
    usernameOrEmail: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });

  submit() {
    if (this.login.valid) {
      this.authService.new(this.login.getRawValue() as authRequestDTO).subscribe({
        next: () => {
          this.router.navigate(['/homepage']);
        },
        error: () => {
          alert('Usuário ou senha inválidos!');
        },
      });
    }
  }
}
