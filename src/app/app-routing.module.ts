import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ItemGuard } from './shared/guards/item.guard';

const routes: Routes = [
  // A ORDEM INTERESSA - modo first match, o primeiro a fazer match é o que é resolvido
  {
    path: 'list',
    component: ListComponent
  },
  {
    path: 'add',
    component: FormComponent
  },
  {
    path: 'edit/:id',
    component: FormComponent,
    canActivate: [ItemGuard]
  },
  {
    path: '',
    pathMatch: 'full',
    component: ListComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}


