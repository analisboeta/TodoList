import { Component, DoCheck, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy, OnChanges, DoCheck {
  title = 'ToDoList';
  currentComponent: string = 'Root Component';

  ngOnInit(): void {
    console.log('On Init',this.currentComponent);
  }

  ngOnDestroy(): void {
    console.log('On Destroy',this.currentComponent);
  }

  ngOnChanges(): void {
    console.log('On Changes',this.currentComponent);
  }

  ngDoCheck(): void {
    console.log('On Do Check',this.currentComponent);
  }
}
