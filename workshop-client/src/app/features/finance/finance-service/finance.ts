import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { inject } from '@angular/core';
import { FinanceDTO } from '../finance-dto/finance-dto';

@Injectable({
  providedIn: 'root',
})
export class Finance {
  private http = inject(HttpClient);
  baseUrl = 'http://localhost:8081/finance/';

  listAll(): Observable<FinanceDTO[]> {
    return this.http.get<FinanceDTO[]>(this.baseUrl + 'get');
  }
}
