import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.css']
})
export class EditProjectComponent implements OnInit {
  projectId: string = "";
  projectForm = new FormGroup({
    name: new FormControl(null, Validators.required),
    startDate: new FormControl(),
    teamSize: new FormControl(null, [Validators.required, Validators.min(0)]),
  });
  constructor(private projectService: ProjectService, private route: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(urlParams => {
      this.projectId = urlParams['projectId'];
      this.projectService.getOne(this.projectId).subscribe(data => {
        this.projectForm.patchValue(data.project);
      })
    })
  }

  submitForm() {
    console.log(this.projectForm.value);
    this.projectService.saveEdit(this.projectForm.value, this.projectId).subscribe(response => {
      this.route.navigate(['/admin/project']);
    });
  }




}
