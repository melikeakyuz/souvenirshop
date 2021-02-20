import { Component, OnInit, DebugElement} from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router, ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-productprocess',
  templateUrl: './productprocess.component.html',
  styleUrls: ['./productprocess.component.css']
})
export class ProductprocessComponent implements OnInit {
  
  product=
  { 
    averageCustomerRating: 3,
    ProductDescription: '',
    price: null,
    type: '', 
    imageURL: 'assets/pen.jpg',
    color: '',
    gender: ''}
  
    updateProduct={};
    isAdd:boolean=true;
    constructor(private http: HttpClient,
      private router: Router,
      private route: ActivatedRoute) {
        if(localStorage.getItem("updateProduct"))
        {
          debugger;
          this.updateProduct=JSON.parse(localStorage.getItem("updateProduct")) || [];
          this.isAdd=false;
        } 
      }
 
  ngOnInit() {
    

    console.log(this.product);
  }
  
    addDb()
    {
      debugger;
      this.updateProduct["AverageCustomerRating"]=0;
      this.updateProduct["ProductID"]=0;
      console.log(this.updateProduct)
      this.http.post('http://localhost:57367/api/product',this.updateProduct)
      .subscribe(element => {
        debugger;
      });
      this.router.navigate(["/admin-product"]);
     
    }
      updateDb(product:any){
        debugger;
        this.http.put("http://localhost:57367/api/product/"+this.updateProduct["ProductID"],this.updateProduct)
        .toPromise()
        .then((element) => {
          
          debugger;
        });
        this.router.navigate(["/admin-product"]);
      }
    
   
   

}
