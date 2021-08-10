import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // @ViewChild('task') task:any;
  taskArray: string[] = [];
  changeColor = [false,false,false];
  // add new task
  addTask(value: string){
    console.log(value);

      if((value as string).trim() !== "" ){
        this.taskArray.push(value);
        // this.task.nativeElement.value="";
        console.log(this.taskArray);
      }
      else{
        alert("You haven't filled in the content, so you can't add new tasks !!!")
      }

  }
  // Submit task - enter task
  taskSubmit(value:any){
        if(value.task !== null){
            if(value.task !==""){
                console.log(value);
                this.taskArray.push(value.task);
                value.task = " ";
                console.log(this.taskArray);
            }
            else{
              alert("You haven't filled in the content, so you can't add new tasks !!!");
            }
        }
        else{
          alert("You haven't filled in the content, so you can't add new tasks !!!");
        }
  }
  // delete task
  deleteTask(task: any){
      let index = this.taskArray.indexOf(task);
      this.taskArray.splice(index, 1);
      console.log(this.taskArray);
  }
  // change status
  changeStatus(i:number){
    this.changeColor[i] = true
}
}
