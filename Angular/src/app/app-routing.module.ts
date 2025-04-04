import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateproductComponent } from './createproduct/createproduct.component';
import { DeleteproductComponent } from './deleteproduct/deleteproduct.component';
import { GetsingleproductComponent } from './getsingleproduct/getsingleproduct.component';
import { UpdateproductComponent } from './updateproduct/updateproduct.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'',
    pathMatch:'full'
  },
  {
    path:'create',
    component:CreateproductComponent
  },
  {
    path:'delete',
    component:DeleteproductComponent
  },
  {
    path:'getproduct',
    component:GetsingleproductComponent
  },
  {
    path:'update',
    component:UpdateproductComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
