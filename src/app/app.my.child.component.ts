import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LoggerService } from './logger.service';

@Component({
  selector: 'app-child',
  templateUrl: './app.child.component.html'
})
export class AppChildComponent implements OnInit {
  @Input() private news: string;
  @Output() private outer = new EventEmitter<string>();
  constructor( private log: LoggerService) {

  }

  sendToParent() {
    this.log.debug('6666');
    this.outer.emit('子组件传送给父组件的消息');
  }
  ngOnInit() {

  }
}
