import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from 'src/app/services/project.service';
import { TaskService } from 'src/app/services/task.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.css']
})
export class ListTaskComponent implements OnInit {
  title = 'Angular Search Using ng2-search-filter';
  searchText:any;
  projectId: string = '';
  tasks:  Array<any> = [];
  user:any = {};
  project:any = {};
  constructor(private taskService:TaskService,private projectService:ProjectService, private userService:UserService,private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(urlParams => {
      this.projectId = urlParams['projectId'];
      this.taskService.getData().subscribe(response => {
        console.log(response);
        this.tasks = response.tasks.filter( (item:any) =>{
          this.projectService.getOne(item.project).subscribe((response:any) => {
            this.project = response.project
          })
          this.userService.getOne(item.user).subscribe((response:any) => {
            this.user = response.user
          })
         return item.project === this.projectId
        });

      })
    })
  }

  removeTask(id: number){
    if(window.confirm('Ban co chac chan muon xoa khong ?')){
      this.taskService.remove(id).subscribe(() => {
        this.tasks = this.tasks.filter(item => item._id != id);
      })
    }
  }

}
