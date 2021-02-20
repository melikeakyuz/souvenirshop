import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-productinfo",
  templateUrl: "./productinfo.component.html",
  styleUrls: ["./productinfo.component.css"],
})
export class ProductinfoComponent implements OnInit {
  constructor(private route: ActivatedRoute, private httpService: HttpClient) {}

  productDetail:any;
  productID;
  basketProduct:any=[];
  ngOnInit(): void {
    this.productID=localStorage.getItem('productID');
    this.httpService
      .get("http://localhost:57367/api/product/"+this.productID)
      .toPromise()
      .then((d) => {
       this.productDetail=d;
      });
  }
  addBasket()
  {
    debugger;
    var a = [];
    
    a = JSON.parse(localStorage.getItem('productinBasket')) || [];

    a.push(this.productDetail);
  
    localStorage.setItem('productinBasket', JSON.stringify(a));
   localStorage.setItem('basketproductlength',a.length.toString());
    console.log( localStorage.setItem('productinBasket', JSON.stringify(a)));
    window.location.reload(); 
  }
}
