import { Component, OnInit, DebugElement } from "@angular/core";
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { element } from 'protractor';

@Component({
  selector: "app-electronic",
  templateUrl: "./electronic.component.html",
  styleUrls: ["./electronic.component.css"],
})
export class ElectronicComponent implements OnInit {
  constructor(private router: Router, private http: HttpClient) {}
  products: any = [];
  filterProducts: any = [];
  gender: string = "";
  color: string = "";
  minPrice = 0;
  maxPrice = 1000000;
  isWoman: boolean = false;
  isMan: boolean = false;
  isRed: boolean = false;
  isBlack: boolean = false;
  isWhite: boolean = false;
  isOrange: boolean = false;
  isGrey: boolean = false;
  isFirstRange: boolean = false;
  isSecondRange: boolean = false;
  isThirdRange: boolean = false;
  isFourthRange: boolean = false;
  amount: "500";
  ngOnInit(): void {
    this.http
      .get("http://localhost:57367/api/product")
      .toPromise()
      .then((element) => {
        debugger;
        this.products = element;
        this.products=this.products.filter(d=>d.Type==="Electronic");
        this.filterProducts=this.products;
      });

      
  }

  clickButton($event,product:any) {
    localStorage.setItem('productID',product.ProductID);
    this.router.navigate(["/productinfo"]);
  }
  clickPrice(event: any) {
    debugger;
    if (this.isFirstRange) {
      this.minPrice = 0;
      this.maxPrice = 500;
    } else if (this.isSecondRange) {
      this.minPrice = 500;
      this.maxPrice = 1500;
    } else if (this.isThirdRange) {
      this.minPrice = 1500;
      this.maxPrice = 3000;
    } else if (this.isFourthRange) {
      this.minPrice = 3000;
      this.maxPrice = 100000;
    } else {
      this.minPrice = 0;
      this.maxPrice = 1000000;
    }
  }
  clickGender(event: any) {
    console.log(event);
    if (this.isMan) {
      this.gender = "Man";
    } else if (this.isWoman) {
      this.gender = "Woman";
    } else if (!this.isMan && !this.isWoman) {
      this.gender = "";
    }
  }
  clickColor(event: any) {
    if (this.isBlack) {
      this.color = "Black";
    }
    if (this.isRed) {
      this.color = "Red";
    }
    if (this.isOrange) {
      this.color = "Orange";
    }
    if (this.isWhite) {
      this.color = "White";
    }
    if (this.isGrey) {
      this.color = "Grey";
    }
    if (
      !this.isWhite &&
      !this.isGrey &&
      !this.isBlack &&
      !this.isOrange &&
      !this.isRed
    ) {
      this.color = "";
    }
  }
  filter() {
    debugger;
    if (this.gender != "") {
      if (this.color != "") {
        if (this.maxPrice != 10000000) {
          this.filterProducts = this.products.filter(
            (product) =>
              product.Gender === this.gender &&product.Gender === "Unisex" &&
              product.Color === this.color &&
              product.Price >= this.minPrice &&
              product.Price <= this.maxPrice
          );
        }
        else{
          this.filterProducts = this.products.filter(
            (product) =>
              product.Gender === this.gender &&product.Gender === "Unisex"&&
              product.Color === this.color
             
          );
        }
      } else {
        if (this.maxPrice != 10000000) {
          this.filterProducts = this.products.filter(
            (product) =>
              product.Gender === this.gender &&product.Gender === "Unisex"&&
              product.Price >= this.minPrice &&
              product.Price <= this.maxPrice
          );
        }
        else
        {
          this.filterProducts = this.products.filter(
            (product) => product.Gender === this.gender&&product.Gender === "Unisex"
          );
        }
        
      }
    } else {
      if (this.color != "") {
        if (this.maxPrice != 10000000) {
          this.filterProducts = this.products.filter(
            (product) =>
              product.Color === this.color &&
              product.Price >= this.minPrice &&
              product.Price <= this.maxPrice
          );
        }
        else{
          this.filterProducts = this.products.filter(
            (product) => product.Color === this.color
          );
        }
        
      } else {
        if (this.maxPrice != 10000000) {
          debugger;
          this.filterProducts = this.products.filter(
            (product) =>
              product.Price >= this.minPrice &&
              product.Price <= this.maxPrice
          );
        }
        else{
          this.filterProducts = this.products;
        }
        
      }
    }
  }
}
