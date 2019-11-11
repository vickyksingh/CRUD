import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor() { }

  GetEmployeesData(){

   return [
      {name:'vicky', age:23, salary:2333, Married:false},
      {name:'vikram', age:33, salary:233223, Married:false},
      {name:'Sonu', age:43, salary:23233, Married:true},
      {name:'Gunu', age:13, salary:222, Married:true},
    ]
  }
}
