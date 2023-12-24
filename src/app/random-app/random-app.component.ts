import { Component, OnInit } from '@angular/core';
import { Random_Num } from '../Services2/random';

@Component({
  selector: 'app-random-app',
  templateUrl: './random-app.component.html',
  styleUrls: ['./random-app.component.css']
})
export class RandomAppComponent implements OnInit {
random=0;
  constructor(private random_Num:Random_Num) { }

  ngOnInit(): void {
this.random=this.random_Num.getNumber();
  }

}
