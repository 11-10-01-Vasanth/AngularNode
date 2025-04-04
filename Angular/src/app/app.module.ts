import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponentComponent } from './product-component/product-component.component';
import { provideHttpClient } from '@angular/common/http';
import { ProductServiceService } from './product-service.service';
import { FormsModule } from '@angular/forms';
import { GetsingleproductComponent } from './getsingleproduct/getsingleproduct.component';
import { DeleteproductComponent } from './deleteproduct/deleteproduct.component';
import { UpdateproductComponent } from './updateproduct/updateproduct.component';
import { CreateproductComponent } from './createproduct/createproduct.component';
@NgModule({
  declarations: [
    AppComponent,
    ProductComponentComponent,
    GetsingleproductComponent,
    DeleteproductComponent,
    UpdateproductComponent,
    CreateproductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration(withEventReplay()),
    provideHttpClient(),
    ProductServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
