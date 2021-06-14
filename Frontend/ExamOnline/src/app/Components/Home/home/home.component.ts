import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  i:number;
  bodyImage:string;
  arrayImage:string[];
  Image1:string;
  Image2:string;
  Image3:string;
  constructor() { 
    this.Image1='assets/Home/Home1.jpg'
    this.Image2='assets/Home/Home2.jpg'
    this.Image3='assets/Home/Home3.jpg'

  }
  ngOnInit(): void {
    //Words Appear On Screen Home
    var typed = new Typed('.type', {
      strings: ['Choose Many and Different Exams', 'Test Yourself'],
      typeSpeed: 60,
      backSpeed: 60,
      loop:true,
    });
  }

}
