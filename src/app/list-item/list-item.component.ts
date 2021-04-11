import { Component, EventEmitter, Input, Output } from '@angular/core';
import { faPencilAlt, faTrash } from '@fortawesome/free-solid-svg-icons';
import { TodoItem } from '../shared/models/todo.item';
import { TodoService } from '../shared/services/todo.service';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent {

  faEdit = faPencilAlt;
  faDelete = faTrash;

  @Input()
  item: TodoItem;

  @Output() markAsDone = new EventEmitter<TodoItem>();


  constructor(private todoService: TodoService) {
  }

  delete(): void {
    this.todoService.deleteItem(this.item);
  }
}
