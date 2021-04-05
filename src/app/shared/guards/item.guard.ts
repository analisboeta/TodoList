import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TodoService } from '../services/todo.service';

@Injectable()
export class ItemGuard implements CanActivate {


  constructor(private todoService: TodoService, private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // guard é o sitio certo para averiguar se estou a passar um id NUMBER ou outra coisa qq
    const id = Number(route.params.id);
    const item = this.todoService.findById(id);

    if (!item) {
      this.router.navigate(['/notfound']);
    }
    return !!item;
  }
}
