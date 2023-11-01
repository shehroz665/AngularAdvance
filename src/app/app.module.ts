import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AboutModule } from './about/about.module';
import { HomeModule } from './home/home.module';
import { ProductsModule } from './products/products.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AccessDeniedComponent } from './access-denied/access-denied.component';
import { NopageFoundComponent } from './nopage-found/nopage-found.component';
import { EditComponent } from './edit/edit.component';
import { ProfileModule } from './profile/profile.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AccessDeniedComponent,
    NopageFoundComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    AboutModule,
    ProductsModule,
    NgbModule,
    ProfileModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
