import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { authRequestDTO } from '../DTOs/auth-request-dto';
import { authResponseDTO } from '../DTOs/auth-response-dto';
import { Observable, tap } from 'rxjs';
import { SessionService } from '../../../core/auth/session-service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private http = inject(HttpClient);
  private auth = inject(SessionService);
  baseUrl = 'http://localhost:8081/api/';

  new(LoginData: authRequestDTO): Observable<authResponseDTO> {
    return this.http.post<authResponseDTO>(this.baseUrl + 'auth/login', LoginData).pipe(
      tap((response) => {
        if (response.accessToken) {
          this.auth.setSession(response);
        }
      }),
    );
  }
}
