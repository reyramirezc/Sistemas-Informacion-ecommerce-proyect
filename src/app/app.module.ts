import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { CreateAccountComponent } from './pages/create-account/create-account.component';
import { EnvioComponent } from './pages/envio/envio.component';
import { PagoComponent } from './pages/pago/pago.component';
import { CarritoComponent } from './pages/carrito/carrito.component';
import { DeseosComponent } from './pages/deseos/deseos.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { ProductoComponent } from './pages/producto/producto.component';

import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminComponent } from './pages/admin/admin.component';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/firestore';
import { SuperSecretComponent } from './super-secret/super-secret.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    CreateAccountComponent,
    EnvioComponent,
    PagoComponent,
    CarritoComponent,
    DeseosComponent,
    PerfilComponent,
    ProductoComponent,
    AdminComponent,
    SuperSecretComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFirestoreModule
  ],
  providers: [AngularFireAuth, AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
