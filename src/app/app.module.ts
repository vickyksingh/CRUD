import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeesComponent } from './employees/employees.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductComponent } from './product/product.component'
import { FormsModule} from '@angular/forms';
import { DoctorComponent } from './doctor/doctor.component';
import { PostsComponent } from './posts/posts.component';
import { FirebasecrudComponent } from './firebasecrud/firebasecrud.component';
import { StudentComponent } from './student/student.component'
@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    ProductComponent,
    DoctorComponent,
    PostsComponent,
    FirebasecrudComponent,
    StudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
