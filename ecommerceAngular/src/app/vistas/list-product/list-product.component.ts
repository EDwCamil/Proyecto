import { Component } from '@angular/core';
import { AppFooter } from "../../components/footer/footer.component";
import { AppHeader } from "../../components/header/header.component";

@Component({
    selector: 'app-list-product',
    standalone: true,
    templateUrl: './list-product.component.html',
    styleUrl: './list-product.component.scss',
    imports: [AppFooter, AppHeader]
})
export class ListProductComponent {

}
