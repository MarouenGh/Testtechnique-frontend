import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-taskdetails',
  templateUrl: './taskdetails.component.html',
  styleUrls: ['./taskdetails.component.css']
})
export class TaskdetailsComponent implements OnInit {

  frm = new FormGroup({
    title: new FormControl(''),
    body: new FormControl('')
  });
  postId: Number = 0;
  constructor(private service: TaskService,private route: ActivatedRoute ) { }
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.postId = parseInt(params.get('id'));
    });
  }
  updateTask(e) {
    e.preventDefault();
    let params = {
      title: this.frm.get('title').value,
      body: this.frm.get('body').value
    };
    this.service.updateTask(this.postId, params).subscribe(response => {
      console.log(response);
    });
  }
}