import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Task } from '../models/Task';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-taskedit',
  templateUrl: './taskedit.component.html',
  styleUrls: ['./taskedit.component.css']
})
export class TaskeditComponent implements OnInit {
  @Input()  task: any;
  frm
  
  constructor(private service: TaskService, public activeModal: NgbActiveModal,private toastr: ToastrService) { }

  ngOnInit(): void {
    console.log(this.task);
    this.frm = new FormGroup({
      title: new FormControl(this.task.id),
      body: new FormControl(this.task.description)
    });
  }


  updateTask(e) {
    let taskToUpdate : Task = new Task();
    taskToUpdate.id = this.task.id;
    taskToUpdate.description = this.frm.get('body').value;

    e.preventDefault();

    this.service.updateTask(this.task.id, taskToUpdate).subscribe(response => {
      this.toastr.success('Tâche modofiée avec succés ');
      this.ngOnInit();
    });
  }
}
