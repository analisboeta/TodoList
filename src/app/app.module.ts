import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { ListItemComponent } from './list-item/list-item.component';
import { ListComponent } from './list/list.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ItemGuard } from './shared/guards/item.guard';
import { AuthorizationHeaderInterceptor } from './shared/interceptors/authorization-header.interceptor';
import { ErrorLoggerInterceptor } from './shared/interceptors/error-logger.interceptor';
import { ItemResolver } from './shared/resolvers/item.resolver';
import { TodoService } from './shared/services/todo.service';

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
    HttpClientModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [
    TodoService,
    ItemGuard,     // guards precisam de estar aqui
    ItemResolver,
    { // A ORDER DOS INTERCEPTORS INTERESSA
      provide: HTTP_INTERCEPTORS, // a classe de baixo é um interceptor
      useClass: AuthorizationHeaderInterceptor, // --> se queres declarar outro, repete o objeto e muda a classe
      multi: true // não é um interceptor único, é um array
    },
    {
      provide: HTTP_INTERCEPTORS, // a classe de baixo é um interceptor
      useClass: ErrorLoggerInterceptor, // --> se queres declarar outro, repete o objeto e muda a classe
      multi: true // não é um interceptor único, é um array
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
