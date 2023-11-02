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
import { ChildComponent } from './child/child.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AccessDeniedComponent,
    NopageFoundComponent,
    EditComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    AboutModule,
    ProductsModule,
    NgbModule,
    ProfileModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
