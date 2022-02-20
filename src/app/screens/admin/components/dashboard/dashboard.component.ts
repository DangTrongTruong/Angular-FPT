import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/services/project.service';
import { TaskService } from 'src/app/services/task.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  projects:number = 0;
  members:number = 0;
  tasks:number = 0;
  constructor(private projectService: ProjectService,private userService: UserService,private taskService:TaskService) {}

  ngOnInit(): void {
    this.projectService.getData().subscribe(response => {
      this.projects = response.projects.length;
    })
    this.userService.getData().subscribe(response => {
      this.members = response.users.length;
    })
    this.taskService.getData().subscribe((response:any) => {
      this.tasks = response.tasks.length;
    })
  }

}
