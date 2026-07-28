import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { faSolidUser } from '@ng-icons/font-awesome/solid';
@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [NgIcon],
  templateUrl: './homepage.html',
  styleUrl: './homepage.css',
  providers: [provideIcons({ faSolidUser })],
})
export class Homepage implements OnInit {
  isOpenSalaryModal = false;

  ngOnInit(): void {
    this.openAddSalaryModal();
  }
  openAddSalaryModal() {
    this.isOpenSalaryModal = true;
  }
}
