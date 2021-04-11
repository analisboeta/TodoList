import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { TodoItem } from '../models/todo.item';
import { TodoService } from '../services/todo.service';

@Injectable()
export class ItemResolver implements Resolve<TodoItem> {
  constructor(private todoService: TodoService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<TodoItem> | Promise<TodoItem> | TodoItem {
    const id = Number(route.params.id);
    return of(this.todoService.findById(id));
  }

}
