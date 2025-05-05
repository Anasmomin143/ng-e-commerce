import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router'; // ✅ import RouterModule
import { AuthService } from './../../auth/auth.service'; // Assuming you have an AuthService for authentication

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule], // ✅ add RouterModule here
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  constructor(private router: Router, private AuthService: AuthService) {}
  isAuthenticated = this.AuthService.isAuthenticated();
  menuOpen = false;

  ngOnInit(): void {}

  onLogout() {
    this.router.navigate(['/login']);
  }
}
