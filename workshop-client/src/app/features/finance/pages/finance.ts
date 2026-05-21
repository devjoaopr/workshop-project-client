import { ChangeDetectorRef, Component, OnInit, inject } from '@angular/core';
import { FinanceDTO } from '../finance-dto/finance-dto';
import { Finance as FinanceService } from '../finance-service/finance';
import { CurrencyPipe, CommonModule } from '@angular/common';
@Component({
  standalone: true,
  selector: 'app-finance',
  imports: [CurrencyPipe, CommonModule],
  templateUrl: './finance.html',
  styleUrl: './finance.css',
})
export class Finance implements OnInit {
  finance: FinanceDTO[] | null = null;

  private fnService = inject(FinanceService);
  private cdr = inject(ChangeDetectorRef);

  ngOnInit(): void {
    this.loadFinance();
  }
  loadFinance() {
    this.fnService.listAll().subscribe((data) => {
      this.finance = data;

      this.cdr.detectChanges();
    });
  }
}
