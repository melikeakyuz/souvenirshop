import { Component, OnInit } from '@angular/core';
import { HttpClient, JsonpInterceptor } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { IEmployee } from 'models/employee.model';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

customer=
  {id: 0, 
    Name: '',
    Surname:'',
    Email_Address: '', 
    
    IsLogin:false,
    Password: ''};



    
  
  constructor(private httpClinet: HttpClient) {   }

  ngOnInit() {
    this.httpClinet.get('http://localhost:57367/api/user')
    .subscribe(
      (respose) => {
      
      console.log(respose);
       }
    );

    console.log(this.customer);
  }
  savecustomer(){
    this.customer.Surname=this.customer.Name;
    this.customer.IsLogin=false;
    
    this.httpClinet.post('http://localhost:57367/api/customers',this.customer)
    .subscribe(
      (respose) => {
        
      console.log(respose);
       }
    );
  }
}
