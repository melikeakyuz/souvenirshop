
import {RouterModule, Routes} from '@angular/router';

import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './component/employee/employee.component';
import { EmployeeListComponent } from './component/employee/employeeList/employeeList.component';
import { ManComponent } from './component/categories/man/man.component';
import { WomanComponent } from './component/categories/woman/woman.component';
import { HomeLifeComponent } from './component/categories/home-life/home-life.component';
import { ChildComponent } from './component/categories/child/child.component';
import { CosmeticComponent } from './component/categories/cosmetic/cosmetic.component';
import { ElectronicComponent } from './component/categories/electronic/electronic.component';
import { ShoeBagComponent } from './component/categories/shoe-bag/shoe-bag.component';
import { HomeComponent } from './component/home/home.component';
import { ProductinfoComponent } from './component/productinfo/productinfo.component';
import { WatchesAccessoriesComponent } from './component/categories/watches-accessories/watches-accessories.component';
import { RegisterComponent } from './component/authencation/register/register.component';
import { LoginComponent } from './component/authencation/login/login.component';
import { BasketComponent } from './component/basket/basket.component';
import { PaymentComponent } from './component/payment/payment.component';
import { AdminProductComponent } from  './component/admin-product/admin-product.component';
import { ProductprocessComponent } from './component/productprocess/productprocess.component';
import { AdminCustomerComponent } from './component/admin-customer/admin-customer.component';
import { AdminSalesComponent } from './component/admin-sales/admin-sales.component';
import { AdminComponent } from './component/admin/admin.component';
import { CustomerprocessComponent } from './component/customerprocess/customerprocess.component';
const APP_ROUTES: Routes = [
    
    {path: 'create', component: EmployeeComponent },
    {path:'home',component:HomeComponent},
    {path:"list",component:EmployeeListComponent},
    {path:"man",component:ManComponent},
    {path:"woman",component:WomanComponent},
    {path:"homelife",component:HomeLifeComponent},
    {path:"child",component:ChildComponent},
    {path:"cosmetic",component:CosmeticComponent},
    {path:"electronic",component:ElectronicComponent},
    {path:"shoebag",component:ShoeBagComponent},
    {path:"watchesaccessories",component:WatchesAccessoriesComponent},
    {path:"productinfo",component:ProductinfoComponent},
    {path:"register",component:RegisterComponent},
    {path:"login",component:LoginComponent},
    {path:"app",component:AppComponent},
    {path:"",component:HomeComponent},
    {path:"basket",component:BasketComponent},
    {path:"payment",component:PaymentComponent},
    {path:"admin-product", component:AdminProductComponent},
    {path:"productprocess", component:ProductprocessComponent},
    {path:"admin-customer", component:AdminCustomerComponent},
    {path:"admin", component:AdminComponent},
    {path:"customerprocess" ,component:CustomerprocessComponent},
    {path:"admin-sales" , component:AdminSalesComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(APP_ROUTES)],
    exports: [RouterModule]
})
export class AppRouting {

}
