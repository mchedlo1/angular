import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main',
  imports: [FormsModule, CommonModule,],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

  inp = ""
  inpArr : string[] = []


  save(){

    if(this.inp != ""){
      this.inpArr.push(this.inp)
    }
    else{
      console.log("please fill out the input")
    }
    this.inp = ""

  }

  print(){

    
    for(let el of this.inpArr){

      console.log(el)

    }

  }
}

// Main კომპონენტში შემოიტანეთ ინფუთი და ორი ღილაკი. პირველ ღილაკზე კლიკით 
// ინფუთში ჩაწერილი ტექსტი ჩაიწეროს არაიში და მეორე ღილაკზე კლიკით ეს არაის 
// ელემენტები დაიბეჭროდ კონსოლში ცალ-ცალკე ხაზზე.

