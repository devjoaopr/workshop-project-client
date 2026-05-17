import { Component, OnInit } from '@angular/core';
import { FinanceDTO } from './finance-dto/finance-dto';
import { Finance as FinanceService } from './finance-service/finance';
import { Observable } from 'rxjs';
import { inject } from '@angular/core';
@Component({
  standalone: true,
  selector: 'app-finance',
  imports: [],
  templateUrl: './finance.html',
  styleUrl: './finance.css',
})
export class Finance implements OnInit {
  finance: FinanceDTO[] | null = null;

  private fnService = inject(FinanceService);

  ngOnInit(): void {
    this.loadFinance();
  }
  loadFinance() {
    this.fnService.listAll().subscribe((data) => {
      this.finance = data;
    });
  }
}
