import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { ProductsService } from '../../shared/services/products.service';
import { CardComponent } from './components/card/card.component';
import { Router, RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-lits',
  standalone: true,
  imports: [CardComponent, RouterLink, MatButtonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class LitsComponent {

  products: any[]= [];

  productsService = inject(ProductsService);
  router = inject(Router);

  ngOnInit(){
    this.productsService.getAll().subscribe((products) =>{
      this.products = products
    });
  }

  onEdit(){
      this.router.navigateByUrl('/edit-product');
  }
}
