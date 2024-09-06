import { Component, OnInit } from '@angular/core';

import { Animal } from 'src/app/Animal';

import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css'],
})
export class ListRenderComponent implements OnInit {
  animals: Animal[] = [];

  animal: Animal = {
    name: 'Test',
    type: 'Something',
    age: 10,
  };

  animalDetails = '';

  // encapsuling to protect services from other components to acess it
  constructor(private listService: ListService) {
    this.getAnimals();
  }

  ngOnInit(): void {}

  showAge(animal: Animal) {
    this.animalDetails = `The animal ${animal.name} has age of: ${animal.age} years old.`;
  }

  // logic in the front stays here
  removeAnimal(animal: Animal) {
    console.log('Removing animal...');
    this.animals = this.listService.remove(this.animals, animal);
  }
  getAnimals(): void {
    this.listService.getAll().subscribe((animals) => (this.animals = animals));
  }
}
