import { Component, OnInit, Input } from '@angular/core';
import { hero } from './animations/hero.animation';
import {Observable} from "rxjs/Observable";


@Component({
  selector: 'app-home',
  templateUrl: './app.home.component.html',
  animations: [
    hero
  ]
})
export class AppHomeComponent implements OnInit {
  public currentTime = new Date();
  private state = 'inactive';
  private lowerCase: string = 'wqreqwrqwrqrweqrqrr';
  constructor() {
    setInterval(() => {
      this.currentTime = new Date();
    }, 1000);
  }
  ngOnInit() {

  }
  toggleState() {
    this.state = this.state === 'active' ? 'inactive' : 'active';
  }
}
