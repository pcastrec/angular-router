import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth-service';
import { Router } from '@angular/router';

@Component({
  imports: [],
  selector: 'app-dashboard',
  styleUrl: './dashboard.css',
  templateUrl: './dashboard.html',
})
export class Dashboard {
  private service = inject(AuthService)
  private router = inject(Router)

  logout() {
    this.service.logout()
    this.router.navigate([''])
  }
}
