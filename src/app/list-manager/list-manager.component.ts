import { Component, OnInit } from '@angular/core';

import { TodoListService } from '../todo-list.service';

@Component({
  selector: 'todo-list-manager',
  template: `

    <todo-input (submit)="addItem($event)"></todo-input>
    

<ul>
  <li *ngFor="let item of todoList">
  <todo-item [todoItem]="item" (remove)="removeItem($event)" ></todo-item>
  </li>
</ul>

  `,
  styleUrls: ['./list-manager.component.css']
})
export class ListManagerComponent implements OnInit {

  title = 'todo works';
  todoList;

  constructor(private todoListService:TodoListService) { }

  ngOnInit() {
    this.todoList = this.todoListService.getTodoList();
}

  addItem(title: string): void {
    //debugger
    this.todoList = this.todoListService.addItem({ title:title });
    //debugger
  }
  
  removeItem(item) {
    this.todoList = this.todoListService.removeItem(item);
  }

}
