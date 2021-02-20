import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { AppRouting } from './app.routing';
import { EmployeeComponent } from './component/employee/employee.component';
import { EmployeeListComponent } from './component/employee/employeeList/employeeList.component';
import { ManComponent } from './component/categories/man/man.component';
import { WomanComponent } from './component/categories/woman/woman.component';
import { HomeLifeComponent } from './component/categories/home-life/home-life.component';
import { ChildComponent } from './component/categories/child/child.component';
import { ElectronicComponent } from './component/categories/electronic/electronic.component';
import { CosmeticComponent } from './component/categories/cosmetic/cosmetic.component';
import { ShoeBagComponent } from './component/categories/shoe-bag/shoe-bag.component';
import { WatchesAccessoriesComponent } from './component/categories/watches-accessories/watches-accessories.component';
import { HomeComponent } from './component/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 
import { ToastrModule } from 'ngx-toastr';
import { ProductinfoComponent } from './component/productinfo/productinfo.component';
import { RegisterComponent } from './component/authencation/register/register.component';
import { LoginComponent } from './component/authencation/login/login.component';
import { BasketComponent } from './component/basket/basket.component';
import { PaymentComponent } from './component/payment/payment.component';
import { AdminProductComponent } from './component/admin-product/admin-product.component';
import { ProductprocessComponent } from './component/productprocess/productprocess.component';
import { AdminCustomerComponent } from './component/admin-customer/admin-customer.component';
import { AdminComponent } from './component/admin/admin.component';
import { CustomerprocessComponent } from './component/customerprocess/customerprocess.component';
import { AdminSalesComponent } from './component/admin-sales/admin-sales.component';

@NgModule({
   declarations: [
      AppComponent,
      EmployeeComponent,
      
      EmployeeListComponent,
      ManComponent,
      WomanComponent,
      HomeLifeComponent,
      ChildComponent,
      ElectronicComponent,
      CosmeticComponent,
      ShoeBagComponent,
      WatchesAccessoriesComponent,
      HomeComponent,  
      ProductinfoComponent,       
      RegisterComponent,
      LoginComponent, 
      BasketComponent, 
      PaymentComponent, 
      AdminProductComponent, 
      ProductprocessComponent, 
      AdminCustomerComponent, 
      AdminComponent, CustomerprocessComponent, AdminSalesComponent, 
      
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      FormsModule,
      AppRouting,NgbModule,
      BrowserAnimationsModule, // required animations module
      ToastrModule.forRoot({preventDuplicates: true}) // ToastrModule added
      
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
