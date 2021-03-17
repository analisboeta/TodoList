import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { TodoItem } from '../shared/todo.item';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit, OnChanges {

  private _item: TodoItem;

  constructor() {
  }

  ngOnInit(): void {
  }

  // nao tem outro tipo que nao simple changes, o objeto changes tem previous current e first change
  ngOnChanges(changes: SimpleChanges): void {
    console.log('OnChanges here! ', changes);
  }

  public get item(): TodoItem {
    return this._item;
  } // padrao getter TS


  @Input()
  public set item(item) {
    this._item = item;
    console.log('set item >>', item);
  } // padrao setter TS

}
