import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
// ...imports...
// ...imports...

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  cartItems: any[] = [];
  name: string = '';
  email: string = '';
  address: string = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.cartItems = JSON.parse(localStorage.getItem('cart') || '[]');
  }

  onSubmit(form: NgForm): void {
    if (form.valid) {
      // Perform your order processing logic here.
      // For example, send the order details to a server or save it to a database.
      alert('Order placed successfully');
      localStorage.removeItem('cart');
      this.router.navigate(['/home']);
    } else {
      alert('Please complete the form');
    }
  }

  logout(): void {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
