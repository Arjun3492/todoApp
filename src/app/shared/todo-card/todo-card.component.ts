import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import{Todo} from 'src/app/model/todo'


@Component({
  selector: 'app-todo-card',
  templateUrl: './todo-card.component.html',
  styleUrls: ['./todo-card.component.scss']
})
export class TodoCardComponent implements OnInit {
  Todos:Todo[];
  constructor() {
    const localData = localStorage.getItem('Todos');
    if(localData!=null){
      this.Todos=JSON.parse(localData);
    }
    else{
      this.Todos=[]
    }
   }


  ngOnInit(): void {
  }
  deleteTodo(index:number){
    this.Todos.splice(index, 1);
    localStorage.setItem('Todos', JSON.stringify(this.Todos));
  }
}
