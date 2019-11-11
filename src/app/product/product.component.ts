import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  private myfrom: any[]=[]
  
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  
}
