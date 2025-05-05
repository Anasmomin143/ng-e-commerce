import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from './../../services/api.service';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = this.fb.group({
    username: ['', [Validators.required]],
    password: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private route: Router,
    private as: ApiService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    localStorage.removeItem('auth_token');
  }

  onSubmit(): void {
    if (this.loginForm.invalid) return;

    this.as.post('user/login', this.loginForm.value).subscribe({
      next: (res) => {
        this.showNotification(`Welcome ${res.firstName} ${res.lastName}`);
        localStorage.setItem('auth_token', res.accessToken);
         this.route.navigate(['/home/products']);
      },
      error: (err) => {
        console.error('Login error:', err);
        this.loginForm.reset();
        this.loginForm.markAsPristine();
        this.showNotification(err.error.message, 'OK');
      },
    });
  }

  showNotification(message: string, action: string = 'Close') {
    this.snackBar.open(message, action, {
      duration: 3000, // 3 seconds
      verticalPosition: 'top', // 'top' or 'bottom'
      horizontalPosition: 'right', // 'start' | 'center' | 'end' | 'left' | 'right'
      panelClass: ['custom-snackbar'],
    });
  }
}
