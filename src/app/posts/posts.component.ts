import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

 empolyees:any
  constructor( private http: HttpClient) { }

  ngOnInit() {
    this.GetData()
  }

  GetData(){
    this.http.get("https://jsonplaceholder.typicode.com/posts").subscribe(
      (res)=>{
        console.log(res)
        this.empolyees = res
      }
    )
  }

  saveData(userID, id, title, body){
    let mydata = {
      userID: userID.value,
      id: id.value,
      title: title.value,
      body: body.value
    }
    this.http.post("https://jsonplaceholder.typicode.com/posts", mydata).subscribe(
      (res)=>{
        console.log(res)
        this.empolyees.splice(0,0,mydata)
        //this.GetData()
      }
      
    )
  }

}
