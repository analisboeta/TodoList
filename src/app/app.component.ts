import { Component, DoCheck, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy, OnChanges, DoCheck {
  title = 'ToDoList';
  currentComponent = 'Root Component';

  ngOnInit(): void {
    console.log('On Init', this.currentComponent);
  }

  ngOnDestroy(): void {
    console.log('On Destroy', this.currentComponent);
  }

  ngOnChanges(): void {
  }

  ngDoCheck(): void {
  }
}
