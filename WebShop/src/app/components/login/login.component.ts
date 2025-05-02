import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from './../../services/api.service';
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
    private as: ApiService
  ) {}

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.loginForm.valid) {
      this.as.post('user/login', this.loginForm.value).subscribe((next)=>{
        console.log(next);
        // Handle successful login here
        // For example, you might want to store the token in localStorage
        localStorage.setItem('auth_token', next.accessToken);
        this.route.navigate(['/']);
      })

      console.log(this.loginForm.value);
    }
  }
}
