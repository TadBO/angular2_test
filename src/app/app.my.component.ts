import {  Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { LoggerService } from './logger.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.my.component.html'
})
  export  class AppMyComponent implements  OnInit {
  private message: string;
  private isShow: boolean;
  private msgToChild: string;
  private msgFromChild: string;
  constructor( private logger: LoggerService) {

  }
  ngOnInit() {
    this.message = 'angular';
    this.msgToChild = '父组件的消息';
    this.logger.debug('根组件已经初始话完毕');
  }
  receive(msg: string) {
    this.msgFromChild = msg;
  }
}
