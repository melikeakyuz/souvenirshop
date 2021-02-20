import { Component, OnInit, DebugElement} from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router, ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-customerprocess',
  templateUrl: './customerprocess.component.html',
  styleUrls: ['./customerprocess.component.css']
})
export class CustomerprocessComponent implements OnInit {
  
  customer=
  { 
    Name: '',
    Surname: '',
    Email_Address: '',
    IsLogin: false,
    Password:'',
    isAdmin: false
   }
  
    updateCustomer={};
    isAdd:boolean=true;
    constructor(private http: HttpClient,
      private router: Router,
      private route: ActivatedRoute) {
        if(localStorage.getItem("updateCustomer"))
        {
          debugger;
          this.updateCustomer=JSON.parse(localStorage.getItem("updateCustomer")) || [];
          this.isAdd=false;
        } 
      }
 
  ngOnInit() {
    

    console.log(this.customer);
  }
  
    addDb()
    {
      debugger;
      this.updateCustomer["UserID"]=0;
      console.log(this.updateCustomer)
      this.http.post('http://localhost:57367/api/user',this.updateCustomer)
      .subscribe(element => {
        debugger;
      });
      this.router.navigate(["/admin-customer"]);
     
    }
      updateDb(customer:any){
        debugger;
        this.http.put("http://localhost:57367/api/user/"+this.updateCustomer["UserID"],this.updateCustomer)
        .toPromise()
        .then((element) => {
          
          debugger;
        });
        this.router.navigate(["/admin-customer"]);
      }
    
   
   

}
