import { Component, OnInit, DebugElement} from '@angular/core';
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-admin-customer',
  templateUrl: './admin-customer.component.html',
  styleUrls: ['./admin-customer.component.css']
})
export class AdminCustomerComponent implements OnInit {
  constructor(private router: Router, private http: HttpClient) {}
  customers: any = [];
 
  ngOnInit(): void {
    this.http
      .get("http://localhost:57367/api/user")
      .toPromise()
      .then((element) => {
      
        this.customers = element;
      });
    
  }
  //insert
  clickAdd($event,customer:any) {
  // this.router.navigate(["/"]);
  }
//update
clickUpdate($event,customer:any) {
  localStorage.setItem('updateCustomer', JSON.stringify(customer));
    this.router.navigate(["/customerprocess"]);
 }
 
//delete
clickDelete($event,customer:any) {
  
  this.http.delete("http://localhost:57367/api/user/"+customer.CustomerID)
  .toPromise()
      .then((element) => {
        
        this.router.navigate(["admin-customer"]);
      });
  
}




}
