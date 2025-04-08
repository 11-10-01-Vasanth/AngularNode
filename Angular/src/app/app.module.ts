import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideHttpClient } from '@angular/common/http';
import { ProductServiceService } from './product-service.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GetsingleproductComponent } from './getsingleproduct/getsingleproduct.component';
import { DeleteproductComponent } from './deleteproduct/deleteproduct.component';
import { UpdateproductComponent } from './updateproduct/updateproduct.component';
import { CreateproductComponent } from './createproduct/createproduct.component';
import { PipesComponent } from './pipes/pipes.component';
import { BindingComponent } from './binding/binding.component';
import { ReversepipePipe } from './pipes/reversepipe.pipe';
import { ReactiveformsComponent } from './forms/reactiveforms/reactiveforms.component';
@NgModule({
  declarations: [
    AppComponent,
    GetsingleproductComponent,
    DeleteproductComponent,
    UpdateproductComponent,
    CreateproductComponent,
    PipesComponent,
    BindingComponent,
    ReversepipePipe,
    ReactiveformsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    provideClientHydration(withEventReplay()),
    provideHttpClient(),
    ProductServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
