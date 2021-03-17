import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { TodoItem } from '../shared/todo.item';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent {

  @Input()
  item: TodoItem;

  constructor() {
  }

}
