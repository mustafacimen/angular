import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { CategoryComponent } from "./category/category.component";
@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, ProductComponent, CategoryComponent]
})
export class AppComponent {
  title = 'northwind-angular';
  name = 'Mustafa Çimen';
}
