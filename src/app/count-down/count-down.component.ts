import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-count-down',
  templateUrl: './count-down.component.html',
  styleUrls: ['./count-down.component.css']
})
export class CountDownComponent implements OnInit {
  timerEnd = new Date('December 31, 2019').getTime();
  timerStart = new Date().getTime();
  tRemaining = 0
  calcDays = 0
  calcHours = 0
  calcMins = 0
  calcSecs = 0
  rDay = 0
  rHour = 0
  

  intervalId = window.setInterval(() => {
    let start = this.timerStart;
    let end = this.timerEnd;
    this.tRemaining = (end - start)/1000;
    this.timerStart = new Date().getTime();
    this.calcDays = Math.floor(this.tRemaining / (60 * 60 * 24));
    this.rDay = this.tRemaining % (60 * 60 * 24)
    this.calcHours =  Math.floor(this.rDay / (60*60))
    this.rHour = this.rDay %(60*60)
    this.calcMins =  Math.floor(this.rHour / (60))
    this.calcSecs =  Math.floor(this.rHour % (60))

  }, 1000);

  constructor() {
  }

  ngOnInit() {
  }
}
