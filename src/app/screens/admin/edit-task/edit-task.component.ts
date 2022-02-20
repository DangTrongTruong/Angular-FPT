import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectService } from 'src/app/services/project.service';
import { TaskService } from 'src/app/services/task.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {
  projects:Array<any>=[];
  users:Array<any>=[];
  taskId: string = "";
  taskForm = new FormGroup({
    name: new FormControl(),
    description: new FormControl(),
    createAt: new FormControl(),
    finnishAt: new FormControl(),
    status: new FormControl(),
    project: new FormControl(),
    user: new FormControl(),
  });
  constructor(private projectService: ProjectService,private taskService: TaskService,private userService: UserService, private route: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.projectService.getData().subscribe(response => {
      this.projects = response.projects;
    })
    this.userService.getData().subscribe(response => {
      this.users = response.users;
    })
    this.activatedRoute.params.subscribe(urlParams => {
      this.taskId = urlParams['taskId'];
      this.taskService.getOne(this.taskId).subscribe(data => {
        this.taskForm.patchValue(data.task);
      })
    })
  }

  submitForm() {
    console.log(this.taskForm.value);
    this.taskService.saveEdit(this.taskForm.value, this.taskId).subscribe(response => {
      this.route.navigate(['/admin/task']);
    });
  }

}
