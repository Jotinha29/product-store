import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { ProductsService } from '../../shared/services/products.service';
import { CardComponent } from './components/card/card.component';


@Component({
  selector: 'app-lits',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class LitsComponent {

  products: any[]= [];

  productsService = inject(ProductsService);

  ngOnInit(){
    this.productsService.getAll().subscribe((products) =>{
      this.products = products
    });
  }
}
