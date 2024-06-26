import { Component } from '@angular/core';
import { Router, RouterOutlet,RouterLink } from '@angular/router';
import { AppHeader } from '../../components/header/header.component';
import { AppFooter } from '../../components/footer/footer.component';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [RouterOutlet,AppHeader,AppFooter,RouterLink],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent {

}
