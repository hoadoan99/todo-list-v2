import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  @Input() task:string | undefined
  @Input() changeColor:any
  @Output() deleteTask: EventEmitter<any> = new EventEmitter<any>();
  @Output() changeStatus = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
    console.log(this.changeColor);

  }
    handleDelete(){
      this.deleteTask.emit();
    }
    handleStatus(){
      this.changeStatus.emit();
      console.log(this.changeColor);
    }
}
