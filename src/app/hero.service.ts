import { Injectable } from '@angular/core';
@Injectable()
export class HeroService {
  constructor(public state: string) {
    this.state = 'inactive';
  }
  toggleState() {
    this.state = this.state ===  'active' ? 'inactive' : 'active';
  }
}
