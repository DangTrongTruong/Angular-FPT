import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProjectService } from 'src/app/services/project.service';
import { TaskService } from 'src/app/services/task.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  users:Array<any> = [];
  projects:Array<any>=[];
  taskForm = new FormGroup({
    name: new FormControl(),
    description: new FormControl(),
    createAt: new FormControl(),
    finnishAt: new FormControl(),
    status: new FormControl(),
    project: new FormControl(),
    user: new FormControl(),
  });
  constructor(private projectService: ProjectService,private userService: UserService,private taskService: TaskService, private route: Router) {}

  ngOnInit(): void {
    this.projectService.getData().subscribe(response => {
      this.projects = response.projects;
    })
    this.userService.getData().subscribe(response => {
      this.users = response.users;
    })
  }

  submitForm() {
    console.log(this.taskForm.value);
    this.taskService
      .saveAdd(this.taskForm.value)
      .subscribe((response) => {
        this.route.navigate(['/admin/task']);
      });
  }

}
