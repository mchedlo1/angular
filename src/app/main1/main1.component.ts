import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-main1',
  imports: [FormsModule],
  templateUrl: './main1.component.html',
  styleUrl: './main1.component.scss'
})
export class Main1Component {

  student = {
    name : "",
    age : null,
    email : "",
    address : {
        street : "",
        city : "",
        zip : "",
    }
  } 

  studentArr : any[] = []

  Save(){

    this.studentArr.push(this.student)
    console.log(this.studentArr)

    this.student = {
      name : "",
      age : null,
      email : "",
      address : {
          street : "",
          city : "",
          zip : "",
      }
    } 

  }

  Show(){

  }
}
