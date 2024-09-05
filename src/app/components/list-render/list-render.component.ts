import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css'],
})
export class ListRenderComponent implements OnInit {
  animals = [
    { name: 'Turca', type: 'Dog' },
    { name: 'Tom', type: 'Cat' },
    { name: 'Frida', type: 'Parrot' },
    { name: 'Horsei', type: 'Horse' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
