import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css'],
})
export class AddProjectComponent implements OnInit {
  projectForm = new FormGroup({
    name: new FormControl(null, Validators.required),
    startDate: new FormControl(),
    teamSize: new FormControl(null, [Validators.required, Validators.min(0)]),
  });
  constructor(private projectService: ProjectService, private route: Router) {}

  ngOnInit(): void {}

  submitForm() {
    console.log(this.projectForm.value);
    this.projectService
      .saveAdd(this.projectForm.value)
      .subscribe((response) => {
        this.route.navigate(['/admin/project']);
      });
  }
}
