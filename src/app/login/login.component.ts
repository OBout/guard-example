import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username: string = '';
  password: string = '';

  constructor(private router: Router) { }

  onSubmit(): void {
    // Replace this with your own authentication logic
    if (this.username && this.password) {
      localStorage.setItem('token', 'your_token');
      this.router.navigate(['/home']);
    } else {
      alert('Invalid credentials');
    }
  }
}
