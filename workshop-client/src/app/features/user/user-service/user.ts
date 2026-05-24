import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { inject } from '@angular/core';
import { UserDTO } from '../user-dto/user-dto';
import { ApiResponse } from '../../../core/models/api-response';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private http = inject(HttpClient);
  baseUrl = 'http://localhost:8081/users';

  new(UserData: UserDTO): Observable<ApiResponse<UserDTO[]>> {
    return this.http.post<ApiResponse<UserDTO[]>>(this.baseUrl + '/new', UserData);
  }

  get(): Observable<UserDTO[]> {
    return this.http.get<UserDTO[]>(this.baseUrl + '/get');
  }
}
