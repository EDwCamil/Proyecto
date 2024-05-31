import { Component } from '@angular/core';
import { AppHeader } from "../../components/header/header.component";
import { AppFooter } from "../../components/footer/footer.component";

@Component({
    selector: 'app-registro',
    standalone: true,
    templateUrl: './registro.component.html',
    styleUrl: './registro.component.scss',
    imports: [AppHeader, AppFooter]
})
export class RegistroComponent {

}
