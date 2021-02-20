import { Component, OnInit, DebugElement} from '@angular/core';
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-admin-sales',
  templateUrl: './admin-sales.component.html',
  styleUrls: ['./admin-sales.component.css']
})
export class AdminSalesComponent implements OnInit {
  constructor(private router: Router, private http: HttpClient) {}
  sales: any = [];
 
  ngOnInit(): void {
    this.http
      .get("http://localhost:57367/api/sales")
      .toPromise()
      .then((element) => {
      
        this.sales = element;
      });
    
  }
  //insert
  clickAdd($event,sale:any) {
  // this.router.navigate(["/"]);
  }
//update
clickUpdate($event,sale:any) {
  localStorage.setItem('updateSale', JSON.stringify(sale));
    this.router.navigate(["/saleprocess"]);
 }
 
//delete
clickDelete($event,sale:any) {
  
  this.http.delete("http://localhost:57367/api/sales/"+sale.SalesID)
  .toPromise()
      .then((element) => {
        
        this.router.navigate(["admin-sales"]);
      });
  
}

}
