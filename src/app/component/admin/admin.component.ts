import { Component, OnInit, DebugElement} from '@angular/core';
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  constructor(private router: Router, private http: HttpClient) {}
  all : any = [];
  customers: any = [];
  products: any = [];
  sales: any = [];
  ngOnInit(): void {
    this.http
      .get("http://localhost:57367/api/user")
      .toPromise()
      .then((element) => {
        this.all=element;
        this.customers = element;
      });

      this.http
      .get("http://localhost:57367/api/product")
      .toPromise()
      .then((element) => {
        this.all=element;
        this.products = element;
      });
      this.http.get("http://localhost:57367/api/sales")
      .toPromise()
      .then((element) => {
        this.all=element;
        this.sales = element;
      });
    }
    
}
