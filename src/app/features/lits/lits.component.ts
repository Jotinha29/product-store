import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { ProductsService } from '../../shared/services/products.service';
import { MatCardModule } from "@angular/material/card"
import { MatButtonModule } from "@angular/material/button"

@Component({
  selector: 'app-lits',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './lits.component.html',
  styleUrl: './lits.component.css'
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
