import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './listTwoPage.html'
})
export class ListTwoPageComponent implements OnInit {
  constructor(public activatedRoute: ActivatedRoute) {

  }
  ngOnInit() {
    console.log(this.activatedRoute);
    this.activatedRoute.params.subscribe(
      params => this.showPage(params['id'])
    );
  }
  public showPage(page: number) {
    console.log(page);
  }
}
