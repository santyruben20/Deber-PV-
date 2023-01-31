import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesRoutingModule } from './pages-routing.module';



@NgModule({
  declarations: [
    DashboardComponent,
    ProductComponent,
    CategoryComponent
    
    
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ],
  exports:[
    DashboardComponent,
    ProductComponent,
    CategoryComponent
  ]
})
export class PagesModule { }
