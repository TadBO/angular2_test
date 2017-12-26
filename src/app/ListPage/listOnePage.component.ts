import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './listOnePage.html'
})
export class ListOnePageComponent implements OnInit {
  public childMsg: string;
  constructor() {

  }
  ngOnInit() {

  }
  getMsg(msg: string) {
    this.childMsg = msg;
  }
}
