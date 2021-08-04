import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TodoService } from '../services/todo.service';

@Injectable()
export class ItemGuard implements CanActivate {


  constructor(private todoService: TodoService, private router: Router) {
  }

  /**
  retorna observable --> assincrono
  promise -> assincrono 
  boolean -> sincrono
  
  Promise - padrao de javascript; 
  é cncelavel
  Observable - "superset" de javascropt
  */
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
  
  /*
  õutros exemplo de guard sao candeactivate e o resolve
  */
  
  //CAN DEACTIVATE
  
  
  
  
  /* 
interface CanDeactivate<T> {
  canDeactivate(
  component: T, --> de onde está a tentar sair
  currentRoute: ActivatedRouteSnapshot, 
  currentState: RouterStateSnapshot, 
  nextState?: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree
}
*/

valida se posso sair da rota e ir apra outra rota
  casos em que nao funciona sao
    alteraces diretas no browser ou qq  alteracao que faça sair de angular
  
  
  
  
  
}
