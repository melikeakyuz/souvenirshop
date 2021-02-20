import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-woman',
  templateUrl: './woman.component.html',
  styleUrls: ['./woman.component.css']
})
export class WomanComponent implements OnInit {

  constructor( private httpClinet: HttpClient,
    private router: Router,
    private toastr: ToastrService,
    private route: ActivatedRoute) {  
  }
  isLogin:boolean=true;
  ngOnInit(): void {
  }

}
