import { Component } from '@angular/core';
import { AppFooter } from "../../components/footer/footer.component";
import { AppHeader } from "../../components/header/header.component";
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-carrito-vacio',
    standalone: true,
    templateUrl: './carrito-vacio.component.html',
    styleUrl: './carrito-vacio.component.scss',
    imports: [AppFooter, AppHeader, RouterLink]
})
export class CarritoVacioComponent {

}
