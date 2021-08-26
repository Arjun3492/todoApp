import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TodoDetailComponent } from './pages/todo-detail/todo-detail.component';
import { TodoCardComponent } from './shared/todo-card/todo-card.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent,
    children: [
      { path: '', component: TodoCardComponent},
      { path: 'detail', component: TodoDetailComponent, },
      // {path:':id',component: TodoDetailComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
