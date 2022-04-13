import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  item: string;
  test: string = 'test';

  constructor() {}

  ngOnInit(): void {}

  output(str: string): string {
    return str; //'Hi';
  }
}
