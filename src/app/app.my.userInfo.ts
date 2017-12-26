import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
@Component({
  selector: 'appMyUserInfo',
  template: '<div>' +
  '<h1>{{ titlePanel }}</h1>' +
  '<button (click)="sendMsg()">点击发送</button>' +
  '</div>'
})
export class AppMyUserInfoComponent implements OnInit{
  @Input()
  public titlePanel: string;
  @Output()
  public msg = new EventEmitter<any>();
  constructor() {}
  ngOnInit() {}
  sendMsg() {
    this.msg.emit('child to parent');
  }
}
