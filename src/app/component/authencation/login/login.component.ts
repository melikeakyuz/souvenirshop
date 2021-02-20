import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router, RouterState } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import * as CryptoJS from "crypto-js";
import { dependenciesFromGlobalMetadata } from "@angular/compiler/src/render3/r3_factory";
import { forkJoin } from 'rxjs';
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  readonly rootURL = "http://localhost:57367/api";
  customer = {
    id: 0,
    Name: "f",
    Surname: "f",
    Email_Address: "melike.akyuz@ceng.deu.edu.tr",
    IsLogin: false,
    isAdmin:false,
    Password: "merhaba",
  };

  allCustomer;
  customerID;
  flag: boolean = false;
  isLoginError: boolean = false;
  errorMessage: String;
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
   
    var a = this.encryptData("merhaba");
    var b = this.decryptData(a);
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
    if (this.customer.Password == "" || this.customer.Email_Address == "") {
      this.toastr.error("Please fill in the blank fields", "Error!");
    } else {
      this.flag = false;
      this.allCustomer.forEach((element) => {
        if (!this.flag) {
          
          if (element.Email_Address === this.customer.Email_Address) {
            element.Password = this.decryptData(element.Password);
            if (element.Password === this.customer.Password) {
              
             
              this.isLoginError = false;
              element.Password=this.encryptData(this.customer.Password);          
              var flagg=false;
              console.log(this.customer);
              this.httpClinet.put(this.rootURL + "/user/"+element.UserID,element).subscribe((response) => {
              
               });
              this.toastr.success(
                this.customer.Name + " " + this.customer.Surname,
                "Welcome!"
              );

              localStorage.setItem("dataSource", element.UserID);
              localStorage.setItem("data", "1");
              this.router.navigate(["/home"]);
              
            } else {
              this.errorMessage = "Please check the information entered";
              this.isLoginError = true;
              this.flag = true;
            }
          }
          
        }
      });
      if(!this.flag)
      {
        this.errorMessage = "Please,firstly register!";
        this.isLoginError = true;
      }
   
        
      
    }
  }
}
