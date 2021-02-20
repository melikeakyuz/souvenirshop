import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute,private http: HttpClient) {}
  deneme: boolean = false;
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
    if (localStorage.getItem("data") == "1") {
      window.location.reload();
      localStorage.removeItem("data");
    }
    this.http
    .get("http://localhost:57367/api/product")
    .toPromise()
    .then((element) => {
      debugger;
      this.products = element;
      this.products=this.products.filter(d=>d.AverageCustomerRating===5);
      this.filterProducts=this.products;
    });

  }
  clickButton($event,product:any) {
    localStorage.setItem('productID',product.ProductID);
    this.router.navigate(["/productinfo"]);
  }

}

