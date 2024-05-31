import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AppHeader } from "../../components/header/header.component";
import { AppFooter } from "../../components/footer/footer.component";

@Component({
    selector: 'app-carrito',
    standalone: true,
    templateUrl: './carrito.component.html',
    styleUrl: './carrito.component.scss',
    imports: [AppHeader, AppFooter,RouterLink,RouterOutlet]
})
export class CarritoComponent {

}
