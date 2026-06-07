import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { authRequestDTO } from '../DTOs/auth-request-dto';
import { ApiResponse } from '../../../core/models/api-response';
import { authResponseDTO } from '../DTOs/auth-response-dto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private http = inject(HttpClient);
  baseUrl = 'http://localhost:8081/api/';

  new(LoginData: authRequestDTO): Observable<ApiResponse<authResponseDTO>> {
    return this.http.post<ApiResponse<authResponseDTO>>(this.baseUrl + '/auth/login', LoginData);
  }
}
