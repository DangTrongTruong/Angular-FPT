import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
})
export class ProjectComponent implements OnInit {
  title = 'Angular Search Using ng2-search-filter';
  searchText:any;
  projects:  Array<any> = [];
  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    this.projectService.getData().subscribe(response => {
      this.projects = response.projects;
      console.log(response);
    })
  }

  removeProject(id: number){
    if(window.confirm('Ban co chac chan muon xoa khong ?')){
      this.projectService.remove(id).subscribe(() => {
        this.projects = this.projects.filter(item => item._id != id);
      })
    }
  }
}
