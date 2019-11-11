import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators'

@Component({
  selector: 'app-firebasecrud',
  templateUrl: './firebasecrud.component.html',
  styleUrls: ['./firebasecrud.component.css']
})
export class FirebasecrudComponent implements OnInit {

  private emp: any
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.Getdata()
  }

  PostData(name) {
    let data = {
      name: name.value
    }
    this.http.post('https://crud-e3bb5.firebaseio.com/employees.json', data)
      .subscribe(
        (res) => {
          console.log(res)

        }
      )
  }
  Getdata() {
    this.http.get('https://crud-e3bb5.firebaseio.com/employees.json').pipe(
      map((responsData) => {
        let resArray = [];
        for (let key in responsData) {
          if (responsData.hasOwnProperty(key)) {
            resArray.push({ ...responsData[key], id: key })
          }

        }
        return resArray;
      })
    )

      .subscribe(
        (res) => {
          console.log(res)
          this.emp = res;

        }
      )
  }
}
