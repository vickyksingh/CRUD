import { Component } from '@angular/core';
import { EmployeesService } from './employees.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

 
  constructor(private _employeeservice: EmployeesService, private http: HttpClient){

  }
  ngOnInit(){

  }

 
}
