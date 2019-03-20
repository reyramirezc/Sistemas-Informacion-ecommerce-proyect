import { SuperSecretComponent } from './super-secret/super-secret.component';
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
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  {path: '', component: LoginComponent, canActivate: [AuthGuard]},

  {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent, canActivate: [AuthGuard]},
  {path: 'createAccount', component: CreateAccountComponent, canActivate: [AuthGuard]},
  {path: 'envio', component: EnvioComponent, canActivate: [AuthGuard]},
  {path: 'pago', component: PagoComponent, canActivate: [AuthGuard]},
  {path: 'carrito', component: CarritoComponent, canActivate: [AuthGuard]},
  {path: 'deseos', component: DeseosComponent, canActivate: [AuthGuard]},
  {path: 'perfil', component: PerfilComponent, canActivate: [AuthGuard]},
  {path: 'producto', component: ProductoComponent, canActivate: [AuthGuard]},
  {path: 'admin', component: AdminComponent, canActivate: [AuthGuard]},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
