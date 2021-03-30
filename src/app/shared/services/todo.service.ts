import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { TodoItem } from '../models/todo.item';

@Injectable({ providedIn: 'root' })
export class TodoService implements OnDestroy {

  // behaviour subject implementation
  readonly itemsArchive$: BehaviorSubject<TodoItem[]>;

  // build consoante a flag substitui ficheiro env.ts
  readonly api: string = environment.api;

  private subscriptions: Subscription[] = [];

  constructor(private httpclient: HttpClient) {
    this.itemsArchive$ = new BehaviorSubject([]);
  }

  loadItems(): void {
    // teste - tira os genericos e ve o erro que acontece
//    const subscription = this.httpclient.get<TodoItem[]>(this.api).subscribe(items => this.itemsArchive$.next(items));
    const response$ = this.httpclient.get<TodoItem[]>(this.api).pipe(map((result: []) => {
      const deserializedResults: TodoItem[] = [];
      result.forEach(item => deserializedResults.push(new TodoItem().deserialize(item)));
      return deserializedResults;
    }));
    const subscription = response$.subscribe(items => {
      this.itemsArchive$.next(items);
      console.log(typeof items[0]);
    });
    this.subscriptions.push(subscription);
  }

  addItem(item: TodoItem): void {
    const temp = this.itemsArchive$.getValue();
    temp.push(item);
    this.itemsArchive$.next(temp); // atualizar obs
  }

  deleteItem(itemToDelete: TodoItem): void {
    const temp = this.itemsArchive$.getValue();
    const index = temp.findIndex(item => item.id === itemToDelete.id);

    if (index > -1) {
      temp.splice(index, 1);
    }
    this.itemsArchive$.next(temp);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }


}
