import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-lits',
  standalone: true,
  imports: [],
  templateUrl: './lits.component.html',
  styleUrl: './lits.component.css'
})
export class LitsComponent {

  products: any[]= [];

  httpClient = inject(HttpClient);

  ngOnInit(){
    this.httpClient.get<any>('/api/products').subscribe((products) =>{
      this.products = products
    });
  }
}
