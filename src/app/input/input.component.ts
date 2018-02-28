import { Component, OnInit , Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'todo-input',
  template: `
  <input class="todo-input" [value]="title" 
        (keyup.enter)="changeTitle($event.target.value)" #inputElement >
  <button class="btn btn-red" (click)="changeTitle(inputElement.value)">
    Save
  </button>
  `,
  styleUrls: ['./input.component.css']
})

export class InputComponent implements OnInit {
  title: string ='hello';
  
  @Output() submit: EventEmitter<string> = new EventEmitter();

  ngOnInit() {
    //this.title = 'inputtitle';

  

  }


  changeTitle(newTitle: string): void {
    this.submit.emit(newTitle);
  }
}
