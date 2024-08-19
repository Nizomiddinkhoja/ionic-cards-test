import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { ITodo } from "../../models/todo";
import { TodoService } from "../../services/todo.service";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {

  destroyRef = inject(DestroyRef);
  todoData: ITodo;
  isLoading: boolean;

  constructor(private todoService: TodoService) {
  }

  ngOnInit() {
    this.isLoading = true;
    this.todoService.getTodoById()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: data => {
          this.todoData = data;
          localStorage.setItem('todoData', JSON.stringify(data));
        },
        complete: () => {
          this.isLoading = false;
        }
      });
  }

}
