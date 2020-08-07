import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  public items = []

  constructor(private todoService : TodoService) { }

  ngOnInit(): void {
    this.todoService.getItems()
      .subscribe(data => {
        this.items = data;
        console.log('Data:', this.items);
      });
  }

}
