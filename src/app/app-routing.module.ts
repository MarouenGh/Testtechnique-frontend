import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TasklistComponent } from './tasklist/tasklist.component';
import { TaskaddComponent } from './taskadd/taskadd.component';
import { TaskdetailsComponent} from './taskdetails/taskdetails.component';

const routes: Routes = [
  { path: '', component: TasklistComponent},
  { path: 'tasks/add', component: TaskaddComponent},
  { path: 'tasks/update/:id', component: TaskdetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
