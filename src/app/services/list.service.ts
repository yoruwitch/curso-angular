import { Injectable } from '@angular/core';
import { Animal } from '../Animal';

@Injectable({
  providedIn: 'root',
})
export class ListService {
  constructor() {}

  // service name is simmilar to the component
  // this normally comes from an database
  remove(animals: Animal[], animal: Animal) {
    return animals.filter((a) => animal.name !== a.name);
  }
}
