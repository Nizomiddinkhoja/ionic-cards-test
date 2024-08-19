import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { Observable } from "rxjs";
import { ITodo } from "../models/todo";

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) {
  }

  getTodoById(): Observable<ITodo> {
    return this.http.get<ITodo>(environment.todoUrl);
  }
}
