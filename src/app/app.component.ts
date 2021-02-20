import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router, ActivatedRoute } from "@angular/router";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "eShopSPA";
  readonly rootURL = "http://localhost:57367/api";
  customer = {
    id: 0,
    Name: "",
    Surname: "",
    Email_Address: "",
    IsLogin: false,
    Password: "",
  };

  allCustomer;
  customerID;

  isLoginError: boolean = false;
  errorMessage: String;
  constructor(
    private httpClinet: HttpClient,
    private router: Router,
    private toastr: ToastrService,
    private route: ActivatedRoute
  ) {
    if (localStorage.getItem("dataSource")) {
      this.deneme = true;
      var Id:number=+localStorage.getItem("dataSource");
      this.httpClinet.get(this.rootURL + "/user/"+Id).subscribe(d=>{
      debugger;
      if(d["isAdmin"]==true)
      {
        this.isAdmin=true;
      }
      
        
      })
    }
    if(localStorage.getItem("basketproductlength"))
    {
      this.isBasketHaveProduct=true;
      this.basketLength=localStorage.getItem("basketproductlength");
    }
    
  }
  isBasketHaveProduct:boolean=false;
  basketLength;
  isAdmin:boolean=false;
  deneme: boolean = false;
  ngOnInit() {
    this.httpClinet.get(this.rootURL + "/user").subscribe((response) => {
      this.allCustomer = response;
    });
  }
  logout(){
    debugger;
    this.deneme=false;
    var Id:number=+localStorage.getItem("dataSource");
    this.httpClinet.get(this.rootURL + "/user/"+Id).subscribe(d=>{
      
      var element=d;
      this.httpClinet.put(this.rootURL + "/user/"+Id,element).subscribe((response) => {
        localStorage.removeItem("dataSource");
      });
      
    })

    //this.router.navigate(['/home']);
  }
}
