import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { TodoItem } from '../shared/models/todo.item';
import { TodoService } from '../shared/services/todo.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, OnDestroy {

  archiveLength = 0;
  itemsArchive$: Observable<TodoItem[]>;
  private subscriptions: Subscription[] = [];

  constructor(private todoService: TodoService) {
    this.itemsArchive$ = this.todoService.itemsArchive$;
  }


  ngOnInit(): void {
    this.subscriptions.push(this.itemsArchive$.subscribe(items => this.archiveLength = items.length));
  }

  ngOnDestroy(): void {
    console.log('ListComponent ngOnDestroy');
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }
}
