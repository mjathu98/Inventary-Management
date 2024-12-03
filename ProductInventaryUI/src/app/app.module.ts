import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavComponent } from './components/top-nav/top-nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductListComponent } from './pages/products/product-list/product-list.component';
import { ProductAddComponent } from './pages/products/product-add/product-add.component';
import { ProductFormComponent } from './pages/products/product-form/product-form.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { CategoriesComponent } from './pages/categories/categories/categories.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    FooterComponent,
    ProductListComponent,
    ProductAddComponent,
    ProductFormComponent,
    LoginComponent,
    CategoriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
