import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  cart: any;
  searchQuery: string = ''; 
  searchResult: any[] = [];  

  
  products = [
    { name: 'Sour patch kids', category: 'Snack' },
    { name: 'Gumicukrok', category: 'Candy' },
    { name: 'Üdítők', category: 'Beverage' },
    { name: 'Sós Chipsek', category: 'Snack' },
    { name: 'Csípős Chipsek', category: 'Snack' },
    
  ];

  constructor(private cartServ: CartService, public searchServ:SearchService) {
    this.cartServ.getCart().subscribe((res: any) => this.cart = res);
  }

  setSearch(car:string){
    this.searchServ.setSearch(car)
  }

  addOrder() {
    this.cartServ.order();
    console.log('Kosárba tett egy terméket');
  }

  
  // onSearch(): void {
  //   if (this.searchQuery.trim() === '') {
  //     this.searchResult = [];
  //   } else {
  //     this.searchResult = this.products.filter(product =>
  //       product.name.toLowerCase().includes(this.searchQuery.toLowerCase())
  //     );
  //   }
  //   if (this.searchResult.length === 0) {
  //     alert('Nincs találat a keresésre!');
  //   }
  // }
}
