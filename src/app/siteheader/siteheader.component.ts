import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-siteheader',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './siteheader.component.html',
  styleUrls: ['./siteheader.component.css']
})
export class SiteheaderComponent {
  searchForm: FormGroup;
  cartCount = 3;
  mobileMenuOpen = false;

  constructor(private fb: FormBuilder) {
    this.searchForm = this.fb.group({
      search: ['']
    });
  }

  onSearch() {
    console.log(this.searchForm.value.search);
  }

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }
}
