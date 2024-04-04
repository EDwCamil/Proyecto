import { Component } from '@angular/core';
import { AppHeader } from '../../components/header/header.component';
import { AppFooter } from '../../components/footer/footer.component';

@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [AppFooter, AppHeader],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.scss'
})
export class PrincipalComponent {

}
