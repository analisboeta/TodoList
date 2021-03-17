import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TodoItem } from './todo.item';

@Injectable({ providedIn: 'root' })
export class TodoService {

  // behaviour subject implementation
  readonly itemsArchive$: BehaviorSubject<TodoItem[]>;

  constructor() {
    this.itemsArchive$ = new BehaviorSubject([]);
  }

  addItem(item: TodoItem): void {
    const temp = this.itemsArchive$.getValue();
    temp.push(item);
    this.itemsArchive$.next(temp);
  }
}
