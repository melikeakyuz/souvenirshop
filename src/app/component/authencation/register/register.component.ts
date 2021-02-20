import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import * as CryptoJS from "crypto-js";
import { toTypeScript } from "@angular/compiler";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"],
})
export class RegisterComponent implements OnInit {
  readonly rootURL = "http://localhost:57367/api";
  customer = {
    id: 0,
    Name: "",
    Surname: "",
    Email_Address: "",

    IsLogin: false,
    isAdmin:false,
    Password: "",
  };

  allCustomer;
  customerID;

  isLoginError: boolean = false;
  errorMessage: String;
  flag:boolean=false;
  constructor(
    private httpClinet: HttpClient,
    private router: Router,
    private toastr: ToastrService
  ) {}
  secretKey = "YourSecretKeyForEncryption&Descryption";
  ngOnInit() {
    this.httpClinet.get(this.rootURL + "/user").subscribe((response) => {
      this.allCustomer = response;
    });
  }
  encryptData(data) {
    try {
      return CryptoJS.AES.encrypt(
        JSON.stringify(data),
        this.secretKey
      ).toString();
    } catch (e) {
      console.log(e);
    }
  }
  decryptData(data) {
    try {
      const bytes = CryptoJS.AES.decrypt(data, this.secretKey);
      if (bytes.toString()) {
        return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
      }
      return data;
    } catch (e) {
      console.log(e);
    }
  }
  savecustomer() {
    if(this.customer.Password==""||this.customer.Email_Address==""||this.customer.Surname==""||this.customer.Name=="")
    {
          this.toastr.error("Please fill in the blank fields",
          "Error!")       
    }
    else{
      this.flag=false;
      this.allCustomer.forEach((element) => {
        
        if(!this.flag)
        {
          
          if (element.Email_Address === this.customer.Email_Address) {
            this.toastr.error(
              "You already have an account,Please login!",
              "Warning"
            );
            this.flag=true;
          } else {
            this.customer.Password = this.encryptData(this.customer.Password);
            this.httpClinet
              .post(this.rootURL + "/user", this.customer)
              .toPromise()
              .then((response) => {});
            this.toastr.success("Register is successful", "Message");
            this.router.navigate(["/login"]);
          }
        }
        
      });
    }
    
  }
}
