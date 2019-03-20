import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { CreateAccountComponent } from './pages/create-account/create-account.component';
import { EnvioComponent } from './pages/envio/envio.component';
import { PagoComponent } from './pages/pago/pago.component';
import { CarritoComponent } from './pages/carrito/carrito.component';
import { DeseosComponent } from './pages/deseos/deseos.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { ProductoComponent } from './pages/producto/producto.component';
import { AdminComponent } from './pages/admin/admin.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'createAccount', component: CreateAccountComponent},
  {path: 'envio', component: EnvioComponent},
  {path: 'pago', component: PagoComponent},
  {path: 'carrito', component: CarritoComponent},
  {path: 'deseos', component: DeseosComponent},
  {path: 'perfil', component: PerfilComponent},
  {path: 'producto', component: ProductoComponent},
  {path: 'admin', component: AdminComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
