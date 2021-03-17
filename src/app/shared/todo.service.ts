import { Injectable } from '@angular/core';
import { TodoItem } from './todo.item';

@Injectable({ providedIn: 'root' })
export class TodoService {

  private itemsArchive: TodoItem[];

  constructor() {
    this.itemsArchive = [];
  }

  addItem(item: TodoItem): void {
    this.itemsArchive.push(item);
  }

  getItemsArchive(): TodoItem[] {
    return this.itemsArchive;
  }
}
