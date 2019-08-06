import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit {

  public text:string;

  constructor() {
  }

  ngOnInit() {
    this.text = 'app is working!';
  }
}
