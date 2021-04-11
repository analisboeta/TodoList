import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ItemGuard } from './shared/guards/item.guard';
import { ItemResolver } from './shared/resolvers/item.resolver';

const routes: Routes = [
  /**
   * The order of the routes is important! - <b>First match mode</b> the first one to match is the one to be resolved.
   *
   *   @field - path - the patch that matches the route;Can be a wild card (**) that matches any URL (see Usage Notes below). Default is “/” (the root path).
   *   @field - component - the component that will be opened by that route. Can be empty if child routes specify components.
   *   @field - can activate - n array of DI tokens used to look up CanActivateChild() handlers, in order to determine if the current user is allowed to activate a child of the component. By default, any user can activate a child.
   */
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
    canActivate: [ItemGuard],
    resolve: { item: ItemResolver }
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
    /**
     * Creates and configures a module with all the router providers and directives. Optionally sets up an application listener to perform an initial navigation.
     * When registering the NgModule at the root, import as follows: imports: [RouterModule.forRoot(ROUTES)]
     * @param - routes – An array of Route objects that define the navigation paths for the application.
     * @param - config – An ExtraOptions configuration object that controls how navigation is performed.
     * Returns:
     * The new NgModule.
     */
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}


