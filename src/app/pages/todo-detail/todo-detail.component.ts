import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms';
import{Todo} from 'src/app/model/todo'
import { Router } from '@angular/router';



@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.scss']
})
export class TodoDetailComponent implements OnInit {
  Todo:Todo;
  Todos:Todo[]=[];
  todoTitle='Add Title';
  todoDetail='Add Description';
  constructor(private router: Router) {
    const localData= localStorage.getItem('Todos')
    this.Todos=localData!=null?JSON.parse(localData):[];
    this.Todo={
      title: '',
      detail: ''
    };
   }

  ngOnInit(): void {
  }
 log(message: NgForm){
  //  console.log(message)
 }
 addTodo(){
   this.Todo.title=this.todoTitle;
   this.Todo.detail=this.todoDetail
   this.Todos.push(this.Todo);
   localStorage.setItem('Todos',JSON.stringify(this.Todos));
   console.log(localStorage.getItem('Todos'))
   this.router.navigateByUrl('');
 }
}
