import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css'],
})
export class FirstComponentComponent implements OnInit {
  name: string = 'Evelyn';
  age: number = 25;
  job = 'Programmer';

  hobbies = ['Coding', ' Gaming ', ' Reading'];

  constructor() {}

  ngOnInit(): void {}
}
