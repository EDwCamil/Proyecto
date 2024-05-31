import { Component } from '@angular/core';
import { AppHeader } from "../../components/header/header.component";
import { AppFooter } from "../../components/footer/footer.component";

@Component({
    selector: 'app-carrito',
    standalone: true,
    templateUrl: './carrito.component.html',
    styleUrl: './carrito.component.scss',
    imports: [AppHeader, AppFooter]
})
export class CarritoComponent {

}
