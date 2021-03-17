import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { TodoItem } from '../shared/todo.item';
import { TodoService } from '../shared/todo.service';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent {

  @Input()
  item: TodoItem;

  constructor(private todoService: TodoService ) {
  }

  delete():void {
    this.todoService.deleteItem(this.item);
  }
}
