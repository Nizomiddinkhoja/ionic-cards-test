import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { TodosComponent } from "./todos.component";
import { IonicModule } from "@ionic/angular";
import { HttpClientModule } from "@angular/common/http";

const routes: Routes = [
  {
    path: '',
    component: TodosComponent,
  }
];

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TodosComponent]
})
export class TodosModule { }
