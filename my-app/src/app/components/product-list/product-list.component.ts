import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  produto1 = "Lobo";
  produto2 = "Barco";
  produto3 = "Arvore";
  produto4 = "Relogio";
}
