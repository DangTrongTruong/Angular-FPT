import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/services/project.service';
import { TaskService } from 'src/app/services/task.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  title = 'Angular Search Using ng2-search-filter';
  searchText:any;
  projectId: string = '';
  tasks:  Array<any> = [];
  constructor(private taskService:TaskService,private projectService:ProjectService, private userService:UserService) {}

  ngOnInit(): void {

      this.taskService.getData().subscribe(response => {
          this.tasks = response.tasks
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
