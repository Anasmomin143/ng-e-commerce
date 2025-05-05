import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from './../../services/api.service';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from '../footer/footer.component';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HeaderComponent, RouterModule, FooterComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(private as: ApiService) {}

  ngOnInit() {
    this.as.get('auth/me').subscribe((data) => {
      console.log(data);
    });
  }
}
