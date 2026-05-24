import { Component, inject } from '@angular/core';
import { UserService } from '../user-service/user';
import { Validators } from '@angular/forms';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  standalone: true,
  selector: 'app-user',
  imports: [ReactiveFormsModule],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  private uService = inject(UserService);
  private fb = inject(FormBuilder);
  private router = inject(Router);

  user = this.fb.nonNullable.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
    name: ['', [Validators.required]],
  });

  createUser() {
    if (this.user.valid) {
      this.uService.new(this.user.getRawValue()).subscribe({
        next: () => {
          alert("Usuário criado com sucesso!");
          this.router.navigate(['/homepage']);
        },
        error: () => {
          alert("Erro ao criar usuário");
        },
      }
      );
    }
  }
}
