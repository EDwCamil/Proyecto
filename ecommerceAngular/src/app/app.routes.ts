import { Routes } from '@angular/router';
import { AppLogin } from './vistas/login/login.component';
import { PrincipalComponent } from './vistas/principal/principal.component';
import { ProductDetailComponent } from './vistas/product-detail/product-detail.component';
import { ListProductComponent } from './vistas/list-product/list-product.component';
import { CarritoComponent } from './vistas/carrito/carrito.component';

export const routes: Routes = [
{ path: 'login', component: AppLogin },
{path: 'product-detail', component: ProductDetailComponent},
{path: 'list-product', component: ListProductComponent},
{path: 'carrito', component: CarritoComponent},
{ path: '', component:  PrincipalComponent},
{ path: '**', component:  AppLogin},
];
