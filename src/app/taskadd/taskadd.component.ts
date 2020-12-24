import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TaskService } from 'src/app/services/task.service';
import { Task } from '../models/Task';

@Component({
  selector: 'app-taskadd',
  templateUrl: './taskadd.component.html',
  styleUrls: ['./taskadd.component.css']
})
export class TaskaddComponent implements OnInit {

  frm = new FormGroup({
    title: new FormControl(''),
    body: new FormControl('')
  });
  constructor(private service: TaskService) { }
  ngOnInit() {}
  submitPost(e) {
    e.preventDefault();
    let taskToAdd : Task = new Task();
    taskToAdd.description = this.frm.get('body').value;


    this.service.postData(taskToAdd).subscribe(response => {
      console.log(response);
    });
  }
}