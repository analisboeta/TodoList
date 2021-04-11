import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { TodoItem } from '../shared/models/todo.item';
import { TodoService } from '../shared/services/todo.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit, OnDestroy {

  currentComponent = 'Form Component';
  public form: FormGroup;
  private item?: TodoItem;
  private subscriptions: Subscription[] = [];

  constructor(private fb: FormBuilder, private todoService: TodoService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.subscriptions.push(this.activatedRoute.data.subscribe((data) => {
      this.item = data.item;
      this.buildForm();
    }));
  }

  buildForm(): void {
    this.form = this.fb.group({
      name: [this.item?.title]
    });
  }

  addOrUpdateItem(): void {
    const title = this.form.controls.name.value;

    if (!!this.item) {
      this.item.title = title;
      this.todoService.editItem(this.item);
    } else {
      const newItem = new TodoItem();
      newItem.title = title;
      this.todoService.addItem(newItem);
    }

    this.router.navigate(['/list']);
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  // ngOnChanges(): void {
  //   console.log('On Changes', this.currentComponent);
  // }

  // ngDoCheck(): void {
  //   console.log('On Do Check', this.currentComponent);
  // }
}
