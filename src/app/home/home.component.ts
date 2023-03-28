import { Component, OnInit } from '@angular/core';
// ...imports...

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public products = [
    { id: 1, name: 'Product 1', description: 'This is product 1.' },
    { id: 2, name: 'Product 2', description: 'This is product 2.' },
    { id: 3, name: 'Product 3', description: 'This is product 3.' }
  ];

  constructor() { }

  public addToCart(product: any): void {
    let cart = JSON.parse(localStorage.getItem('cart') || '[]');
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Product added to cart');
  }
}
