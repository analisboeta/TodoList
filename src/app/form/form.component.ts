import { DoCheck, OnDestroy } from '@angular/core';
import { OnChanges } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TodoItem } from '../shared/todo.item';
import { TodoService } from '../shared/todo.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit, OnDestroy, OnChanges, DoCheck {

  currentComponent: string = 'Form Component';
  public form: FormGroup;

  constructor(private fb: FormBuilder, private todoService: TodoService) {
    this.buildForm();
  }

  buildForm(): void {
    this.form = this.fb.group({
      name: []
    });
  }

addItems():void {
  this.todoService.addItem(new TodoItem(this.form.value.name));
}
  ngOnInit(): void {
    console.log('On Init', this.currentComponent);
  }

  ngOnDestroy(): void {
    console.log('On Destroy', this.currentComponent);
  }

  ngOnChanges(): void {
    console.log('On Changes', this.currentComponent);
  }

  ngDoCheck(): void {
    console.log('On Do Check', this.currentComponent);
  }
}