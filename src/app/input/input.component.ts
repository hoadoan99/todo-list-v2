import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  @Output() inputValue = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }
  addTaskChild(input: HTMLInputElement){
    this.inputValue.emit(input.value);
    console.log(input.value);
      input.value ='';
  }

}
