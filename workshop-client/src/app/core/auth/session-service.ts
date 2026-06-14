import { Injectable } from '@angular/core';
import { authResponseDTO } from '../../features/login/DTOs/auth-response-dto';

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  private readonly TOKEN_KEY = 'access_token';

  setSession(auth: authResponseDTO): void {
    localStorage.setItem(this.TOKEN_KEY, auth.accessToken);
  }

  getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  endSession(): void {
    localStorage.removeItem(this.TOKEN_KEY);
  }
}
