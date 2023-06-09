import { Component, OnInit } from '@angular/core';
// ...imports...

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.cartItems = JSON.parse(localStorage.getItem('cart') || '[]');
  }
  clear() {
    localStorage.removeItem('cart');
    this.cartItems = [];
  }
}
