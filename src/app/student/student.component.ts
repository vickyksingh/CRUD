import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators/';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  private callData : any[]
  constructor(private http : HttpClient) { }

  ngOnInit() {
    this.getData()
  }
  SubmitForm(data:{
      name: string,
      age: string,
      salary : string,
    }){
  
    this.http.post("https://crud-e3bb5.firebaseio.com/students.json", data ).subscribe(
      (res)=>{
        console.log(res)
        this.getData()
      }
    )
  }

  getData(){
    this.http.get("https://crud-e3bb5.firebaseio.com/students.json").pipe(
      map((responsData=>{
        let NewArray = [];
        for(let key in responsData){
          NewArray.push({...responsData[key], id:key})
        }
        return NewArray;
      }))
    )
    .subscribe(
      res=>{
        console.log(res)
        this.callData = res
      }
    )
  }

  DeleteData(id){
    this.http.delete('https://crud-e3bb5.firebaseio.com/students/'+id+'.json').subscribe(
      (res)=>{
        console.log('Deleted')
        this.getData()
      }
    )
  }
}
