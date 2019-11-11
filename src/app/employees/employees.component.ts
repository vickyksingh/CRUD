import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { parseHostBindings } from '@angular/compiler';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  private emp : {};
  private id : any

  private employees: any
  private url:string = "https://jsonplaceholder.typicode.com/posts/1/comments"
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.GetData()
  }

  GetData(){
    this.http.get(this.url).subscribe(
      (res)=>{
        console.log(res)
        this.employees = res;
      }
    )
  }

  // PostData(name){
  //   let data = {
  //     name: name.value
    
  //   }
  //   this.http.post(this.url, data).subscribe(
  //     (res)=>{
  //       console.log(res)
  //       this.employees.unshift(data)
  //     }
  //   )
  // }

  SaveFormData(){
   
   
  }

}
