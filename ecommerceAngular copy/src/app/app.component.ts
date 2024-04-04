import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import {AppFooter} from './components/footer/footer.component';
import { AppHeader} from './components/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AppFooter, AppHeader,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = 'ecommerceAngular';
}
