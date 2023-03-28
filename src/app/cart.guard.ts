import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CartGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const hasItemsInCart = this.hasItemsInCart();

    if (hasItemsInCart) {
      return true;
    } else {
      this.router.navigate(['/home']);
      return false;
    }
  }

  hasItemsInCart(): boolean {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    return cart.length > 0;
  }
}

