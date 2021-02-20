import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormsModule} from '@angular/forms';
import { ToastrService } from "ngx-toastr";
import { HttpClient } from '@angular/common/http';
import { async } from '@angular/core/testing';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  constructor(private router:Router,private toastr:ToastrService,private httpClinet: HttpClient,) { }
  sales = {
    id: 0,
    DateofSale:new Date(),
    UserID:0,
    Howmanyproductssold:0,
    Ratinginformation:0,
    ProductID:0

  };
  flag:boolean=false;
  address={
    label1:"",
    label2:"",
    city:"",
    country:""
  }
  card={
    CardNumber:"",
    CardholderName:"",
    StartDate:"",
    ExpirationDate:"",
    CVV:""

  }
  grandtotal;
  basketProducts: any = [];
  readonly rootURL = "http://localhost:57367/api";
  ngOnInit(): void {
    debugger;
    this.grandtotal=localStorage.getItem("grandTotal");
    
  }
  confirmPayment(){
    // if(this.card.CVV==""||this.card.CardholderName==""||this.card.ExpirationDate==""||this.card.StartDate==""||this.address.city==""||this.address.country==""||this.address.label1=="")
    // {
    //   this.toastr.error("Please fill in the blank fields",
    //     "Error!")
    // }
    // if{
      this.basketProducts =
      JSON.parse(localStorage.getItem("productinBasket")) || [];
    this.basketProducts.forEach( (element) => {
     
      
      this.sales.Howmanyproductssold=1;
      this.sales.ProductID=+element.ProductID;
      this.sales.DateofSale=new Date();
      this.sales.Ratinginformation=+element.AverageCustomerRating;
      this.sales.UserID=19;
     forkJoin( this.httpClinet
  .post("http://localhost:57367/api/sales",this.sales)
  .subscribe(response => {})
     )
    });
      this.toastr.success("Your order has been successfully received","Successful");
      this.router.navigate(["/home"]);
    }
  
}
