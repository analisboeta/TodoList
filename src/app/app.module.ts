import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatLineModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';
import { ItemGuard } from './shared/guards/item.guard';
import { TodoService } from './shared/services/todo.service';
import { ListItemComponent } from './list-item/list-item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ListComponent,
    ListItemComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    HttpClientModule,
    AppRoutingModule,
    MatLineModule
  ],
  providers: [
    TodoService,
    ItemGuard // guards precisam de estar aqui
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
